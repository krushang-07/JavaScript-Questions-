//stack

class Stack {
  constructor() {
    this.stack = []; //init with empty array while calling
  }

  //push operation
  push(element) {
    this.stack.push(element);
  }

  //pop operation
  pop() {
    if (this.isEmpty()) {
      return "empty stack";
    }
    return this.stack.pop();
  }

  //peek operation
  peek() {
    if (this.isEmpty()) {
      return "empty stack";
    }
    return this.stack[this.size() - 1];
  }

  //isEmpty operation
  isEmpty() {
    return this.size() === 0;
  }

  //size operation
  size() {
    return this.stack.length;
  }

  printStack() {
    //   this.stack.map((e) => {
    //   return console.log(e);
    // });                  //print the stack element
    return [...this.stack]; //print in array
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.printStack());
