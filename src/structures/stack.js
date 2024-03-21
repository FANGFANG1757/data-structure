export class Stack {
  elements = [];

  push(element) {
    this.elements.push(element);
  }

  pop() {
    return this.elements.pop();
  }
}
