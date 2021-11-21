const searchInput = require('../../src/search-arguments/search-input');
const customStreams = require('../../src/streams/custom-read-stream');

const forEach = (items, callback) => {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockSearchInput = jest.fn(searchInput);

describe('Search input', () => {
  let arrArgumentsOne = [['-c','C1-R0', '-i', '-o'], ['--config', '--input', '--output'], ['-i','./input.txt', '--config', 'C1-A', '--output', './output.txt']];
  let arrArgumentsTwo = [['-c', '-o'], ['--config', '--output'], ['-c', './input.txt', '--output', './output.txt']];

  forEach(arrArgumentsOne, mockSearchInput);
  forEach(arrArgumentsTwo, mockSearchInput);

  test('should value is custom read stream', () => {
    expect(mockSearchInput.mock.results[0].value).toEqual(customStreams.readStream);
  });  

  test('should value is process stdin', () => {
    expect(mockSearchInput.mock.results[5].value).toEqual(process.stdin);
  });
});