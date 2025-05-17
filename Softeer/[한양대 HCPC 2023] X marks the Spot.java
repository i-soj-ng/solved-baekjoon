import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        StringBuilder sb = new StringBuilder();
        
        int n = Integer.parseInt(st.nextToken());

        for (int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            
            String s = st.nextToken();
            String t = st.nextToken();

            int lowerIndex = s.indexOf('x');
            int upperIndex = s.indexOf('X');

            if (lowerIndex != -1) {
                sb.append(Character.toUpperCase(t.charAt(lowerIndex)));
            } else {
                sb.append(Character.toUpperCase(t.charAt(upperIndex)));
            }
        }

        String result = sb.toString();
        System.out.print(result);
    }
}
