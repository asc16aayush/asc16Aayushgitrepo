package threading;

public class singleThread {
    public static void main(String[] args) {
        System.out.println(Thread.currentThread().getName());
        Thread.currentThread().setName("Main Thread");
        System.out.println(Thread.currentThread().getName());
        Compute c1=new Compute();
        c1.even();
        c1.odd();
        
    }
    
}

class Compute{
    public void odd(){
        for(int i=1;i<=50;i+=2){
            System.out.println("odd :"+i);
        }
    }
    public void even(){
        for(int i=2;i<=50;i+=2){
            System.out.println("even :"+i);
        }
    }

}
