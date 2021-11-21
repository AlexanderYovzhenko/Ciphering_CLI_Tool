const validationRepeatedArguments = require('../../src/validation/validation-repeated-arguments');

describe('Validation repeated arguments', () => {
  const arrRepeatedArguments = [ [ '-c', 'C1-C1-R0-A', '-i', './input.txt', '-o', './output.txt', '--config', 'C1-A' ], [ '--input', './input.txt', '-c', 'C1-C1-R0-A', '-i', './input.txt', '-o', './output.txt' ], [ '-c', 'C1-C1-R0-A', '--output', './output.txt', '-i', './input.txt', '-o', './output.txt' ] ];

  test("should message be to Don't duplicate arguments!", () => {
    expect(() => validationRepeatedArguments(arrRepeatedArguments[0])).toThrow("Don't duplicate arguments!");
    expect(() => validationRepeatedArguments(arrRepeatedArguments[1])).toThrow("Don't duplicate arguments!");
    expect(() => validationRepeatedArguments(arrRepeatedArguments[2])).toThrow("Don't duplicate arguments!");
  });
});