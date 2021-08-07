const { repeatedWord } = require('../hashmap-repeated-word.js');

describe('testing finding first repeated word using hashmaps', () => {

  test('returns first repeated word in a string', () => {
    let str = 'Once upon a time, there was a brave princess who...';

    let result = repeatedWord(str);

    expect(result).toEqual('a');
  });
});
