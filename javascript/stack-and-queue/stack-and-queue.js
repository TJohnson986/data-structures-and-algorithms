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


class Queue {
  constructor() {
    this.front = null;
    this.next = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if(!this.rear) {
      this.rear = newNode;
      this.front = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    let temp = this.front;
    this.front = temp.next;
    temp.next = null;

    return temp.value;
  }

}



// Stack //
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


// Queue //

let queue = new Queue();

queue.enqueue(4);
queue.enqueue(3);
queue.enqueue(10);

console.log(queue);

let four = queue.dequeue();
console.log(four);
console.log(queue);

module.exports = {
  Node,
  Stack,
  Queue,
};

