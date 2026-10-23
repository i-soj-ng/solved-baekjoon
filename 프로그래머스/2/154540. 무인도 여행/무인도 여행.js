function solution(maps) {
    var answer = [];
    const n = maps.length;
    const m = maps[0].length;
    let visited = [];
    
    for (let i = 0; i < n; i++) {
        visited[i] = [];
        for (let j = 0; j < m; j++) {
            visited[i][j] = false;
        }
    }
    
    function dfs(x, y) {
        if (x < 0 || x >= n || y < 0 || y >= m)
            return 0;
        
        if (maps[x][y] === "X" || visited[x][y])
            return 0;
        
        visited[x][y] = true;
        let sum = parseInt(maps[x][y]);
        
        sum += dfs(x, y - 1);
        sum += dfs(x, y + 1);
        sum += dfs(x - 1, y);
        sum += dfs(x + 1, y);
        
        return sum;
    }
    
    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[i].length; j++) {
            if (maps[i][j] === "X" || visited[i][j])
                continue;
            
            const sum = dfs(i, j);
            
            if (sum !== 0)
                answer.push(sum);
        }
    }
    
    if (answer.length === 0)
        answer.push(-1);
    
    return answer.sort((a, b) => a - b);
}