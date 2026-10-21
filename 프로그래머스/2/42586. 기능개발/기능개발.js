class Queue {
    constructor() {
        this.storage = {};
        this.front = 0;
        this.rear = 0;
    }
    
    enqueue(value) {
        this.storage[this.rear++] = value;
    }
    
    dequeue() {
        if (this.isEmpty()) return undefined;
        
        let value = this.storage[this.front];
        delete this.storage[this.front++];
        
        return value;
    }
    
    peek() {
        if (this.isEmpty()) return undefined;
        
        return this.storage[this.front];
    }
    
    last() {
        if (this.isEmpty()) return undefined;
        
        return this.storage[this.rear - 1];
    }
    
    size() {
        return this.rear - this.front;
    }
    
    isEmpty() {
        return this.front === this.rear;
    }
}

function solution(progresses, speeds) {
    var answer = [];
    let queue = new Queue();
    
    for (let i = 0; i < progresses.length; i++) {
        let count = Math.ceil((100 - progresses[i]) / speeds[i]);
        
        queue.enqueue(count);
    }
    
    while (!queue.isEmpty()) {
        let current = queue.dequeue();
        let count = 1;
        
        while (!queue.isEmpty() && current >= queue.peek()) {
            queue.dequeue();
            count++;
        }
        
        answer.push(count);
    }
    
    return answer;
}