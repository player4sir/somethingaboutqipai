const fs = require('fs');
const path = require('path');

const gameBasePath = 'd:/gameprojects/mi/hlddz_export/unpacked/472/_src_GameBase_/src/GameBase/game.js';
const code = fs.readFileSync(gameBasePath, 'utf8');

// check for define / System.register / Cocos module definition
const sysMatches = code.match(/System\.register\(\s*["']([^"']+)["']/g);
console.log('SystemJS modules in GameBase:', sysMatches ? sysMatches.length : 0);

// Search for window.__require, __modular, cc.register, etc.
const requireMatches = code.match(/window\.__require|cc\.register|cc\._RF\.push/g);
console.log('Cocos / Require matches:', requireMatches ? [...new Set(requireMatches)] : null);

// Search for Card, Table, Game, Ddz, Room, Rule
const cardMatches = code.match(/(?:Card|DDZ|Table|Desk|Player|Rule|Room|HandCard|OutCard|GrabLord|JiaoDiZhu|RobDiZhu)[A-Za-z0-9_]*/g);
console.log('Found game classes:', cardMatches ? [...new Set(cardMatches)].slice(0, 30) : null);

// Check protobuf or network in GameBase or Common
const commonPath = 'd:/gameprojects/mi/hlddz_export/unpacked/472/_src_Common_/src/Common/game.js';
if (fs.existsSync(commonPath)) {
  const commonCode = fs.readFileSync(commonPath, 'utf8');
  console.log('Common size:', commonCode.length);
  const sysCommon = commonCode.match(/System\.register\(\s*["']([^"']+)["']/g);
  console.log('SystemJS in Common:', sysCommon ? sysCommon.length : 0);
  const ccCommon = commonCode.match(/window\.__require|cc\.register|cc\._RF\.push/g);
  console.log('Cocos in Common:', ccCommon ? [...new Set(ccCommon)] : null);
}
