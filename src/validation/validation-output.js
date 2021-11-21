const fs = require('fs');

  
const validationOutput = (arrArguments) => {
  let outputFlag = arrArguments.includes('-o') ? '-o' : '--output';
  fs.accessSync(arrArguments[arrArguments.indexOf(outputFlag) + 1], fs.constants.F_OK | fs.constants.W_OK, (err) => err);
};


module.exports = validationOutput;