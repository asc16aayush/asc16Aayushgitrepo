package funds;

public class customiseException {
    public static void main(String[] args) {
        int age=100;
        if(age<21 || age>60){
            ageInvalidException ex1=new ageInvalidException("Invalid age to serve");
            
            try{
            throw ex1;
        }
        catch(ageInvalidException ex){
            System.out.println(ex.getMessage());
        }
    }
        else{

            System.out.println("hi you can work because your age is valid for job");
        
        }
        System.out.println("done");
    }
}

class ageInvalidException extends RuntimeException{
    public ageInvalidException(String message){
        super(message);
    }
}
