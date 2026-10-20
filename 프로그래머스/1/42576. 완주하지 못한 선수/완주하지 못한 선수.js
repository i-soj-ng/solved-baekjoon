function solution(participant, completion) {
    var answer = '';
    let hash = new Map();
    
    for (let i = 0; i < participant.length; i++) {
        if (hash.has(participant[i])) {
            hash.set(participant[i], hash.get(participant[i]) + 1);
            continue;
        }
        
        hash.set(participant[i], 1);
    }
    
    for (let i = 0; i < completion.length; i ++) {
        if (hash.has(completion[i])) {
            hash.set(completion[i], hash.get(completion[i]) - 1);
        }
    }
    
    for (let i = 0; i < participant.length; i++) {
        if (hash.get(participant[i]) != 0) {
            answer = participant[i];
        }
    }
    
    return answer;
}