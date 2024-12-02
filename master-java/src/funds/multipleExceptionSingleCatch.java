package funds;

public class multipleExceptionSingleCatch {

    public static void main(String[] args) {
        Test t1=new Test();
        try{
            System.out.println(t1.value);
            System.out.println("do");
            int i=200;
            int result=i/0;
            System.out.println(result);
        }
        catch(ArithmeticException | NullPointerException ex ){

            System.out.println("Exception occured");
			System.out.println(ex.getMessage());


        }
    }
    
}

class Test{
    int value=100;
}