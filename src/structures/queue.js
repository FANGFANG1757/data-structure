export class Queue {
  elements = [];

  push(element) {
    this.elements.push(element);
  }

  shift() {
    return this.elements.shift();
  }
}
