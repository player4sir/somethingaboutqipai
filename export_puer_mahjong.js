const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const WXID = 'wxf4e8b870d6c337ac';
const PACKAGES_DIR = 'C:/Users/Administrator/AppData/Roaming/Tencent/xwechat/radium/users/857c917bec31d3f98010ac3483ccb697/applet/packages/wxf4e8b870d6c337ac/46';
const CACHES_DIR = 'C:/Users/Administrator/AppData/Roaming/Tencent/xwechat/radium/users/857c917bec31d3f98010ac3483ccb697/applet/local/wxf4e8b870d6c337ac/usr/gamecaches';
const EXPORT_ROOT = 'd:/gameprojects/mi/puer_mahjong_export';

const RAW_DIR = path.join(EXPORT_ROOT, 'raw_wxapkg');
const DEC_DIR = path.join(EXPORT_ROOT, 'decrypted_wxapkg');
const UNPACK_DIR = path.join(EXPORT_ROOT, 'unpacked');
const REMOTE_DIR = path.join(EXPORT_ROOT, 'remote_assets');

[RAW_DIR, DEC_DIR, UNPACK_DIR, REMOTE_DIR].forEach(dir => fs.mkdirSync(dir, { recursive: true }));

function decryptWxapkg(filePath, wxid) {
    const buf = fs.readFileSync(filePath);
    if (buf.subarray(0, 6).toString('utf8') !== 'V1MMWX') {
        return buf;
    }
    const salt = 'saltiest';
    const iv = 'the iv: 16 bytes';
    const key = crypto.pbkdf2Sync(wxid, salt, 1000, 32, 'sha1');
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    decipher.setAutoPadding(false);

    const decHeader = decipher.update(buf.subarray(6, 1024 + 6));
    const xorKey = wxid.charCodeAt(wxid.length - 2);

    const rest = Buffer.from(buf.subarray(1024 + 6));
    for (let i = 0; i < rest.length; i++) {
        rest[i] ^= xorKey;
    }

    return Buffer.concat([decHeader.subarray(0, 1023), rest]);
}

function unpackWxapkg(dec, targetDir) {
    fs.mkdirSync(targetDir, { recursive: true });
    let offset = 14;
    let fileCount = dec.readUInt32BE(offset);
    offset += 4;

    const results = [];
    for (let i = 0; i < fileCount; i++) {
        const nameLen = dec.readUInt32BE(offset);
        offset += 4;
        const name = dec.subarray(offset, offset + nameLen).toString('utf8');
        offset += nameLen;
        const fileOffset = dec.readUInt32BE(offset);
        offset += 4;
        const fileLen = dec.readUInt32BE(offset);
        offset += 4;

        const cleanName = name.replace(/^\//, '');
        const filePath = path.join(targetDir, cleanName);
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        const content = dec.subarray(fileOffset, fileOffset + fileLen);
        fs.writeFileSync(filePath, content);
        results.push({ name: cleanName, size: fileLen });
    }
    return results;
}

function copyDirRecursive(src, dest) {
    if (!fs.existsSync(src)) return;
    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyDirRecursive(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

async function main() {
    console.log('=== 开始获取与导出普洱麻将小程序完整包 ===');
    const files = fs.readdirSync(PACKAGES_DIR).filter(f => f.endsWith('.wxapkg'));
    console.log(`发现 ${files.length} 个 wxapkg 包文件`);

    const manifest = {
        appId: WXID,
        name: '普洱麻将 (东方棋牌)',
        exportTime: new Date().toISOString(),
        packages: []
    };

    for (const file of files) {
        const srcPath = path.join(PACKAGES_DIR, file);
        const rawPath = path.join(RAW_DIR, file);
        const decPath = path.join(DEC_DIR, file);

        console.log(`\n处理包: ${file}...`);
        fs.copyFileSync(srcPath, rawPath);

        const decBuf = decryptWxapkg(srcPath, WXID);
        fs.writeFileSync(decPath, decBuf);

        let pkgName = file.replace(/\.wxapkg$/, '');
        if (pkgName.startsWith('_subpackages_')) {
            pkgName = pkgName.replace(/^_subpackages_/, '').replace(/_$/, '');
        }
        const pkgUnpackDir = path.join(UNPACK_DIR, pkgName);

        try {
            const extracted = unpackWxapkg(decBuf, pkgUnpackDir);
            console.log(`  成功解包 ${extracted.length} 个文件到: ${pkgName}`);
            manifest.packages.push({
                packageFile: file,
                packageName: pkgName,
                rawSize: fs.statSync(srcPath).size,
                decryptedSize: decBuf.length,
                fileCount: extracted.length
            });
        } catch (e) {
            console.error(`  解包 ${file} 出现异常:`, e.message);
        }
    }

    console.log('\n复制远程下载与缓存的资源文件 (gamecaches)...');
    copyDirRecursive(CACHES_DIR, REMOTE_DIR);
    console.log('远程资源复制完成。');

    fs.writeFileSync(
        path.join(EXPORT_ROOT, 'export_manifest.json'),
        JSON.stringify(manifest, null, 2)
    );
    console.log(`\n清单已写入: ${path.join(EXPORT_ROOT, 'export_manifest.json')}`);
    console.log('全部获取与导出操作已成功完成！');
}

main().catch(err => console.error('执行失败:', err));
