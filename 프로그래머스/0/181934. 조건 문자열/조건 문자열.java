class Solution {
    public int solution(String ineq, String eq, int n, int m) {
        int answer = 0;
        
        if (n > m)
            answer = ineq.equals(">") ? 1 : 0;
        else if (n < m)
            answer = ineq.equals("<") ? 1 : 0;
        else
            answer = eq.equals("=") ? 1 : 0;
        
        return answer;
    }
}