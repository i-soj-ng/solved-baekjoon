import java.util.*;

class Solution {
    public int solution(String s) {
        int answer = 0;
        
        Deque<Character> deque = new ArrayDeque<>();
        
        for (char c : s.toCharArray()) {
            deque.add(c);
        }
        
        for (int i = 0; i < deque.size(); i++) {
            if (isValid(deque)) {
                answer++;
            }
            
            deque.add(deque.poll());
        }
        
        return answer;
    }
    
    boolean isValid(Deque<Character> deque) {
        Deque<Character> stack = new ArrayDeque<>();
        
        for (char c : deque) {
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } else {
                if (stack.isEmpty()) return false;
                
                char target = stack.pop();
                if ((target == '(' && c != ')') ||
                    (target == '{' && c != '}') ||
                    (target == '[' && c != ']')) {
                    return false;
                }
            }
        }
        
        return stack.isEmpty();
    }
}