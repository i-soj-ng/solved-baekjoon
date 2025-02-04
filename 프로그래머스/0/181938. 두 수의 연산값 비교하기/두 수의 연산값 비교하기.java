class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        
        String str_a = String.valueOf(a);
        String str_b = String.valueOf(b);
        
        int sum = Integer.valueOf(str_a + str_b);
        int mul = 2 * a * b;
        
        answer = (sum > mul) ? sum : mul;
        
        return answer;
    }
}