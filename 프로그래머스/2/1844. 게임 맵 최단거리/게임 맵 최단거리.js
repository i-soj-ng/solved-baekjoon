function solution(maps) {
    var answer = 0;
    const n = maps.length;
    const m = maps[0].length;
    
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];
    
    const queue = [[0, 0, 1]];
    let head = 0;
    
    visited[0][0] = true; // 시작 위치 기록
    
    while (head < queue.length) {
        const [x, y, distance] = queue[head++];
        
        // 도착 지점에 도달한 경우
        if (x === n - 1 && y === m - 1)
            return distance;
        
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            
            // 맵을 벗어난 경우
            if (nx < 0 || nx >= n || ny < 0 || ny >= m)
                continue;
            
            // 벽이거나 이미 방문했던 경우
            if (maps[nx][ny] === 0 || visited[nx][ny])
                continue;
            
            visited[nx][ny] = true;
            queue.push([nx, ny, distance + 1]);
        }
    }
    
    // 목적지에 도착할 수 없는 경우
    if (queue[queue.length - 1][0] !== n && queue[queue.length - 1][1] !== m)
        return -1;
    
    return answer;
}