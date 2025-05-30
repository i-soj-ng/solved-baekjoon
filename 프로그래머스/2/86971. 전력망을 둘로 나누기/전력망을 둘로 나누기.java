import java.util.*;

class Solution {
    public int solution(int n, int[][] wires) {
        int answer = Integer.MAX_VALUE;
        List<Integer>[] graph = new ArrayList[n + 1];
        
        for (int i = 0; i <= n; i++) {
            graph[i] = new ArrayList<>();
        }
        
        for (int[] wire : wires) {
            int a = wire[0];
            int b = wire[1];
            graph[a].add(b);
            graph[b].add(a);
        }
        
        for (int[] wire : wires) {
            int a = wire[0];
            int b = wire[1];
            graph[a].remove(Integer.valueOf(b));
            graph[b].remove(Integer.valueOf(a));
            
            int cnt1 = bfs(a, graph, n);
            
            graph[a].add(b);
            graph[b].add(a);
            
            int cnt2 = n - cnt1;
            answer = Math.min(answer, Math.abs(cnt1 - cnt2));
        }
        
        return answer;
    }
    
    private int bfs(int start, List<Integer>[] graph, int n) {
        boolean[] visited = new boolean[n + 1];
        Queue<Integer> queue = new LinkedList<>();
        queue.add(start);
        visited[start] = true;
        int count = 1;
        
        while (!queue.isEmpty()) {
            int cur_v = queue.poll();
            
            for (int next_v : graph[cur_v]) {
                if (!visited[next_v]) {
                    queue.add(next_v);
                    visited[next_v] = true;
                    count++;
                }
            }
        }
        
        return count;
    }
}