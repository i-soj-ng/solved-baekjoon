import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int t = 0;
        t = scanner.nextInt();

        for (int i = 0; i < t; i++) {
            int n = 0;
            n = scanner.nextInt();

            int q = n / 5;
            int r = n % 5;

            for (int j = 0; j < q; j++)
                System.out.print("++++ ");

            for (int k = 0; k < r; k++)
                System.out.print("|");

            System.out.print("\n");
        }
    }
}
