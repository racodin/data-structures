"use strict";

const Queue = require('./Queue.js');

let myQueue = new Queue();
function generatePrintBinary(n) {
  let result = [];
  myQueue.enqueue("1");
  for (let i = 0; i < n; i++) {
    let s1 = myQueue.front(); 
    myQueue.dequeue(); 
    result.push(s1);
    let s2 = s1; 
    myQueue.enqueue(s1 + "0"); 
    myQueue.enqueue(s2 + "1"); 
  }
  return result;
}

console.log(generatePrintBinary(10));

// 0
// result = 1
// queue = 10, 11

// 1
// result = 1, 10
// queue = 11, 100, 101

// 2 
// result = 1, 10, 11
// queue = 100, 101, 110, 111

// 3
// result = 1, 10, 11, 100
// queue = 101, 110, 111, 1000, 1001

// 4
// result = 1, 10, 11, 100, 101
// queue = 110, 111, 1000, 1001, 1010, 1011

// 5
// result = 1, 10, 11, 100, 101, 110
// queue = 111, 1000, 1001, 1010, 1011, 1100, 1101

// 6
// result = 1, 10, 11, 100, 101, 110, 111
// queue = 1000, 1001, 1010, 1011, 1100, 1101, 1110, 1111

// 7
// result = 1, 10, 11, 100, 101, 110, 111, 1000
// queue = 1001, 1010, 1011, 1100, 1101, 1110, 1111, 10000, 10001

// 8
// result = 1, 10, 11, 100, 101, 110, 111, 1000, 1001
// queue = 1010, 1011, 1100, 1101, 1110, 1111, 10000, 10001, 10010, 10011

// 9
// result = 1, 10, 11, 100, 101, 110, 111, 1000, 1001, 1010
// queue = 1011, 1100, 1101, 1110, 1111, 10000, 10001, 10010, 10011, 10100, 10101
