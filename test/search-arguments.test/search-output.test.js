const searchOutput = require('../../src/search-arguments/search-output');
const customStreams = require('../../src/streams/custom-write-stream');

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockSearchOutput = jest.fn(searchOutput);

describe('Search output', () => {
  let arrArgumentsOne = [['-c','C1-R0', '-i', '-o'], ['--config', '--input', '--output'], ['-i','./input.txt', '--config', 'C1-A', '--output', './output.txt']];
  let arrArgumentsTwo = [['-c', '-i'], ['--config', '--input'], ['-c', './input.txt', '--input', './output.txt']];

  forEach(arrArgumentsOne, mockSearchOutput);
  forEach(arrArgumentsTwo, mockSearchOutput);

  test('should value is custom write stream', () => {
    expect(mockSearchOutput.mock.results[0].value).toEqual(customStreams.writeStream);
  });  

  test('should value is process stdout', () => {
    expect(mockSearchOutput.mock.results[5].value).toEqual(process.stdout);
  });
});