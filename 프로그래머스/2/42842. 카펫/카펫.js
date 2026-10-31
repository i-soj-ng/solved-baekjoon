function solution(brown, yellow) {
    let min_width = Math.ceil((brown - 4) / 4);
    let max_width = Math.ceil((brown - 6) / 2);
    
    for (let width = min_width; width <= max_width; width++) {
        let height = Math.round((brown - 4 - (2 * width)) / 2);
        
        if (width * height === yellow)
            return [width + 2, height + 2];
    }
}