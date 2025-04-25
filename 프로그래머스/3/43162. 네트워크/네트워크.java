import java.util.*;

class Solution {                                         
    public int solution(int n, int[][] computers) {
        int answer = 0;
        boolean[] visited = new boolean[computers.length];
        
        for(int i = 0; i < computers.length; i++) {
            visited[i] = false;
        }
        
        for(int i = 0; i < computers.length; i++ ) {
            if(visited[i] == false) {
                answer++;
                dfs(computers, visited, i);
            }
        }
        
        
        return answer;
    }
    
    public void dfs(int[][] computers, boolean[] visited, int currentNode ) {
        visited[currentNode] = true;
        for(int i = 0; i < computers.length; i++) {
            if(visited[i] == false && computers[currentNode][i] == 1) {
                dfs(computers, visited, i);
            }
        }
    }
}