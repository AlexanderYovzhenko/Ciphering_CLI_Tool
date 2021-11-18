const fs = require('fs');
const arrArguments = process.argv.slice(2);

let outputFlag = arrArguments.includes('-o') ? '-o' : '--output';

  
const validationOutput = () => {
  fs.accessSync(arrArguments[arrArguments.indexOf(outputFlag) + 1], fs.constants.F_OK | fs.constants.W_OK, (err) => err);
};


module.exports = validationOutput;