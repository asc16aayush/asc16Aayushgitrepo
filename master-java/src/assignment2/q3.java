package assignment2;

import java.util.Scanner;

public class q3 {

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("enter number you want to insert");
        int n=sc.nextInt();
        int arr[]=new int[n];
        System.out.println("enter any "+n +"integer");
        for(int i=0;i<n;i++){
            arr[i]=sc.nextInt();
        }
        
        System.out.println("--------------");
        System.out.println(max(arr));

    }

    static int max(int arr[]){
        int max=0;
        for(int i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                max=arr[i];
            }
        }

        return max;
    }
    
}
