class MyQueue{
    elements = [];
    
    push(element){ 
        this.elements.push(element);

    }
    
    shift(){
        return this.elements.shift();
    }
}

const QUEUE = new MyQueue();
QUEUE.push(1);
QUEUE.push(2);
QUEUE.push(3);
QUEUE.shift();


export default MyQueue;