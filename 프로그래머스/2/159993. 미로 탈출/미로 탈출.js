function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];
    
    const visited = [];
    for (let i = 0; i < n; i++) {
        visited[i] = [];
        
        for (let j = 0; j < m; j++)
            visited[i][j] = [false, false];
    }
    
    let startX, startY;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (maps[i][j] === 'S') {
                startX = i;
                startY = j;
            }
        }
    }
    
    const queue = [[startX, startY, 0, 0]];
    visited[startX][startY][0] = true;
    let head = 0;
    
    while (head < queue.length) {
        const [x, y, time, lever] = queue[head++];
        
        if (lever === 1 && maps[x][y] === 'E')
            return time;
        
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            
            if (nx >= n || nx < 0 || ny >= m || ny < 0)
                continue;
            
            if (maps[nx][ny] === 'X' || visited[nx][ny][lever])
                continue;
            
            const nextLever = maps[nx][ny] === 'L' ? 1 : lever;
            
            visited[nx][ny][nextLever] = true;
            queue.push([nx, ny, time + 1, nextLever]);
        }
    }
    return -1;
}