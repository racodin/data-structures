"use strict";

const Node = require('./Node.js');

const LinkedList = (()=>{
  function LinkedList(){
    this.head = null;
    this.size = 0;
  }
  
  LinkedList.prototype.insert = function(value){
    var node = new Node(value); 
    var current; 
    if (this.head == null) 
      this.head = node; 
    else { 
      current = this.head; 
      while (current.next) { 
        current = current.next; 
      } 
      current.next = node; 
    } 
    this.size++; 
  }

  LinkedList.prototype.insertAt = function(value, index){
    if (index > 0 && index > this.size) 
      return false; 
    else { 
      var node = new Node(value); 
      var curr, prev; 
      curr = this.head; 

      if (index == 0) { 
        node.next = this.head; 
        this.head = node; 
      } else { 
        curr = this.head; 
        var it = 0; 
        while (it < index) { 
          it++; 
          prev = curr; 
          curr = curr.next; 
        } 
        node.next = curr; 
        prev.next = node; 
      } 
      this.size++; 
    } 
  }

  LinkedList.prototype.getHead = function(){
    return this.head;
  }

  LinkedList.prototype.setHead = function(value){
    return this.head = value;
  }

  LinkedList.prototype.printList = function(){
    var curr = this.head; 
    var str = ""; 
    while (curr) { 
      str += curr.value + " -> "; 
      curr = curr.next; 
    } 
    str += curr;
    // console.log(this.head);
    return console.log(str);
  }

  return LinkedList;
})();

module.exports = LinkedList;