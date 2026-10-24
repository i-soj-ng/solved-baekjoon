function solution(s) {
    let temp = s;
    
    let count = 0;
    let delete_zero = 0;
    
    while (temp !== "1") {
        const s_arr = temp.split("");
        
        const filter_arr = s_arr.filter(num => num === "1");
        delete_zero += s_arr.length - filter_arr.length;
        
        temp = filter_arr.length.toString(2);
        count++;
    }
    
    return [count, delete_zero];
}