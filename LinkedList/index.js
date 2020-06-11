"use strict";

const LinkedList = require('./LinkedList.js');

function reverse(list) {
  let prev = null;
  let current = list.head; 
  let next = null;

  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  list.head = prev;

}

let list = new LinkedList();
list.add(4);
list.add(9);
list.add(6);
list.add(1);
list.add(0);
list.print();

reverse(list);
list.print();