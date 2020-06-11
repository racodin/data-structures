"use strict";

const Node = require('./Node.js');

const LinkedList = (()=>{
  function LinkedList(){
    this.head = null;
    this.size = 0;
  }
  
  LinkedList.prototype.add = function(value){
    let node = new Node(value); 
    let current; 
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
      let node = new Node(value); 
      let curr, prev; 
      curr = this.head; 

      if (index == 0) { 
        node.next = this.head; 
        this.head = node; 
      } else { 
        curr = this.head; 
        let it = 0; 
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

  LinkedList.prototype.removedFrom = function(index){
    if (index > 0 && index > this.size) 
      return -1;
    else {
      let curr, prev, it = 0; 
      curr = this.head; 
      prev = curr; 

      if (index === 0) { 
        this.head = curr.next; 
      } else { 
        while (it < index) { 
          it++; 
          prev = curr; 
          curr = curr.next; 
        } 
        prev.next = curr.next; 
      } 
      this.size--; 
      
      return curr.value; 
    }
  }

  LinkedList.prototype.removeElement = function(value){
    let current = this.head; 
    let prev = null; 
  
    while (current != null) { 
      if (current.value === value) { 
        if (prev == null) { 
          this.head = current.next; 
        } else { 
          prev.next = current.next; 
        } 
        this.size--; 
        return current.value; 
      } 
      prev = current; 
      current = current.next; 
    } 
    return -1; 
  }

  LinkedList.prototype.indexOf = function(value){
    let count = 0; 
    let current = this.head; 
  
    while (current != null) { 
      if (current.value === value) 
        return count; 
      count++; 
      current = current.next; 
    } 
  
    return -1; 
  }

  LinkedList.prototype.isEmpty = function(){
    return this.size == 0;
  }

  LinkedList.prototype.print = function(){
    let curr = this.head; 
    let str = ""; 
    while (curr) { 
      str += curr.value + " -> "; 
      curr = curr.next; 
    } 
    str += curr;
    console.log(str);
  }

  return LinkedList;
})();

module.exports = LinkedList;