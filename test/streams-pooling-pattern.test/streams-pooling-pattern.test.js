const streamsPoolingPattern = require('../../src/streams-pooling-pattern/streams-pooling-pattern');


const forEach = (items, callback) => {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockStreamsPoolingPattern = jest.fn(streamsPoolingPattern);

describe('Streams pooling pattern', () => {
  const arrArguments = ['C1-C1-R0-A',
                        'C1-C0-A-R1-R0-A-R0-R0-C1-A',
                        'A-A-A-R1-R0-R0-R0-C1-C1-A',
                        'C1-R1-C0-C0-A-R0-R1-R1-A-C1'];


  forEach(arrArguments, mockStreamsPoolingPattern);
 
  test('should value is not false', () => {
    expect(mockStreamsPoolingPattern.mock.results[0].value).not.toEqual(false);
    expect(mockStreamsPoolingPattern.mock.results[1].value).not.toEqual(false);
    expect(mockStreamsPoolingPattern.mock.results[2].value).not.toEqual(false);
    expect(mockStreamsPoolingPattern.mock.results[3].value).not.toEqual(false);
  }); 
});