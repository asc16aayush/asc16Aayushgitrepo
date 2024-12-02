package funds;

public class single {
    public static void main(String[] args) {
        B1 b=new B1();
        b.display1();
        b.display2();
    }
    
}

class A1{
    void display1(){
        System.out.println("A");
    }
}

class B1 extends A1 {
    void display2(){
        System.out.println("B");
    }
}