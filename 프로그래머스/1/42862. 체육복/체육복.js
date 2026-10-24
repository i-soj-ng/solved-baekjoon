function solution(n, lost, reserve) {
    let realLost = lost
        .filter(e => !reserve.includes(e))
        .sort((a, b) => a - b);
    
    let realReserve = reserve
        .filter(e => !lost.includes(e))
        .sort((a, b) => a - b);
    
    var answer = n - realLost.length;
    
    for (let i = 0; i < realLost.length; i++) {
        const found = realReserve.find(
            e => e === realLost[i] - 1 || e === realLost[i] + 1
        );
        
        if (found !== undefined) {
            realReserve = realReserve.filter(e => e !== found);
            answer++;
        }
    }
    
    return answer;
}