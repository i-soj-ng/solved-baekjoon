class PriorityQueue {
    constructor() {
        this.heap = [];
    }
    
    compare(a, b) {
        return a.duration - b.duration ||
           a.start - b.start ||
           a.id - b.id;
    }
    
    enqueue(value) {
        this.heap.push(value);
        let index = this.heap.length - 1;
        
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            
            if (this.compare(this.heap[parent], this.heap[index]) <= 0) 
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
                
                if (left < this.heap.length && this.compare(this.heap[left], this.heap[smallest]) < 0) {
                    smallest = left;
                }
                
                if (right < this.heap.length && this.compare(this.heap[right], this.heap[smallest]) < 0) {
                    smallest = right;
                }
                
                if (smallest === index) break;
                
                [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
                
                index = smallest;
            }
        }
        return min;
    }
    
    size() {
        return this.heap.length;
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
}

function solution(jobs) {
    const queue = new PriorityQueue();
    
    const tasks = jobs.map(([start, duration], id) => ({
        id,
        start,
        duration,
    }));
    
    tasks.sort((a, b) => a.start - b.start);
    
    let time = 0;
    let index = 0;
    let total = 0;
    let completed = 0;
    
    while (completed < tasks.length) {
        while (index < tasks.length && tasks[index].start <= time) {
            queue.enqueue(tasks[index]);
            index++;
        }
        
        if (queue.isEmpty()) {
            time = tasks[index].start;
            continue;
        }
        
        const current = queue.dequeue();
        
        time += current.duration;
        total += time - current.start;
        completed++;
    }
    
    return Math.floor(total / tasks.length);
}