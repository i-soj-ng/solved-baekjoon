import java.io.*;
import java.util.*;

public class Main {
    static class Jewel implements Comparable<Jewel> { 
        int weight;
        int price;

        public Jewel(int weight, int price) {
            this.weight = weight;
            this.price = price;
        }

        @Override
        public int compareTo(Jewel other) {
            return Integer.compare(other.price, this.price);
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        List<Jewel> jewels = new ArrayList<>();
        
        int W = Integer.parseInt(st.nextToken());
        int N = Integer.parseInt(st.nextToken());
        
        int max_price = 0;

        for(int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            int M = Integer.parseInt(st.nextToken());
            int P = Integer.parseInt(st.nextToken());

            jewels.add(new Jewel(M, P));
        }

        Collections.sort(jewels);

        for(Jewel jewel: jewels) {
            if (W == 0) break;
            
            if (W >= jewel.weight) {
                max_price += (jewel.weight * jewel.price);
                W -= jewel.weight;
            } else {
                max_price += (W * jewel.price);
                W = 0;
            }
        }
        
        System.out.print(max_price);
    }
}
