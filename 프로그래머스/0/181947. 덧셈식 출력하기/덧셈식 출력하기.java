import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();

        String result = String.format("%d + %d = %d", a, b, a + b);
        System.out.println(result);
    }
}