const errors = require('../errors/errors');


const validationConfig = (config) => {
  const arrCiphers = ['C1', 'C0', 'A', 'R1', 'R0'];
  if(config) {
    let count = 0;
    const ciphers = config.split('-');
    ciphers.forEach(el => {
      if(arrCiphers.includes(el)) count++;
    });
    if(ciphers.length !== count ) throw new errors.ConfigNotCorrect('Config is not correct!', 3);
    return (ciphers.length === count );
  } else {
    throw new errors.ConfigMissing ('Missing Config!', 2);
  }
};


module.exports = validationConfig;