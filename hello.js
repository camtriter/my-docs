const fs = require('fs');

fs.writeFileSync('greeting.txt', 'hello from Node.js!\n');

const content = fs.readFileSync('greeting.txt', 'utf8');
console.log(content);

console.log('当前node版本:', process.version);

