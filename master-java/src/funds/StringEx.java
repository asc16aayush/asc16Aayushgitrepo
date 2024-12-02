package funds;
import java.util.*;

public class StringEx {
    String message="Hello Aayush !!!!";
    public static void main(String[] args) {

        StringEx s1=new StringEx();
        System.out.println(s1.message);

        System.out.println(s1.message.substring(1,3));

        System.out.println(s1.message.length());

        System.out.println(s1.message.lastIndexOf("A"));

        System.out.println(s1.message.indexOf("a"));

        System.out.println(s1.message.toLowerCase());

        System.out.println(s1.message.toUpperCase());

        System.out.println(s1.message.equalsIgnoreCase("hello aayush"));

        System.out.println(s1.message.charAt(2));

        System.out.println(s1.message.concat(" Raj"));

        String s2="welcome$abc!1test";
        System.out.println(s2);

        String s3=s2+" ",s5="";
         for(int i=0;i<s3.length();i++){
            while(s3.charAt(i)!=' '){
                if(s3.charAt(i)=='$' || s3.charAt(i)=='!' ){
                    continue;

                }
                else{
                    s5=s5+s3.charAt(i);
                }

            }
         }

         System.out.println(s5);



    }
}
