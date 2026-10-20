function solution(n)
{
    var answer = 0;
    const arr = String(n).split('').map(Number);
    
    for (let i = 0; i < arr.length; i++) {
        answer += arr[i];
    }

    return answer;
}