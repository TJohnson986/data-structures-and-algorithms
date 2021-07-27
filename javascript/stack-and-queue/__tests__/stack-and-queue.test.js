// const stack = require('../stack-and-queue.js');
const { Stack, Queue } = require('../stack-and-queue.js');

describe('testing stack functionality', () => {
  let stack = new Stack();

  test('push onto a stack', () => {
    stack.push(1);
    // console.log('tests', stack.top.value);

    expect(stack.top.value).toEqual(1);
  });


  test('push multiple values onto a stack', () => {
    stack.push(2);
    stack.push(3);
    // console.log(stack);
    // console.log('tests', stack.top.value, 'next', stack.top.next.value);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
  });

  test('pop off the stack', () => {
    stack.pop();
    // console.log('pop', stack);

    expect(stack.top.value).toEqual(2);
  });


});

describe('testing queue functionality', () => {
  let queue = new Queue();

  test('enqueue into a queue', () => {
    queue.enqueue(10);
    // console.log('queue', queue);

    expect(queue.front.value).toEqual(10);
  });

  test('enqueue multiple values into a queue', () => {

  });

  test('dequeue out of the queue', () => {

  });

  test('peek into a queue and see expected value', () => {

  });

  test('can empty a queue after multiple dequeues', () => {

  });

});
