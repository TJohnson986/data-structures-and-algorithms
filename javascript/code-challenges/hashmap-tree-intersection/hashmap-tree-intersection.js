const BinaryTree = require('../../trees/binaryTree.js');

const bt = new BinaryTree();

bt.root = new Node(11);
bt.root.left = new Node(4);
bt.root.right = new Node(22);
bt.root.left.left = new Node(3);
bt.root.left.right = new Node(10);
bt.root.right.left = new Node(15);
bt.root.right.right = new Node(19);