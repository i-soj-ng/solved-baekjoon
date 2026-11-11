function solution(n) {
    let arr = [];
    
    while (n > 1) {
        arr.push(Math.floor(n % 10));
        n /= 10;
    }
    
    arr.sort((a, b) => b - a);
    
    return Number(arr.join(''));
}