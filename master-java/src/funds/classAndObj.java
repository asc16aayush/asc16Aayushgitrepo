package funds;



class Car{
    String type;
    int price;

    Car(){
        this.type="Gasoline";
        this.price=10000;

    }

    void display(){
        System.out.println("type of car is :"+type);
        System.out.println("price of car is :"+price);
       
    }

    @Override
    public String toString() {
        String message="type of car :"+ type+"\n price of car is :"+price;
        return message;
    }

}

public class classAndObj {
    public static void main(String[] args) {
        Car car=new Car();
        car.display();

        String s1=car.toString();
        System.out.println(s1);

        System.out.println(s1.toString());

        
    }

    
    
}
