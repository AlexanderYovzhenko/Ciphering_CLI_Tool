const validationInput = require('../../src/validation/validation-input');

describe('Validation input argument', () => {
  const arrRepeatedArguments = [ [ '-c', 'C1-C1-R0-A', '-i', './inpt.txt', '-o', './output.txt' ], [ '--input', './inut.txt', '-c', 'C1-C1-R0-A', '-o', './output.txt' ], [ '-c', 'C1-C1-R0-A', '--output', './output.txt', '-i', './inpt.txt' ] ];

  test('should be to error', () => {
    expect(() => validationInput(arrRepeatedArguments[0])).toThrow();
    expect(() => validationInput(arrRepeatedArguments[1])).toThrow();
    expect(() => validationInput(arrRepeatedArguments[2])).toThrow();
  });
});