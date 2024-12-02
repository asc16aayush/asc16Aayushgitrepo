package assignment1;

import java.util.Scanner;

public  class assign4 {

    public static void main(String[] args) {
       
        Scanner sc=new Scanner(System.in);
        System.out.println("enter your string");
        String s=sc.nextLine();
        s=s+" ";

        System.out.println(countWord(s));
  
    }

    static int countWord(String s){
       
        int count=0;
        String w="";
        for(int i=0;i<s.length();i++){
            char c=s.charAt(i);
            
            if(c!=' '){
                w=w+c;
              }
        
        else{
            
                
            
            for (char c1 : w.toCharArray()) {
                while (w.length()>0) {
                if (Character.isDigit(c1)) {
                    w="";
                    continue;
                    
                }
                else{
                    count++;
                    w="";
                }
            }
            

        }
    }
    }
        return count;
    }
    
}





