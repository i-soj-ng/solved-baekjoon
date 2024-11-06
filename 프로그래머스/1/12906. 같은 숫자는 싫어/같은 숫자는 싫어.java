import java.util.*;

public class Solution {
    public int[] solution(int []arr) {
        Deque<Integer> deque = new LinkedList<>();
        
        for (int i = 0; i < arr.length; i++) {
            if (deque.size() != 0) {
                if (arr[i] != deque.peekLast())
                    deque.add(arr[i]);
            }
            else {
                deque.add(arr[i]);
            }
        }
        
        int size = deque.size();
        int[] answer = new int[size];
        for (int i = 0; i < size; i++) {
            answer[i] = deque.poll();
        }

        return answer;
    }
}