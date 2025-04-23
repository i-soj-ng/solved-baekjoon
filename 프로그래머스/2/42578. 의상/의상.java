import java.util.*;

class Solution {
    public int solution(String[][] clothes) {
        int answer = 1;
        
        HashMap<String, Integer> map = new HashMap<>();

        // 의상 종류별로 해당 의상의 개수를 HashMap의 Value로 저장
        // 해당 종류의 옷을 안 입는 경우도 포함하여 Default 값을 1로 지정
        for(int i = 0; i < clothes.length; i++) {
            String key = clothes[i][1];
            map.put(key, map.getOrDefault(key, 1) + 1);
        }
        
        for(Map.Entry<String, Integer> entry : map.entrySet()) {
            answer *= entry.getValue();
        }
        
        return answer - 1;
    }
}
