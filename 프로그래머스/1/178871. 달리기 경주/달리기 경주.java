import java.util.*;

class Solution {
    static HashMap<String, Integer> rankings = new HashMap<>();
    
    public String[] solution(String[] players, String[] callings) {
        for (int i = 0; i < players.length; i++) {
            rankings.put(players[i], i);
        }
        
        for (String name: callings) {
            int idx = rankings.get(name);
            swapPlayers(players, idx);
        }
        
        return players;
    }
    
    static void swapPlayers(String[] players, int idx) {
        String tmp = players[idx - 1];
        players[idx - 1] = players[idx];
        players[idx] = tmp;
        
        rankings.put(players[idx], idx);
        rankings.put(players[idx - 1], idx - 1);
    }
}