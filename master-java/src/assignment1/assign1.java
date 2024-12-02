package assignment1;

public class assign1 {
    public static void main(String[] args) {
        addition ad=new addition();
        System.out.println(ad.add(10,20));
        System.out.println(ad.add(10,20 , 30));
        System.out.println(ad.add(10.5, 20.1));
        System.out.println(ad.add("Aayush ", 70));
    }
    
}


class addition{
    int add(int a,int b){
        return a+b;
    }

    int add(int a,int b,int c){
        return a+b+c;
    }
    double add(double a,double b){
        return a+b;
    }
    String add(String a,int b){
        return a+b;
    }
}
