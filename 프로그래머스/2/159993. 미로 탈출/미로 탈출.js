function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];
    
    // 시작 지점 찾기
    let startX, startY;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (maps[i][j] === 'S') {
                startX = i;
                startY = j;
            }
        }
    }
    
    // 방문 배열 초기화
    const visited = [];
    for (let i = 0; i < n; i++) {
        visited[i] = [];
        
        for (let j = 0; j < m; j++)
            visited[i][j] = [false, false];
    }
    
    const queue = [[startX, startY, 0, 0]] // 현재 위치 x 좌표, y 좌표, 걸린 시간, 레버 상태
    visited[startX][startY][0] = true;
    let head = 0;
    
    while (head < queue.length) {
        const [x, y, time, lever] = queue[head++];
        
        // 레버를 당긴 상태에서 출구 도착
        if (lever === 1 && maps[x][y] === 'E')
            return time;
        
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            
            if (nx >= n || nx < 0 || ny >= m || ny < 0)
                continue;
            
            if (maps[nx][ny] === 'X')
                continue;
            
            // 레버 상태 갱신
            const nextLever = maps[nx][ny] === 'L' ? 1 : lever;
            
            if (visited[nx][ny][nextLever])
                continue;
            
            visited[nx][ny][nextLever] = true;
            queue.push([nx, ny, time + 1, nextLever]);
        }
    }
    
    return -1;
}