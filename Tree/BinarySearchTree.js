"use strict";

const Node = require('./Node.js');

const BinarySearchTree = (() => {
  function BinarySearchTree() {
    this.root = null;
  }

  BinarySearchTree.prototype.insert = function (value) {
    let node = new Node(value);
    if (this.root === null)
      this.root = node;
    else
      this.insertNode(this.root, node);
  }

  BinarySearchTree.prototype.insertNode = function (node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null)
        node.left = newNode;
      else
        this.insertNode(node.left, newNode);
    } else {
      if (node.right === null)
        node.right = newNode;
      else
        this.insertNode(node.right, newNode);
    }
  }

  BinarySearchTree.prototype.remove = function (value) {
    this.root = this.removeNode(this.root, value);
  }

  BinarySearchTree.prototype.removeNode = function (node, key) {
    if (node === null)
      return null;
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      var aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  BinarySearchTree.prototype.inorder = function (node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  BinarySearchTree.prototype.preorder = function (node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  BinarySearchTree.prototype.postorder = function (node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  BinarySearchTree.prototype.findMinNode = function (node) {
    if (node.left === null)
      return node;
    else
      return this.findMinNode(node.left);
  }

  BinarySearchTree.prototype.getRootNode = function () {
    return this.root;
  }

  BinarySearchTree.prototype.search = function (node, value) {
    if (node === null)
      return null;
    else if (value < node.value)
      return this.search(node.left, value);
    else if (value > node.value)
      return this.search(node.right, value);
    else
      return node;
  }

  return BinarySearchTree;
})();

module.exports = BinarySearchTree;