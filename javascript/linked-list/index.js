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

  traverse() {
    let current = this.head;

    while (current !== null) {
      // console.log(current.value);
      current = current.next;
    }
  }

  add(value) {
    let current = this.head;
    let previous = null;
    while (current != null) {
      previous = current;
      current = current.next;
    }

    let newNode = new Node (value);
    previous.next = newNode;
  }
}

const list = new LinkedList();
const A = new Node (5);

list.head = A;


const B = new Node ('Tyler');

list.head.next = B;


const C = new Node (false);

list.head.next.next = C;

console.log(JSON.stringify(list));

list.add(10);

list.traverse();


module.exports = {
  LinkedList,
  Node
};
