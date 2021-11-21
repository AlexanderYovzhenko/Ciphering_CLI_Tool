const fs = require('fs');


const validationInput = (arrArguments) => {
  let inputFlag = arrArguments.includes('-i') ? '-i' : '--input';
  fs.accessSync(arrArguments[arrArguments.indexOf(inputFlag) + 1], fs.constants.F_OK | fs.constants.W_OK, (err) => err);
};


module.exports = validationInput;