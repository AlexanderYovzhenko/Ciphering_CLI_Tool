const encryptСaesar = require('../../src/ciphers/encrypt-caesar');

describe('Cipher encrypt Caesar', () => {
  test('check the encrypt Caesar cipher to determine', () => {
    expect(encryptСaesar).toBeDefined();
  });

  test('the return should be a string', () => {
    let data = '';
    let outputEncryptCaesar = '';
    expect(encryptСaesar(data)).toBe(outputEncryptCaesar);
  });

  test('encrypt Caesar is working correctly', () => {
    let data = 'AbcZyxaz';
    let outputEncryptCaesar = 'BcdAzyba';
    expect(encryptСaesar(data)).toBe(outputEncryptCaesar);
  });

  test('the return must save the register', () => {
    let data = 'AbC';
    let outputEncryptCaesar = 'BcD';
    expect(encryptСaesar(data)).toBe(outputEncryptCaesar);
  });

  test('when returning, only the letters of the Latin alphabet change', () => {
    let data = 'Abc123Абв';
    let outputEncryptCaesar = 'Bcd123Абв';
    expect(encryptСaesar(data)).toBe(outputEncryptCaesar);
  });
});