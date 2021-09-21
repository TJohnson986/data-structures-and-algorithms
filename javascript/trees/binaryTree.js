'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  postOrder() {
    const walk = (node) => {
      if (node.left) walk(node.left);

      if (node.right) walk(node.right);

      console.log(node.value);
    };

    walk(this.root);
  }

  inOrder() {
    const walk = (node) => {
      if (node.left) walk(node.left);

      console.log(node.value);

      if (node.right) walk(node.right);
    };

    walk(this.root);
  }

  preOrder() {
    const walk = (node) => {
      console.log(node.value);

      if (node.left) walk(node.left);

      if (node.right) walk(node.right);
    };
    walk(this.root);
  }
}


const bt = new BinaryTree();

bt.root = new Node(11);
bt.root.left = new Node(4);
bt.root.right = new Node(22);
bt.root.left.left = new Node(3);
bt.root.left.right = new Node(10);
bt.root.right.left = new Node(15);
bt.root.right.right = new Node(19);

console.log(bt);
console.log('POST ORDER TRAVERSAL');
bt.postOrder();
console.log('PRE ORDER TRAVERSAL');
bt.preOrder();
console.log('IN ORDER TRAVERSAL');
bt.inOrder();
