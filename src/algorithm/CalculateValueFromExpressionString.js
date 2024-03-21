// (1+(( 2 + 3 ) * ( 4 * 5 ) ) ) will return 101
class Stack {
  constructor() {
    this.elements = [];
  }

  push(element) {
    this.elements.push(element);
  }

  pop() {
    const result = this.elements.pop();
    return result;
  }
}

function CalExp(str) {
  const ops = new Stack();
  const vals = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === " ") {
    } else if (str[i] === "+") {
      ops.push(str[i]);
    } else if (str[i] === "-") {
      ops.push(str[i]);
    } else if (str[i] === "*") {
      ops.push(str[i]);
    } else if (str[i] === "/") {
      ops.push(str[i]);
    } else if (str[i] === ")") {
      const op = ops.pop();
      const val1 = vals.pop();
      const val2 = vals.pop();
      if (op === "+") {
        vals.push(val1 + val2);
      } else if (op === "-") {
        vals.push(val2 - val1);
      } else if (op === "*") {
        vals.push(val1 * val2);
      } else if (op === "/") {
        vals.push(val2 / val1);
      }
    } else {
      vals.push(Number(str[i]));
    }
    console.log(`char -> ${str[i]}`);
    console.log("val stack -> ", vals.elements);
    console.log("op stack -> ", ops.elements);
    console.log("===========================");
  }
  return vals.pop();
}

const expression1 = "(1 + ((2 + 33) * (4 * 5)))";
console.log(CalExp(expression1));
