"use strict";

const LinkedList = require('./LinkedList.js');

function reverse(list) {
  let previousNode = null;
  let currentNode = list.getHead(); // The current node
  let nextNode = null; // The next node in the list

  //Reversal
  while (currentNode != null) {
    nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }

  //Set the last element as the new head node
  list.setHead(previousNode);

}

let list = new LinkedList();
list.insertAt(4, 0);
list.insertAt(9, 0);
list.insertAt(6, 0);
list.insertAt(1, 0);
list.insertAt(0, 0);
list.printList();

reverse(list);
list.printList();