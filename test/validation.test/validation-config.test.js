const validationConfig = require('../../src/validation/validation-config');

const forEach = (items, callback) => {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockValidationConfig = jest.fn(validationConfig);

describe('Validation config', () => {
  arrConfigCorrect = [ 'C1-C1-R0-A', 'C1-C0-A-R1-R0-A-R0-R0-C1-A', 'A-A-A-R1-R0-R0-R0-C1-C1-A', 'C1-R1-C0-C0-A-R0-R1-R1-A-C1', 'A-R0-C1' ];
  arrConfigNotCorrect = [ 'C1-C1-R0A', 'C1-C3-A-R1-R0-A-R0-R0-C1-A', 'A-A-A-R-R0-R0-R0-C1-C1-A', 'C1-R1-C0-C0-A1-R0-R1-R1-A-C1', 'A-R0-C1-T0' ];

  test('should value be to true', () => {
    forEach(arrConfigCorrect, mockValidationConfig);
    expect(mockValidationConfig.mock.results[0].value).toBe(true)
    expect(mockValidationConfig.mock.results[1].value).toBe(true)
    expect(mockValidationConfig.mock.results[2].value).toBe(true)
    expect(mockValidationConfig.mock.results[3].value).toBe(true)
    expect(mockValidationConfig.mock.results[4].value).toBe(true)
  });

  test('should message be to Config is not correct!', () => {
    expect(() => validationConfig(arrConfigNotCorrect[0])).toThrow('Config is not correct!');
    expect(() => validationConfig(arrConfigNotCorrect[1])).toThrow('Config is not correct!');
    expect(() => validationConfig(arrConfigNotCorrect[2])).toThrow('Config is not correct!');
    expect(() => validationConfig(arrConfigNotCorrect[3])).toThrow('Config is not correct!');
    expect(() => validationConfig(arrConfigNotCorrect[4])).toThrow('Config is not correct!');
  });

  test('should message be to Missing Config!', () => {
    expect(() => validationConfig('')).toThrow('Missing Config!');
  });
});