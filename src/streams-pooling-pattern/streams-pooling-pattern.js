const streamsTransform = require('../streams/streams-transform');
const searchInput = require('../search-arguments/search-input');
const searchOutput = require('../search-arguments/search-output');


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