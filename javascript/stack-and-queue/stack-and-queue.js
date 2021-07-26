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
    return this.top;
  }

  isEmpty() {
    return this.top === 0;
  }
}


let stack = new Stack();

stack.push(5);
stack.push(3);
stack.push(6);

console.log(stack);

let six = stack.pop();
console.log(six);
console.log(stack);

let peek = stack.peek();
console.log('this is peek', peek);

let isEmpty = stack.isEmpty();
console.log(isEmpty);
