function solution(numbers, target) {
    var answer = 0;
    
    function dfs(index, sum) {
        if (index === numbers.length) {
            if (sum === target)
                answer++;
            
            return;
        }
        
        dfs(index + 1, sum + numbers[index]); 
        dfs(index + 1, sum - numbers[index]);
    }
    
    dfs(0, 0);
    
    return answer;
}