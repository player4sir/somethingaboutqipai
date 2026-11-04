const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

function decryptWxapkg(filePath, wxid) {
    const buf = fs.readFileSync(filePath);
    if (buf.subarray(0, 6).toString('utf8') !== 'V1MMWX') {
        throw new Error('Not V1MMWX');
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

function unpack(dec, outDir) {
    fs.mkdirSync(outDir, { recursive: true });
    // In wxapkg format:
    // 0: 0xBE
    // 1..4: 0
    // 5..8: 0 (or version)
    // 9..12: indexInfoLength
    // 13..16: bodyInfoLength
    // 17: 0xED
    // 18..21: fileCount (or 14..17 depending on format)
    let offset = 14;
    let fileCount = dec.readUInt32BE(offset);
    if (fileCount > 50000 || fileCount === 0) {
        offset = 18;
        fileCount = dec.readUInt32BE(offset);
    }
    console.log(`Unpacking ${fileCount} files to ${outDir}...`);
    offset += 4;

    const files = [];
    for (let i = 0; i < fileCount; i++) {
        const nameLen = dec.readUInt32BE(offset);
        offset += 4;
        const name = dec.subarray(offset, offset + nameLen).toString('utf8');
        offset += nameLen;
        const fileOffset = dec.readUInt32BE(offset);
        offset += 4;
        const fileLen = dec.readUInt32BE(offset);
        offset += 4;
        files.push({ name, fileOffset, fileLen });
    }

    for (const f of files) {
        const targetPath = path.join(outDir, f.name.replace(/^\//, ''));
        fs.mkdirSync(path.dirname(targetPath), { recursive: true });
        const content = dec.subarray(f.fileOffset, f.fileOffset + f.fileLen);
        fs.writeFileSync(targetPath, content);
        console.log(`Extracted: ${f.name} (${f.fileLen} bytes)`);
    }
}

const args = process.argv.slice(2);
const srcFile = args[0];
const outDir = args[1];
const wxid = args[2] || 'wxf4e8b870d6c337ac';

const dec = decryptWxapkg(srcFile, wxid);
unpack(dec, outDir);
