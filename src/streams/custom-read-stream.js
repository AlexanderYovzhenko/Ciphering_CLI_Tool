const fs = require('fs');
const { Readable } = require('stream');
const arrArguments = process.argv.slice(2);

let input = '';
arrArguments.indexOf('-i') + 1 ? input = arrArguments[arrArguments.indexOf('-i') + 1] : arrArguments.indexOf('--input') + 1 ? input = arrArguments[arrArguments.indexOf('--input') + 1] : input = './input.txt';


class ReadStream extends Readable {
  constructor(filename) {
    super();
    this.filename = filename;
    this.fd = null;
  }
  _construct(callback) {
    fs.open(this.filename, (err, fd) => {
      if (err) {
        callback(err);
      } else {
        this.fd = fd;
        callback();
      }
    });
  }
  _read(n) {
    const buf = Buffer.alloc(n);
    fs.read(this.fd, buf, 0, n, null, (err, bytesRead) => {
      if (err) {
        this.destroy(err);
      } else {
        this.push(bytesRead > 0 ? buf.slice(0, bytesRead) : null);
      };
    });
  }
  _destroy(err, callback) {
    if (this.fd) {
      fs.close(this.fd, (er) => callback(er || err));
    } else {
      callback(err);
    }
  }
}

const readStream = new ReadStream(input);


module.exports = {
  readStream,
};