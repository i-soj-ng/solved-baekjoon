import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long K = sc.nextLong();
        long P = sc.nextLong();
        long N = sc.nextLong();

        for(int i = 0; i < N; i++) {
            K = (K * P) % 1000000007;
        }

        System.out.print(K);
    }
}
