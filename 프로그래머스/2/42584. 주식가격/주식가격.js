function solution(prices) {
    var answer = new Array(prices.length).fill(0);
    const stack = []; 
    
    for (let i = 0; i < prices.length; i++) {
        while (stack.length !== 0 && prices[i] < prices[stack[stack.length - 1]]) {
            let index = stack.pop();
            answer[index] = i - index;
        }
        
        stack.push(i);
    }
    
    while (stack.length !== 0 ) {
        const j = stack.pop();
        answer[j] = answer.length - (j + 1);
    }
    
    return answer;
}