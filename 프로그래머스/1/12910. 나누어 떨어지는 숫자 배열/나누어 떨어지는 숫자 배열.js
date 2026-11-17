function solution(arr, divisor) {
    var answer = [];
    
    for (const a of arr) {
        if (a % divisor === 0)
            answer.push(a);
    }
    
    if (answer.length === 0)
        answer.push(-1);
    
    else answer.sort((a, b) => a - b);
    
    return answer;
}