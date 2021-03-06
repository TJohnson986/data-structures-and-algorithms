'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    // traverse to the tail and add to the end
    let current = this.head;
    let previous = null;
    while (current) {
      previous = current;
      current = current.next;
    }
    // if current is null, how do we add to the list?
    previous.next = new Node(value);
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let arrayOfCharacters = key.split(''); // i.e. ['T', 'y', 'l', 'e', 'r']
    let sumOfAsciiValues = arrayOfCharacters.reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);

    return (sumOfAsciiValues * 599) % this.size;
  }

  // Parameters: Key - so we store things, and a value
  add(key, value) {
    let hash = this.hash(key);

    // check if there is a linked list at the hashed index, add an empty linked list if not
    if(!this.buckets[hash]) this.buckets[hash] = new LinkedList();

    // add the key and the value to the linked list
    let entry = { [key]: value };
    this.buckets[hash].insert(entry);
    return entry;
  }

  //get a key, look up the value in the hash table and return

  find(key) {
    let hash = this.hash(key);
    return this.buckets[hash];
  }

  // returns a boolean whether the key exists or not
  contains(key) {
    let hash = this.hash(key);

    return this.buckets[hash] ? true : false;
  }

}

let table = new HashTable(1024);
table.add('Tyler', 'student');

console.log(table.contains('Tyler'));
console.log(table);

table.add('Jacob', 'instructor');

console.log(table.contains('jacob'));
console.log(table);

// use find() method to find a value in the buckets
console.log(table.find('Tyler')); //LinkedList { head: Node { value: { Tyler: 'student' }, next: null } }


module.exports = {
  HashTable,
  LinkedList,
  Node,
};

