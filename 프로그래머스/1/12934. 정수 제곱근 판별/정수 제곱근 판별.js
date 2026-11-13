function solution(n) {
    let x = Math.sqrt(n);
    
    if (Number.isInteger(x))
        return (x + 1) * (x + 1);
    
    else return -1;
}