function solution(s) {
    if (s.length === 4 || s.length === 6) {
        let isNumber = true;
        
        for (let i = 0; i < s.length; i++) {
            if (isNaN(s[i]))
                isNumber = false;
        }
        
        return isNumber;
    }
    
    else return false;
}