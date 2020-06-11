"use strict";

const Node = (()=>{
  function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  return Node;
})();

module.exports = Node;