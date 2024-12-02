package assignment1;

import java.util.Arrays;
import java.util.Scanner;

public class assign6 {
    public static void main(String[] args) {

        Scanner sc=new Scanner(System.in);
        int arr[]=new int[10];
        System.out.println("enter 10 integer");
        for(int i=0;i<10;i++){
            arr[i]=sc.nextInt();
        }

        method m1=new method();
        // System.out.println("before sort");
        // m1.display(arr);
        // m1.displayByWhile(arr);
        // System.out.println("After sort");
        // Arrays.sort(arr);
        // m1.display(arr);

        System.out.println("enter the element you want to count");
        int x=sc.nextInt();
        
        System.out.println(m1.countDigit(arr,x));

        // System.out.println("enter the index you want to change");
        // int index=sc.nextInt();
        // System.out.println("enter the number you want to insert");
        // int n=sc.nextInt();

        // m1.insertAtPos(arr, n, index);
        // m1.display(arr);

        m1.excludeDuplicate(arr);
        m1.display(arr);
        
        
    }
    
}

class method{
    void display(int[] arr){
        for(int i=0;i<arr.length;i++){
            System.out.println(arr[i]);
        }
    }

    void displayByWhile(int[] arr){
        int i=0;
        while(i<arr.length){
            System.out.println(arr[i]);
            i++;
        }
    }

    int countDigit(int[] arr,int x){
        int count=0;
        for(int i=0;i<arr.length;i++){
              if(arr[i]==x){
                count++;
              }
        }
        return count;
    }

    void insertAtPos(int[] arr,int n,int index){
        arr[index]=n;
    }


int[] excludeDuplicate(int[] arr){
    
    for(int i=1;i<arr.length;i++){
        for(int j=0;j<i+1;j++){
            if(arr[i]==arr[j]){
                continue;
            }
            else{
                arr[j]=arr[i];
            }
        }

    }
    return arr;

}


}





// public class RemoveDuplicates {
//     public static void main(String[] args) {
//         int[] originalArray = {9, 2, 2, 9, 10, 9};
//         int[] resultArray = removeDuplicates(originalArray);

//         // Print the result
//         for (int num : resultArray) {
//             System.out.print(num + " ");
//         }
//     }

//     public static int[] removeDuplicates(int[] arr) {
//         // Array to store the unique elements (maximum size could be the size of the original array)
//         int[] tempResult = new int[arr.length];
//         int resultSize = 0; // Variable to keep track of the result array size

//         // Iterate through each element in the original array
//         for (int i = 0; i < arr.length; i++) {
//             boolean isDuplicate = false;

//             // Check if the element is already in the tempResult array
//             for (int j = 0; j < resultSize; j++) {
//                 if (arr[i] == tempResult[j]) {
//                     isDuplicate = true;
//                     break; // Exit the inner loop since the element is already found
//                 }
//             }

//             // If it's not a duplicate, add it to the tempResult array
//             if (!isDuplicate) {
//                 tempResult[resultSize] = arr[i];
//                 resultSize++;
//             }
//         }

//         // Create a final array of exact size (to exclude unused space in tempResult)
//         int[] result = new int[resultSize];
//         for (int i = 0; i < resultSize; i++) {
//             result[i] = tempResult[i];
//         }

//         return result;
//     }
// }
