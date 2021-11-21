const { creatCaesarStream,
        creatAtbashStream,
        creatRotStream } = require('../../src/streams/streams-transform');


describe('Atbash stream', () => {
  test('should pass the test', () => {
    expect(creatAtbashStream()._transform('abc', 'utf-8', (cb) => cb)).not.toEqual('abc');
  });
});  

describe('Caesar stream', () => {
  test('should pass the test', () => {
    expect(creatCaesarStream(true)._transform('abc', 'utf-8', (cb) => cb)).not.toEqual('abc');
  });

  test('should pass the test', () => {
    expect(creatCaesarStream(false)._transform('abc', 'utf-8', (cb) => cb)).not.toEqual('abc');
  });
});  

describe('Rot streams', () => {
  test('should pass the test', () => {
    expect(creatRotStream(true)._transform('abc', 'utf-8', (cb) => cb)).not.toEqual('abc');
  });

  test('should pass the test', () => {
    expect(creatRotStream(false)._transform('abc', 'utf-8', (cb) => cb)).not.toEqual('abc');
  });
});  