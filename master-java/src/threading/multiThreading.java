package threading;

public class multiThreading {

    public static void main(String[] args) {
        Thread.currentThread().setName("Harsh");
        System.out.println(Thread.currentThread().getName()+"is starting the death match");

        ThreadJalaj jalaj = new ThreadJalaj();
        ThreadAayush aayush = new ThreadAayush();
        jalaj.start();
        aayush.start();
        
        try {
            jalaj.join();
            aayush.join();
        } catch (InterruptedException interruptedException) {
            System.out.println("Thread interrupted: " + interruptedException.getMessage());
        }
        System.out.println(Thread.currentThread().getName() + " is ending the game!");
    }


    }
    


class Compute1{
    public void odd(){
        for(int i=1;i<50;i+=2){
            System.out.println("Aayush : "+i);
        }
    }

    public void even(){
        for(int i=2;i<50;i+=2){
            System.out.println("Jalaj : "+i);
        }
    }

}

class ThreadJalaj extends Thread {
    // override the run method
    public void run() {
        Compute1 compute = new Compute1();
        compute.odd();
    }
}

class ThreadAayush extends Thread {
    // override the run method
    public void run() {
        Compute1 compute = new Compute1();
        compute.even();
    }
}

