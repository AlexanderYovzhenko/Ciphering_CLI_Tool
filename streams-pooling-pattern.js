const streamsTransform = require('./streams-transform');
const customStreams = require('./custom-streams');
const arrArguments = process.argv.slice(2);
const { stdin, stdout } = require('process');


const searchInput = () => {
  return arrArguments.indexOf('-i') + 1 || arrArguments.indexOf('--input') + 1 ? customStreams.readStream : stdin;
};

const searchOutput = () => {
  return arrArguments.indexOf('-o') + 1 || arrArguments.indexOf('--output') + 1 ? customStreams.writeStream : stdout;
};

const {
  creatCaesarStream: C1 ,
  creatCaesarStream: C0,
  creatAtbashStream: A,
  creatRotStream: R1,
  creatRotStream: R0
} = streamsTransform;

const objectCiphers = {C1, C0, A, R1, R0};


const streamsPoolingPattern = (config) => {
  const newConfig = config.split('-').map(el => el === 'C0' || el === 'R0' ? objectCiphers[el](false) : objectCiphers[el](true));
        newConfig.unshift(searchInput());
        newConfig.push(searchOutput());
  return newConfig;
};


module.exports = streamsPoolingPattern;