const fs = require('fs');

function inspectSubGame(gameJsPath) {
    const content = fs.readFileSync(gameJsPath, 'utf8');
    const regex = /System\.register\("chunks:\/\/\/_virtual\/([^"]+)"/g;
    let match;
    const modules = [];
    while ((match = regex.exec(content)) !== null) {
        modules.push(match[1]);
    }
    console.log('=== ' + gameJsPath + ' ===');
    console.log('Total modules:', modules.length);
    console.log(modules.slice(0, 50).join('\n'));
}

inspectSubGame('d:/gameprojects/mi/unpacked/base/subpackages/base/game.js');
