import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) {
        int n = 0, m = 0;
        int L1 = 0, R1 = 0;
        int L2 = 0, R2 = 0;
        int cnt = 0;
        
        Scanner scanner = new Scanner(System.in);
        n = scanner.nextInt();
        m = scanner.nextInt();

        int[][] mapArray = new int[n][m];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++)
                mapArray[i][j] = scanner.nextInt();
        }

        L1 = scanner.nextInt();
        R1 = scanner.nextInt();

        L2 = scanner.nextInt();
        R2 = scanner.nextInt();

        for (int i = L1 - 1; i < R1; i++) {
            for (int j = 0; j < m; j++) {
                if (mapArray[i][j] == 1) {
                    mapArray[i][j] = 0;
                    break;
                }
            }
        }
        
        for (int i = L2 - 1; i < R2; i++) {
            for (int j = 0; j < m; j++) {
                if (mapArray[i][j] == 1) {
                    mapArray[i][j] = 0;
                    break;
                }
            }
        }

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (mapArray[i][j] == 1)
                    cnt += 1;
            }
        }

        System.out.println(cnt);
    }
}
