/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.arr = [];
    this.len = 0;
  }

  push(elem) {
    this.arr.unshift(elem);
    this.len++;
  }

  pop() {
    if (this.len !== 0) {
      this.len--;
      return this.arr.shift();
    }
    return undefined;
  }

  peek() {
    if (this.len !== 0) {
      return this.arr[0];
    }
    return undefined;
  }
}

module.exports = Stack;
