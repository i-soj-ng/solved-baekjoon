class PriorityQueue {
    constructor() {
        this.heap = [];
    }
    
    enqueue(value) {
        this.heap.push(value);
        
        let index = this.heap.length - 1;
        
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            
            if (this.heap[parent] <= this.heap[index])
                break;
            
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            
            index = parent;
        }
    }
    
    dequeue() {
        if (this.isEmpty()) return undefined;
        
        const min = this.heap[0];
        const last = this.heap.pop();
        
        if (!this.isEmpty()) {
            this.heap[0] = last;
            
            let index = 0;
            
            while (true) {
                let left = index * 2 + 1;
                let right = index * 2 + 2;
                let smallest = index;
                
                if (left < this.heap.length && this.heap[left] < this.heap[smallest])
                    smallest = left;
                
                if (right < this.heap.length && this.heap[right] < this.heap[smallest])
                    smallest = right;
                
                if (smallest === index) break;
                
                [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
                
                index = smallest;
            }
        }
        return min;
    }
    
    peek() {
        return this.heap[0];
    }
    
    size() {
        return this.heap.length;
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
}

function solution(scoville, K) {
    var answer = 0;
    let queue = new PriorityQueue();
    
    for (let s of scoville) {
        queue.enqueue(s);
    }
    
    while (queue.size() >= 2 && queue.peek() < K) {
        let first = queue.dequeue();
        let second = queue.dequeue();
        let mix = first + second * 2;
        answer++;
        queue.enqueue(mix);
    }
    
    if (queue.peek() < K)
        return -1;
    
    return answer;
}