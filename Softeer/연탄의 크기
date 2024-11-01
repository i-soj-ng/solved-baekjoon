import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = 0;
        int max_cnt = 0;
        n = scanner.nextInt();

        int[] heater_size = new int[n];
        for (int i = 0; i < n; i++) {
            heater_size[i] = scanner.nextInt();
        }

        Arrays.sort(heater_size);
        for (int i = 2; i < (heater_size[n-1] + 1); i++) {
            int cnt = 0;
            for (int j = 0; j < n; j++) {
                if (heater_size[j] % i == 0)
                    cnt += 1;
            }
            if (cnt > max_cnt)
                max_cnt = cnt;
        }

        System.out.println(max_cnt);
    }
}
