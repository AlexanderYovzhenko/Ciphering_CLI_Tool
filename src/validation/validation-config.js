const errors = require('../errors/errors');


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


module.exports = validationConfig;