class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        String str_a = String.valueOf(a);
        String str_b = String.valueOf(b);
        
        int x = Integer.valueOf(str_a + str_b);
        int y = Integer.valueOf(str_b + str_a);
        
        answer = (x > y) ? x : y;
        
        return answer;
    }
}