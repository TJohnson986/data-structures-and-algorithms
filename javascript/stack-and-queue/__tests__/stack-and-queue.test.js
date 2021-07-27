// const stack = require('../stack-and-queue.js');
const { Stack } = require('../stack-and-queue.js');

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


  // test('empty stack after multiple pops', () => {

  // });


  // test('peek the next item', () => {

  // });
});
