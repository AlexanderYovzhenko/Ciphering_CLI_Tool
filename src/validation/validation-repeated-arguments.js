const errors = require('../errors/errors');


const validationRepeatedArguments = (arrArguments) => {
  let count = 0;
  const newArrArguments = arrArguments.map(el => el === '--config' ? el = '-c' : el === '--input' ? el = '-i' : el === '--output' ? el = '-o' : el);
  newArrArguments.forEach(arg => {
    count = newArrArguments.reduce((acc,  el) => arg === el && (arg === '-i' || arg === '-o' || arg === '-c') ? ++acc : acc , 0);
    if(count > 1) {
      throw new errors.DuplicateArguments("Don't duplicate arguments!", 1);
    }; 
  });
}; 


module.exports = validationRepeatedArguments;