const { Node, BinaryTree } = require('../../trees/binaryTree.js');

const bt1 = new BinaryTree();
const bt2 = new BinaryTree();

bt1.root = new Node(150);
bt1.root.left = new Node(100);
bt1.root.right = new Node(250);
bt1.root.left.left = new Node(75);
bt1.root.left.right = new Node(160);
bt1.root.right.left = new Node(200);
bt1.root.right.right = new Node(350);

bt2.root = new Node(42);
bt2.root.left = new Node(100);
bt2.root.right = new Node(600);
bt2.root.left.left = new Node(15);
bt2.root.left.right = new Node(160);
bt2.root.right.left = new Node(200);
bt2.root.right.right = new Node(350);



console.log('😒', bt1.root);
