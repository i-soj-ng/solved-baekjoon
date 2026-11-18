function solution(arr) {
    let min_index = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[min_index])
            min_index = i;
    }
    
    arr.splice(min_index, 1);
    
    if (arr.length === 0)
        return [-1];
    
    return arr;
}