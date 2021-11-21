const { Transform } = require('stream');
const ciphers = require('./ciphers');

const {
  encryptСaesar,
  decodeСaesar,
  cipherAtbash,
  encryptRot,
  decodeRot
} = ciphers;


const creatCaesarStream = (shift) => {
  return new Transform({
    transform(chunk, enc, cb) {
      let cipher;
      shift ?  cipher = encryptСaesar(chunk.toString()) : cipher = decodeСaesar(chunk.toString());
      cb(null, cipher);
    }
  });
};

const creatAtbashStream = () => {
  return new Transform({
    transform(chunk, enc, cb) {
      const cipher = cipherAtbash(chunk.toString());
      cb(null, cipher);
    }
  });
};

const creatRotStream = (shift) => {
  return new Transform({
    transform(chunk, enc, cb) {
      let cipher;
      shift ? cipher = encryptRot(chunk.toString()) : cipher = decodeRot(chunk.toString());
      cb(null, cipher);
    }
  });
};


module.exports = {
  creatCaesarStream,
  creatAtbashStream,
  creatRotStream
};