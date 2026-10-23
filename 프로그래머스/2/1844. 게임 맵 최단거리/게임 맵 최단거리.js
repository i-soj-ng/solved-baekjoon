function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];
    
    const queue = [[0, 0, 1]]; // 시작위치 저장
    let head = 0;
    
    visited[0][0] = true;
    
    while (head < queue.length) {
        const [x, y, distance] = queue[head++];
        
        if (x === n - 1 && y === m - 1)
            return distance;
        
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            
            if (nx < 0 || nx >= n || ny < 0 || ny >= m)
                continue;
            
            if (maps[nx][ny] === 0 || visited[nx][ny])
                continue;
            
            visited[nx][ny] = true;
            queue.push([nx, ny, distance + 1]);
        }
    }
    return -1;
}