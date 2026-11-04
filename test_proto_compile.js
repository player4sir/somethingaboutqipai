const fs = require('fs');
const path = require('path');
const protobuf = require('protobufjs');

const protoDir = 'd:/gameprojects/mi/puer_mahjong_export/proto';

// Copy to standard Game.proto and Common.proto
let gameProtoText = fs.readFileSync(path.join(protoDir, 'Mahjong_Game.proto'), 'utf8');
let commonProtoText = fs.readFileSync(path.join(protoDir, 'Common_15cda993.proto'), 'utf8');

// Adjust import path
gameProtoText = gameProtoText.replace('import "fxj/Common.proto";', 'import "Common.proto";');

fs.writeFileSync(path.join(protoDir, 'Game.proto'), gameProtoText);
fs.writeFileSync(path.join(protoDir, 'Common.proto'), commonProtoText);

console.log('Saved Game.proto and Common.proto');

const root = new protobuf.Root();
root.loadSync(path.join(protoDir, 'Common.proto'));
root.loadSync(path.join(protoDir, 'Game.proto'));

console.log('Protobuf compile successful!');
console.log('Game.DealCard fields:', Object.keys(root.lookupType('Game.DealCard').fields));
console.log('Game.Operation fields:', Object.keys(root.lookupType('Game.Operation').fields));
console.log('Game.GrabCard fields:', Object.keys(root.lookupType('Game.GrabCard').fields));
console.log('Common.PlayerInfo fields:', Object.keys(root.lookupType('Common.PlayerInfo').fields));
