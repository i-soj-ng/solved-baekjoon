import java.util.*;

class Solution {
    public String solution(String[] participant, String[] completion) {
        String answer = "";
        
        HashMap<String, Integer> p_hash = new HashMap<String, Integer>();
        
        for(String p : participant) {
            p_hash.put(p, p_hash.getOrDefault(p, 0) + 1);
        }
        
        for(String c : completion) {
            p_hash.replace(c, p_hash.get(c) - 1);
        }
        
        for (String key : p_hash.keySet()) {
            if(p_hash.get(key) != 0)
                answer = key;
        }

        return answer;
    }
}