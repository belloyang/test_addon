const testAddon = require('./build/Release/testaddon.node');
console.log('testAddon.hello:', testAddon.hello());
console.log('testAddon.add:', testAddon.add(1,2));
module.exports = testAddon;