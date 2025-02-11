class Solution {
    public int solution(int a, int d, boolean[] included) {
        int answer = 0;
        
        for (int n = 0; n < included.length; n++) {
            if (included[n]) {
                answer += a + n * d;
            }
        }
        
        return answer;
    }
}