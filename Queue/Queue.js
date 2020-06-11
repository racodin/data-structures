"use strict";

const Queue = (()=>{
  function Queue(){
    this.data = [];
  }
  
  Queue.prototype.enqueue = function(value){
    return this.data.push(value);
  }

  Queue.prototype.dequeue = function(){
    return this.isEmpty() ? "There is not any data." : this.data.shift();
  }

  Queue.prototype.front = function(){
    return this.isEmpty() ? "There is not any data." : this.data[0];
  }

  Queue.prototype.isEmpty = function(){
    return this.data.length == 0;
  }

  Queue.prototype.print = function(){
    let str = ""; 
    for(let i = 0; i < this.data.length; i++) 
      str += this.data[i] +" "; 
    return str; 
  }

  return Queue;
})();

module.exports = Queue;