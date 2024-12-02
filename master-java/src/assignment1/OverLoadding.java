package assignment1;

public class OverLoadding {
    
    public static void main(String[] args) {

        short x=10,y=20;

        Overoading a=new Overoading();

       System.out.println( a.add(x,y));
        
    }
    
}
class Overoading{
    
    short add(short n1,short n2){
 
     return (short)(n1+n2);
 
     }
 }



 