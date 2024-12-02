package assignment2;

import java.util.Scanner;

public class q4 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("enter any integer number");
        int n=sc.nextInt();
        System.out.println("number in words :");
        numToWords(n);
    }

    static void numToWords(int n){
        int x;
        String s1="";
        String s[]={"Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"};
        while(n>0){
           x=n%10;
           n=n/10;
            s1=s[x]+" "+s1;

        }
        System.out.println(s1);
    }
}
