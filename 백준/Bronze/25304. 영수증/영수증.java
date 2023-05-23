import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int X, N;

        X = input.nextInt();
        N = input.nextInt();

        int total = 0;
        for (int i = 0; i < N; i++) {
            int a, b;

            a = input.nextInt();
            b = input.nextInt();

            total += a * b;
        }

        if (X == total)
            System.out.print("Yes");
        else
            System.out.print("No");
    }
}