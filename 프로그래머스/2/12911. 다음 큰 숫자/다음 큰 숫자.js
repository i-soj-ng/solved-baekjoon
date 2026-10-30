function solution(n) {
    const binary_n = n.toString(2).split('');
    let count = binary_n.filter(e => e === '1').length;
    
    let nextNumber = n + 1;
    while (true) {
        const binary_next = nextNumber.toString(2).split('');
        let count_next = binary_next.filter(e => e === '1').length;
        
        if (count_next === count)
            return nextNumber;
        
        nextNumber++;
    }
}