package funds;

public class multilevel {

    public static void main(String[] args) {
        C22 c=new C22();
        c.display1();
        c.display2();
        c.display3();
    }
    
}


class A22 {
   A22(){
        System.out.println("A constructor");
    }
    void display1(){
        System.out.println("A");
    }
}

class B22 extends A22 {

    B22(){
        System.out.println("B constructor");
    }
    void display2(){
        System.out.println("B");
    }
}

class C22 extends B22 {
    C22(){
        System.out.println("C constructor");
    }
    void display3(){
        System.out.println("C");
    }
}

