const decodeRot = require('../../src/ciphers/decode-rot');

describe('Cipher decode Rot', () => {
  test('check the decode Rot cipher to determine', () => {
    expect(decodeRot).toBeDefined();
  });

  test('the return should be a string', () => {
    let data = '';
    let outputDecodeRot = '';
    expect(decodeRot(data)).toBe(outputDecodeRot);
  });

  test('decode Rot is working correctly', () => {
    let data = 'AbcZyx';
    let outputDecodeRot = 'StuRqp';
    expect(decodeRot(data)).toBe(outputDecodeRot);
  });

  test('the return must save the register', () => {
    let data = 'AbC';
    let outputDecodeRot = 'StU';
    expect(decodeRot(data)).toBe(outputDecodeRot);
  });

  test('when returning, only the letters of the Latin alphabet change', () => {
    let data = 'Abc123Абв';
    let outputDecodeRot = 'Stu123Абв';
    expect(decodeRot(data)).toBe(outputDecodeRot);
  });
});