function solution(s) {
    if (s[0] === "-") {
        let temp = Number(s.slice(1));
        return temp * -1;
    } else if (s[0] === "+") {
        let temp = Number(s.slice(1));
        return temp;
    } else {
        return Number(s);
    }
}