'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    return this.top.value;
  }
}

class PseudoQueue {
  constructor (val) {
    let pQueuePush = new Stack();
    pQueuePush.push(val);

  }
}

let pseudoQueuePush = new PseudoQueue();

pseudoQueuePush(5);
