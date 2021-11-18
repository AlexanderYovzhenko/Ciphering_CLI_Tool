const cipherAtbash = require('../../src/ciphers/cipher-atbash');

describe('Cipher Atbash', () => {
  test('check the Atbash cipher to determine', () => {
    expect(cipherAtbash).toBeDefined();
  });

  test('the return should be a string', () => {
    let data = '';
    let outputAtbash = '';
    expect(cipherAtbash(data)).toBe(outputAtbash);
  });

  test('Atbash is working correctly', () => {
    let data = 'Abc';
    let outputAtbash = 'Zyx';
    expect(cipherAtbash(data)).toBe(outputAtbash);
  });

  test('the return must save the register', () => {
    let data = 'AbC';
    let outputAtbash = 'ZyX';
    expect(cipherAtbash(data)).toBe(outputAtbash);
  });

  test('when returning, only the letters of the Latin alphabet change', () => {
    let data = 'Abc123Абв';
    let outputAtbash = 'Zyx123Абв';
    expect(cipherAtbash(data)).toBe(outputAtbash);
  });
});
