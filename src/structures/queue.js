class myQueue{
    constructor(){
        this.elements = [];
    }
    push(element){ 
        this.elements.push(element);

    }
    
    shift(){
        return this.elements.shift();
    }
}

const queue = new myQueue();
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue);
queue.shift();
console.log(queue);
