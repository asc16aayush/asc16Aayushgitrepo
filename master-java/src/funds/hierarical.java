package funds;

public class hierarical {
    public static void main(String[] args) {
        B22 b=new B22();
        b.display1();
        C22 c=new C22();
        c.display1();
    }
}

class A{
    void display1(){
        System.out.println("A");
    }
}

class B extends A22 {
    void display2(){
        System.out.println("B");
    }
}

class C extends A22 {
    void display3(){
        System.out.println("C");
    }
}