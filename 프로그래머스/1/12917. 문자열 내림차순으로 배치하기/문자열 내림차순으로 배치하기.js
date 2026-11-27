function solution(s) {
    let s_arr = s.split("");
    s_arr.sort((a, b) => b.charCodeAt() - a.charCodeAt());
    return s_arr.join('');
}