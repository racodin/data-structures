"use strict";

const Stack = (()=>{
  function Stack(){
    this.data = [];
  }

  Stack.prototype.isEmpty = function(){
    return !this.data.length > 0;
  }

  Stack.prototype.pop = function(){
    return this.data.pop();
  }

  Stack.prototype.push = function(value){
    return this.data.push(value);
  }

  return Stack;
})();

module.exports = Stack;