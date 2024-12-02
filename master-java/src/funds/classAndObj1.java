package funds;

import java.util.Date;

class Person{
    String name;
    int age;

    Date d1=new Date();

    Person(String name,int age){
        this.name=name;
        this.age=age;

    }
    void printTodayDate(){
        System.out.println("today date is --"+d1);
    }

    void knowledge(){
        System.out.println("I confirm Harsh is a Meetha Boy");
    }

    void knowledge1(){
        System.out.println("He also confirm taht Harsh is a Meetha Boy");
    }


    void display(){
        System.out.println("name of person  is :"+name);
        System.out.println("age of person  is :"+age);
    }
}





public class classAndObj1 {
    public static void main(String[] args) {

        Person P1=new Person("Aayush", 22);
        P1.display();
        P1.knowledge();
        P1.printTodayDate();
        
        System.out.println();

        Person P2=new Person("Jalaj", 24);
        P2.display();
        P2.knowledge1();
        P2.printTodayDate();


        
    }
    
}
