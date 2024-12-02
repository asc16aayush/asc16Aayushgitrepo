package assignment1;

import java.util.Scanner;

public class assign3 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter any integer");
        int x = sc.nextInt();

        System.out.println("aayush");
        sc.nextLine();

        table t = new table();

        // t.multiply(x);
        t.multiplyByWhile(x);
        // t.multiplyByDoWhile(x);

    }

}

class table {
    void multiply(int x) {
        System.out.println("raj");
        for (int i = 1; i <= 10; i++) {
            System.out.println(x * i);
        }
    }

    void multiplyByWhile(int x) {
        int n = 1;
        while (n <= 10) {
            System.out.println(x * n);
            n++;
        }
    }

    void multiplyByDoWhile(int x) {
        int i = 1;
        do {
            System.out.println(x * i);
            i++;

        } while (i <= 10);
    }
}
