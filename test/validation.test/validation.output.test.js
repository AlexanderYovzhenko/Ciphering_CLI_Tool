const validationOutput = require('../../src/validation/validation-output');

describe('Validation output argument', () => {
  const arrRepeatedArguments = [ [ '-c', 'C1-C1-R0-A', '-i', './input.txt', '-o', './outpt.txt' ], [ '-c', 'C1-C1-R0-A', '-i', './input.txt', '-o', './outut.txt' ], [ '-c', 'C1-C1-R0-A', '--output', './outpu.txt', '-i', './input.txt' ] ];

  test('should be to error', () => {
    expect(() => validationOutput(arrRepeatedArguments[0])).toThrow();
    expect(() => validationOutput(arrRepeatedArguments[1])).toThrow();
    expect(() => validationOutput(arrRepeatedArguments[2])).toThrow();
  });
});