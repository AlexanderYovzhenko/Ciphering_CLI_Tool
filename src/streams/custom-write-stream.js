const fs = require('fs');
const arrArguments = process.argv.slice(2);
const { Writable } = require('stream');

let output = '';
arrArguments.indexOf('-o') + 1 ? output = arrArguments[arrArguments.indexOf('-o') + 1] : arrArguments.indexOf('--output') + 1 ? output = arrArguments[arrArguments.indexOf('--output') + 1] : output = './output.txt';


class WriteStream extends Writable {
  constructor(filename) {
    super();
    this.filename = filename;
  }
  _construct(callback) {
    fs.open(this.filename, 'a', (err, fd) => {
      if (err) {
        callback(err);
      } else {
        this.fd = fd;
        callback();
      }
    });
  }
  _write(chunk, encoding, callback) {
    fs.write(this.fd, chunk, callback);
  }
  _destroy(err, callback) {
    if (this.fd) {
      fs.close(this.fd, (er) => callback(er || err));
    } else {
      callback(err);
    }
  }
}

const writeStream = new WriteStream(output);


module.exports = {
  writeStream
};