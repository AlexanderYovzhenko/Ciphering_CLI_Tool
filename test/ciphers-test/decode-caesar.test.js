const decodeСaesar = require('../../src/ciphers/decode-caesar');

describe('Cipher decode Caesar', () => {
  test('check the decode Caesar cipher to determine', () => {
    expect(decodeСaesar).toBeDefined();
  });

  test('the return should be a string', () => {
    let data = '';
    let outputDecodeCaesar = '';
    expect(decodeСaesar(data)).toBe(outputDecodeCaesar);
  });

  test('decode Caesar is working correctly', () => {
    let data = 'AbcZyxaz';
    let outputDecodeCaesar = 'ZabYxwzy';
    expect(decodeСaesar(data)).toBe(outputDecodeCaesar);
  });

  test('the return must save the register', () => {
    let data = 'AbC';
    let outputDecodeCaesar = 'ZaB';
    expect(decodeСaesar(data)).toBe(outputDecodeCaesar);
  });

  test('when returning, only the letters of the Latin alphabet change', () => {
    let data = 'Abc123Абв';
    let outputDecodeCaesar = 'Zab123Абв';
    expect(decodeСaesar(data)).toBe(outputDecodeCaesar);
  });
});