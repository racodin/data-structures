"use strict";

const BinarySearchTree = require('./BinarySearchTree.js');

function findMin(rootNode) {
  if(rootNode == null)
    return null;
  else if(rootNode.left == null)
    return rootNode.value;
  else
    return findMin(rootNode.left)
}  

var BST = new BinarySearchTree();
BST.insert(6);
BST.insert(20);
BST.insert(14);
BST.insert(2);
BST.insert(8);
console.log(findMin(BST.root));