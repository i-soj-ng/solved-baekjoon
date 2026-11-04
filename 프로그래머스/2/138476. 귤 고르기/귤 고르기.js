function solution(k, tangerine) {
    const map = new Map();
    
    for (const size of tangerine) {
        map.set(size, (map.get(size) || 0) + 1);
    }
    
    const counts = [...map.values()].sort((a, b) => b - a);
    
    let answer = 0;
    for (const count of counts) {
        k -= count;
        answer++;
        
        if (k <= 0)
            break;
    }
    
    return answer;
}