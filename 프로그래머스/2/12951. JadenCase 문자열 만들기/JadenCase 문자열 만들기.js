function solution(s) {
    const s_arr = s.split("");
    
    for (let i = 0; i < s_arr.length; i++) {
        if (i === 0 && s_arr[i].charCodeAt(0) >= 65) {
            s_arr[i] = s_arr[i].toUpperCase();
        }
    
        if (i > 0) {
            if (s_arr[i - 1] === " ")
                s_arr[i] = s_arr[i].toUpperCase();
            
            else
                s_arr[i] = s_arr[i].toLowerCase();
        }
    }
    
    return s_arr.join("");
}