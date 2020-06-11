"use strict";

const Queue = (()=>{
  function Queue(){
    this.data = [];
  }
  
  Queue.prototype.enqueue = function(value){
    return this.data.push(value);
  }

  Queue.prototype.dequeue = function(){
    return this.data.shift();
  }

  return Queue;
})();

module.exports = Queue;