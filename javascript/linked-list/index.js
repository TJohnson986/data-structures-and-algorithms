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
      current = current.next;
    }
  }

  add(value) {
    let current = this.head;
    let previous = null;
    while (current !== null) {
      previous = current;
      current = current.next;
    }

    let newNode = new Node(value);
    previous.next = newNode;
  }

  append(value, idx) {
    let current = this.head;
    let previous = null;
    let newNode = new Node(value);

    if (idx === 0) {
      current.next = this.head;
      this.head = newNode;
    } else {
      current = this.head;
      let loc = 0;

      while (loc < idx) {
        loc++;
        previous = current;
        current = current.next;
      }

      newNode.next = current;
      previous.next = newNode;
    }
  }

  insertBefore(value, newValue) {
    let current = this.head;
    let previous = null;
    let newNode = new Node(newValue);

    while (value !== current.value && current.next !== null) {
      previous = current;
      current = current.next;
    }

    previous.next = newNode;
    newNode.next = current;
  }

  insertAfter(value, newValue) {
    let current = this.head;
    let newNode = new Node(newValue);

    while (value !== current.value && current.next !== null) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }



  kthFromEnd(k) {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      count++;
      current = current.next;
    }
    let difference = count - k + 1;
    while (difference !== count) {
      let current = this.head;
      current = current.next;
    }
    let kValue = current.value;
    console.log('kValue', kValue);
  }
}

const list = new LinkedList();
const A = new Node(5);

list.head = A;


const B = new Node('Tyler');

list.head.next = B;


const C = new Node(false);

list.head.next.next = C;


list.add(10);

list.append(30, 1);

list.insertBefore(30, 15);

list.insertAfter(15, 16);

list.kthFromEnd(6);

console.log(JSON.stringify(list));

list.traverse();


module.exports = LinkedList;
