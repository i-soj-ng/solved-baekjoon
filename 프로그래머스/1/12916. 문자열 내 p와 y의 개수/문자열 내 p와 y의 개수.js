function solution(s){
    let p_num = 0;
    let y_num = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'p' || s[i] === 'P')
            p_num++;
        
        else if (s[i] === 'y' || s[i] === 'Y')
            y_num++;
    }

    return p_num === y_num;
}