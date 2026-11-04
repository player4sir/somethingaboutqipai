const fs = require('fs');
const path = require('path');

const UNPACKED_DIR = 'd:/gameprojects/mi/puer_mahjong_export/unpacked';
const PROTO_OUT_DIR = 'd:/gameprojects/mi/puer_mahjong_export/proto';

fs.mkdirSync(PROTO_OUT_DIR, { recursive: true });

function scanDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            scanDir(fullPath);
        } else if (entry.name.endsWith('.json')) {
            try {
                const str = fs.readFileSync(fullPath, 'utf8');
                if (str.includes('syntax = "proto') || str.includes('package Game;') || str.includes('package Common;')) {
                    const data = JSON.parse(str);
                    extractProtoFromCocosJson(data, fullPath);
                }
            } catch (e) {}
        }
    }
}

function extractProtoFromCocosJson(data, sourcePath) {
    // In Cocos Creator TextAsset:
    // [1,0,0,[["cc.TextAsset",["_name","text"],1]],[[0,0,1,3]],[[0,"Name","syntax = ..."]]]
    function findProto(obj) {
        if (typeof obj === 'string') {
            if (obj.includes('syntax =') || obj.includes('message ') || obj.includes('package ')) {
                return obj;
            }
        } else if (Array.isArray(obj)) {
            for (const item of obj) {
                const res = findProto(item);
                if (res) return res;
            }
        } else if (obj && typeof obj === 'object') {
            for (const key of Object.keys(obj)) {
                const res = findProto(obj[key]);
                if (res) return res;
            }
        }
        return null;
    }

    const protoText = findProto(data);
    if (protoText) {
        let name = path.basename(sourcePath, '.json');
        const pkgMatch = protoText.match(/package\s+([A-Za-z0-9_]+);/);
        const pkg = pkgMatch ? pkgMatch[1] : 'Unknown';

        // Check for specific markers
        let filename = `${pkg}_${name.substring(0, 8)}.proto`;
        if (protoText.includes('enum Command') || protoText.includes('message RspLoginSuccess')) {
            filename = `${pkg}_Base.proto`;
        }
        if (protoText.includes('message OutCard') || protoText.includes('FixBanker') || protoText.includes('HandCards')) {
            filename = `Mahjong_Game.proto`;
        }
        if (protoText.includes('PlayerInfo') && protoText.includes('Broadcast')) {
            filename = `Common_Broadcast.proto`;
        }

        const outPath = path.join(PROTO_OUT_DIR, filename);
        fs.writeFileSync(outPath, protoText);
        console.log(`成功提取: ${filename} (来自 ${path.basename(sourcePath)}, 大小: ${protoText.length} 字节)`);
    }
}

console.log('=== 扫描并提取所有 Protobuf 定义 ===');
scanDir(UNPACKED_DIR);
console.log('=== 提取完成 ===');
