"use strict";

const Stack = require('./Stack.js');

function isBalanced(exp){
  const myStack = new Stack();
  for(var i=0; i<exp.length; i++){
    if(
      exp[i] == '}' || 
      exp[i] == ')' || 
      exp[i] == ']'
    ){
      if(myStack.isEmpty()){
        return false
      }

      let output = myStack.pop();
      // console.log("exp[i]:", exp[i]);
      // console.log("output:", output);
      if (
        ((exp[i] == "}") && (output != "{")) || 
        ((exp[i] == ")") && (output != "(")) || 
        ((exp[i] == "]") && (output != "["))
      ) {
        return false;
      }
    } else {
      myStack.push(exp[i]);
    }
    // console.log(myStack.data);
  }
  if (!myStack.isEmpty()) {
    return false
  }
  return true
}

var inputString = "{[()]}"
console.log(inputString)              // {[()]}
console.log(isBalanced(inputString))  // true

inputString = "{[([({))]}}"
console.log(inputString)              // {[([({))]}}
console.log(isBalanced(inputString))  // false