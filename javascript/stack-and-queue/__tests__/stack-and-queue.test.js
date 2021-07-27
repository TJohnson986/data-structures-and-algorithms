// const stack = require('../stack-and-queue.js');
const { Stack } = require('../stack-and-queue.js');

describe('testing stack functionality', () => {
  let stack = new Stack();

  test('push onto a stack', () => {
    stack.push(1);
    console.log('tests', stack.top.value);

    expect(stack.top.value).toEqual(1);
  });


  // test('push multiple values onto a stack', () => {

  // });

  // test('pop off the stack', () => {

  // });


  // test('empty stack after multiple pops', () => {

  // });


  // test('peek the next item', () => {

  // });
});
