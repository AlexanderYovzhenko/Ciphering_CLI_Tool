const pipeStreams = require('../../src/pipeline/pipeline');

describe('Check pipeline streams', () => {
  const argStreams = [process.stdin, process.stdout];
  const mockPipeStreams = jest.fn(pipeStreams);
  
    test('should be to error', () => {
      expect(() => mockPipeStreams(argStreams)).toThrow();
      expect(() => pipeStreams()).toThrow(Error);
  });
});