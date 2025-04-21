import java.util.*;

class Solution {
    boolean solution(String s) {
        Deque<Character> deque = new ArrayDeque<>();

        char[] parentheses = s.toCharArray();

        Map<Character, Character> map = Map.of(')', '(', '}', '{', ']', '[');
        Set<Character> open_parentheses = Set.of('(', '{','[');

         for(char p : parentheses) {
            if(open_parentheses.contains(p)) {
                deque.add(p);
            } else {
                Character last_item = deque.peekLast();
                if(last_item != null && last_item.equals(map.get(p))) {
                    deque.pollLast();
                } else {
                    return false;
                }
            }
        }

        if (deque.peekLast() != null)
            return false;

        return true;
    }
}