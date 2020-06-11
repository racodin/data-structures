"use strict";

const Stack = (()=>{
  function Stack(){
    this.data = [];
  }

  Stack.prototype.push = function(value) {
    this.data.push(value);
  }
  
  Stack.prototype.pop = function() {
    return this.isEmpty() ? "There is not any data." : this.data.pop();
  }

  Stack.prototype.peek = function() {
    return this.data[this.data.length - 1];
  }

  Stack.prototype.isEmpty = function() {
    return this.data.length == 0;
  }

  Stack.prototype.print = function() {
    let str = ""; 
    for(let i = 0; i < this.data.length; i++) 
      str += this.data[i] +" "; 
    return str; 
  }

  return Stack;
})();

module.exports = Stack;