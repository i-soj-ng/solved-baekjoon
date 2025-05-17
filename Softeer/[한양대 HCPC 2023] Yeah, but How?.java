import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String buffer = scanner.nextLine();
        char[] arr = buffer.toCharArray();
        ArrayList<String> arrayList = new ArrayList<>();

        for (int i = 0; i < arr.length; i++) {
            arrayList.add(String.valueOf(arr[i]));

             // 괄호가 ( 일 때
            if (String.valueOf(arr[i]).equals("(")) {
                if ((i + 1) < arr.length && String.valueOf(arr[i+1]).equals(")")) {
                    arrayList.add("1");
                }
            }
            // 괄호가 ) 일 때
            else {
                if ((i + 1) < arr.length && String.valueOf(arr[i+1]).equals("(")) {
                    arrayList.add("+");
                }
                else if ((i + 1) < arr.length && String.valueOf(arr[i+1]).equals(")")) {
                   arrayList.add("+1"); 
                }
            }
        }

        for (String i : arrayList) {
            System.out.print(i);
        }
    }
}
