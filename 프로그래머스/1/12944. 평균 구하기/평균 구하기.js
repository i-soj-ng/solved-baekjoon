function solution(arr) {
    let sum = 0;
    for (const a of arr)
        sum += a;
    
    return sum / arr.length;
}