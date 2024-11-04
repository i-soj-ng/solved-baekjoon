import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] solution(String[] name, int[] yearning, String[][] photo) {
        int[] answer = new int[photo.length];
        Map<String, Integer> hashMap = new HashMap<>();
        
        // 이름과 그리움 점수를 담은 HashMap 생성
        for (int i = 0; i < name.length; i++)
            hashMap.put(name[i], yearning[i]);
        
        // photo 배열의 추억 점수를 계산하여 answer 배열에 저장
        for (int i = 0; i < photo.length; i++) {
            String[] p = photo[i];
            int sumYearning = 0;
            
            for (int j = 0; j < p.length; j++) {
                boolean hasYearning = hashMap.containsKey(p[j]);
            
                if (hasYearning) {
                    sumYearning += hashMap.get(p[j]);
                }
            }
            answer[i] = sumYearning;
        }
        
        return answer;
    }
}