class Solution {
    static int[] dr = {0, 1, 1, 1, 0, -1, -1, -1};
	static int[] dc = {1, 1, 0, -1, -1, -1, 0, 1};

    public int shortestPathBinaryMatrix(int[][] grid) {
        int shortestDist = -1;
        int n = grid.length;
        boolean[][] visited = new boolean[n][n];

        if (grid[0][0] == 1 | grid[n-1][n-1] == 1)
            return shortestDist;

        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{0, 0, 1});
        visited[0][0] = true;

        while (!queue.isEmpty()) {
            int[] cur = queue.poll();
            int curRow = cur[0];
            int curCol = cur[1];
            int curDist = cur[2];

            if (curRow == n-1 && curCol == n-1) {
                shortestDist = curDist;
                return shortestDist;
            }

            for (int i = 0; i < 8; i++) {
                int nextRow = curRow + dr[i];
                int nextCol = curCol + dc[i];
                if ((nextRow >= 0 && nextRow < n) && (nextCol >= 0 && nextCol < n)) {
                    if (grid[nextRow][nextCol] == 0 && !(visited[nextRow][nextCol])) {
                        queue.offer(new int[]{nextRow, nextCol, curDist+1});
                        visited[nextRow][nextCol] = true;
                    }
                }
            }
        }
        return shortestDist;
    }
}
