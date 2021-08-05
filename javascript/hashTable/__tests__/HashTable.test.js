const { Node, LinkedList, HashTable } = require('../HashTable.js');

describe('testing hash table functionality', () => {
  let table = new HashTable(1024);

  test('adding a value to hash table', () => {
    table.add('test', 'test');
    // console.log('test', table);

    expect(table.contains('test')).toBe(true);
    expect(table.contains('test2')).toBe(false);
  });

  test('retrieval of value based on key', (hash) => {
    table.find('test');
    // console.log('retrieval', table.find.toString('test'));
    console.log('retrieval2', this.buckets[hash]);

    expect(table.head.value).toEqual({test: 'test'});
  });

});
