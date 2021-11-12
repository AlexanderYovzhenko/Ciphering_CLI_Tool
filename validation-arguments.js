const fs = require('fs');
const arrArguments = process.argv.slice(2);
const errors = require('./errors');


const validationRepeatedArguments = (arrArguments) => {
  let count = 0;
  const newArrArguments = arrArguments.map(el => el === '--config' ? el = '-c' : el === '--input' ? el = '-i' : el === '--output' ? el = '-o' : el);
  newArrArguments.forEach(arg => {
    count = newArrArguments.reduce((acc,  el) => arg === el && (arg === '-i' || arg === '-o' || arg === '-c') ? ++acc : acc , 0);
    if(count > 1) {
      throw new errors.UserError("Don't duplicate arguments!", 1);
    }; 
  });
}; 

const validationConfig = (config) => {
  const arrCiphers = ['C1', 'C0', 'A', 'R1', 'R0'];
  if(config) {
    let count = 0;
    const ciphers = config.split('-');
    ciphers.forEach(el => {
      if(arrCiphers.includes(el)) count++;
    });
    if(ciphers.length !== count ) throw new errors.UserError('Config is not correct!', 3);
  } else {
    throw new errors.UserError ('Missing Config!', 2);
  }
};

let inputFlag = arrArguments.includes('-i') ? '-i' : '--input';
let outputFlag = arrArguments.includes('-o') ? '-o' : '--output';

const validationInput = () => {
  fs.accessSync(arrArguments[arrArguments.indexOf(inputFlag) + 1], fs.constants.F_OK | fs.constants.W_OK, (err) => err);
};
  
const validationOutput = () => {
  fs.accessSync(arrArguments[arrArguments.indexOf(outputFlag) + 1], fs.constants.F_OK | fs.constants.W_OK, (err) => err);
};


module.exports = {
  validationRepeatedArguments,
  validationConfig,
  validationInput,
  validationOutput
};