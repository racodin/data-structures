"use strict";

const Stack = require('./Stack.js');

function isBalanced(exp){
  const myStack = new Stack();
  for(let i=0; i<exp.length; i++){
    if(
      exp[i] == '}' || 
      exp[i] == ')' || 
      exp[i] == ']'
    ){
      if(myStack.isEmpty()){
        return false
      }

      let output = myStack.pop();
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
  }
  if (!myStack.isEmpty()) {
    return false
  }
  return true
}

let inputString = "{[()]}"
console.log(inputString)              // {[()]}
console.log(isBalanced(inputString))  // true

inputString = "{[([({))]}}"
console.log(inputString)              // {[([({))]}}
console.log(isBalanced(inputString))  // false