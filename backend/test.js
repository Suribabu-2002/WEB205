const fs = require('fs');
fs.writeFileSync('test.txt', 'Hello World');
const content = fs.readFileSync('test.txt', 'utf-8');
console.log(content);
// fs.unlinkSync("test.txt")