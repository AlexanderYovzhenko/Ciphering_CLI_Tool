const searchConfig = require('../../src/search-arguments/search-config');

const forEach = (items, callback) => {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockSearchConfig = jest.fn(searchConfig);

describe('Search config', () => {
  let arrArgumentsOne = [['-c','C1-R0', '-i', '-o'], ['--config', '--input', '--output'], ['-i','./input.txt', '--config', 'C1-A', '--output', './output.txt']];
  let arrArgumentsTwo = [['-i', '-o'], ['--input', '--output'], ['-i', './input.txt', '--output', './output.txt']];

  forEach(arrArgumentsOne, mockSearchConfig);
  forEach(arrArgumentsTwo, mockSearchConfig);

  test('should value is not false', () => {
    expect(mockSearchConfig.mock.results[0].value).not.toBe(false);
  });

  test('should be equal to', () => {
    expect(mockSearchConfig.mock.results[0].value).toBe('C1-R0');
    expect(mockSearchConfig.mock.results[2].value).toBe('C1-A');
  });  

  test('should value is false', () => {
    expect(mockSearchConfig.mock.results[5].value).toBe(false);
  });
});