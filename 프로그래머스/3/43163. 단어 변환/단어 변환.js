function solution(begin, target, words) {
    const visited = new Set();
    
    const queue = [[begin, 0]];
    let head = 0;
    
    visited.add(begin);
    
    while (head < queue.length) {
        const [word, count] = queue[head++];
        
        if (word === target)
            return count;
        
        for (const next of words) {
            if (visited.has(next))
                continue;
            
            let diff = 0;
            for (let i = 0; i < word.length; i++) {
                if (word[i] !== next[i])
                    diff++;
            }
            
            if (diff === 1) {
                visited.add(next);
                queue.push([next, count + 1]);
            }
        }
    }
    return 0;
}