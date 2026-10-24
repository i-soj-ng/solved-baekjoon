function solution(n) {
    var answer = 0;

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            sum += i;
            if (sum === n) {
                answer++;
                sum = 0;
                break;
            }
        }
    }
    
    return answer;
}