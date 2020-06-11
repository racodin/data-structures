"use strict";

const Node = (()=>{
  function Node(value){
    this.value = value;
    this.next = null;
  }
  
  return Node;
})();

module.exports = Node;