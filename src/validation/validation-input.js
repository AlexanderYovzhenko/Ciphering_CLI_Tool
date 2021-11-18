const fs = require('fs');
const arrArguments = process.argv.slice(2);

let inputFlag = arrArguments.includes('-i') ? '-i' : '--input';


const validationInput = () => {
  fs.accessSync(arrArguments[arrArguments.indexOf(inputFlag) + 1], fs.constants.F_OK | fs.constants.W_OK, (err) => err);
};


module.exports = validationInput;