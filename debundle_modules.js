const fs = require('fs');
const path = require('path');
const beautify = require('js-beautify').js;

function debundle(gameJsPath, outputDir) {
    console.log(`\n正在解绑并格式化: ${gameJsPath}...`);
    fs.mkdirSync(outputDir, { recursive: true });
    const content = fs.readFileSync(gameJsPath, 'utf8');

    const prefix = 'System.register("chunks:///_virtual/';
    const regex = /System\.register\("chunks:\/\/\/_virtual\/([^"]+)"/g;
    const matches = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
        matches.push({
            name: match[1],
            index: match.index
        });
    }

    console.log(`发现 ${matches.length} 个虚拟模块`);

    for (let i = 0; i < matches.length; i++) {
        const item = matches[i];
        const nextIndex = (i + 1 < matches.length) ? matches[i + 1].index : content.length;
        let rawCode = content.substring(item.index, nextIndex).trim();
        // Remove trailing commas or semicolons if between registers
        rawCode = rawCode.replace(/,\s*$/, '').replace(/;\s*$/, '');

        let fileName = item.name;
        if (!fileName.endsWith('.js') && !fileName.endsWith('.ts')) {
            fileName += '.js';
        } else if (fileName.endsWith('.ts')) {
            fileName = fileName.replace(/\.ts$/, '.js');
        }

        const filePath = path.join(outputDir, fileName);
        try {
            const formatted = beautify(rawCode, {
                indent_size: 4,
                space_in_empty_paren: true,
                preserve_newlines: true
            });
            fs.writeFileSync(filePath, formatted);
        } catch (e) {
            fs.writeFileSync(filePath, rawCode);
        }
    }
    console.log(`成功导出 ${matches.length} 个格式化模块到: ${outputDir}`);
}

const EXPORT_ROOT = 'd:/gameprojects/mi/puer_mahjong_export';

debundle(
    path.join(EXPORT_ROOT, 'unpacked/subGame_mj/subpackages/subGame_mj/game.js'),
    path.join(EXPORT_ROOT, 'src_subGame_mj')
);

debundle(
    path.join(EXPORT_ROOT, 'unpacked/base/subpackages/base/game.js'),
    path.join(EXPORT_ROOT, 'src_base')
);

debundle(
    path.join(EXPORT_ROOT, 'unpacked/game/subpackages/game/game.js'),
    path.join(EXPORT_ROOT, 'src_game')
);

console.log('\n=== 全量子模块代码解包格式化完成 ===');
