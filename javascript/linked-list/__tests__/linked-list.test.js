'use strict';

const { LinkedList, Node}  = require('../index.js');

describe('Testing Linked List functionality', () => {
  const list = new LinkedList();

  test('create a new node', () => {
    const testNode = new Node(1);
    list.head = testNode;

    expect(list.head.value).toEqual(1);
  });
});
