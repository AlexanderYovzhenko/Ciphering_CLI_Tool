const fs = require('fs');
const arrArguments = process.argv.slice(2);
const { Readable } = require('stream');
const { Writable } = require('stream');
let input = '';
let output = '';

arrArguments.indexOf('-i') + 1 ? input = arrArguments[arrArguments.indexOf('-i') + 1] : arrArguments.indexOf('--input') + 1 ? input = arrArguments[arrArguments.indexOf('--input') + 1] : input = './input.txt';
arrArguments.indexOf('-o') + 1 ? output = arrArguments[arrArguments.indexOf('-o') + 1] : arrArguments.indexOf('--output') + 1 ? output = arrArguments[arrArguments.indexOf('--output') + 1] : output = './output.txt';


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

const readStream = new ReadStream(input);
const writeStream = new WriteStream(output);


module.exports = {
  readStream,
  writeStream
};