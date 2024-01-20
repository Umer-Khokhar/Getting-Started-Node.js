const os = require('os');
console.log(os.homedir());
console.log(os.type());
console.log(os.version());

// to globally select your current directory name 
console.log(__dirname);
// to globally select your current file name
console.log(__filename);

const path = require('path');
// to get directory name using path import
console.log(path.dirname(__filename));
// to get file name using path import
console.log(path.basename(__filename));
// to get file extension using path import
console.log(path.extname(__filename));
// to get file path using path import
console.log(path.parse(__filename));



// Importing your maded module
// this is without destructing / direct way
const math = require('./math');
console.log(math.add(2,5));
console.log(math.sub(2,5));
console.log(math.mul(2,5));
console.log(math.div(2,5));

// this is with destructing / direct way
const {add, sub, mul, div} = require('./math');
console.log(add(4,5));
console.log(sub(4,5));
console.log(mul(4,5));
console.log(div(4,5));