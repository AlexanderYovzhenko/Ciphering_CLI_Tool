const encryptRot = require('../../src/ciphers/encrypt-rot');

describe('Cipher encrypt Rot', () => {
  test('check the encrypt Rot cipher to determine', () => {
    expect(encryptRot).toBeDefined();
  });

  test('the return should be a string', () => {
    let data = '';
    let outputEncryptRot = '';
    expect(encryptRot(data)).toBe(outputEncryptRot);
  });

  test('encrypt Rot is working correctly', () => {
    let data = 'AbcZyx';
    let outputEncryptRot = 'IjkHgf';
    expect(encryptRot(data)).toBe(outputEncryptRot);
  });

  test('the return must save the register', () => {
    let data = 'AbC';
    let outputEncryptRot = 'IjK';
    expect(encryptRot(data)).toBe(outputEncryptRot);
  });

  test('when returning, only the letters of the Latin alphabet change', () => {
    let data = 'Abc123Абв';
    let outputEncryptRot = 'Ijk123Абв';
    expect(encryptRot(data)).toBe(outputEncryptRot);
  });
});