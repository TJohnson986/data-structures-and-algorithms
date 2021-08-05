// const str = 'Once upon a time, there was a brave princess who...';

const str = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';

function repeatedWord (str) {
  const arr = str.toLowerCase().split(' ');
  const hash = new Map();
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (hash.get(arr[i]) === undefined) {
      hash.set(arr[i], true);
    } else {
      const value = hash.get(arr[i]);
      if (value) {
        hash.set(arr[i], !value);
      }
    }
  }

  hash.forEach((t, j) => {
    if (!t)
      result.push(j);
  });
  return result[0];
}


console.log(repeatedWord(str));

module.exports = {
  repeatedWord
};
