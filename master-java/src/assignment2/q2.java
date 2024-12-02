package assignment2;

import java.util.Scanner;

public class q2 {

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("enter your name");
        String s=sc.nextLine();
        System.out.println("your welcome message is :");
        System.out.println(getMessage(s));
        

        
    }

    static String getMessage(String s){
        s="Hello "+s+" ,Welcome to java World!!!";
        return s;

    }
    
}
