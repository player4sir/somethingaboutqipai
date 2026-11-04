const fs = require('fs');
const content = fs.readFileSync('d:/gameprojects/mi/unpacked/base/subpackages/base/game.js', 'utf8');

function extractBaseMod(modName) {
    const marker = `System.register("chunks:///_virtual/${modName}"`;
    const start = content.indexOf(marker);
    if (start === -1) {
        console.log(`Module ${modName} not found`);
        return;
    }
    const end = content.indexOf('System.register("chunks:///_virtual/', start + marker.length);
    const modCode = end !== -1 ? content.substring(start, end) : content.substring(start, start + 3000);
    console.log(`=== Module: ${modName} (length: ${modCode.length}) ===`);
    console.log(modCode.substring(0, 2000));
}

extractBaseMod('Encrypto.ts');
extractBaseMod('GSocket.ts');
