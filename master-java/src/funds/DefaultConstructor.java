package funds;
// Purpose: To demonstrate the default constructor in Java.
// What are constructors?
// - Like methods, a constructor also contains a collection of statements (i.e., instructions) that are executed at the time of Object creation.
// - But a constructor is used to initialize the newly created object.
public class DefaultConstructor {
    // instance variable
    int intVar ;
    float floatVar;
    boolean booleanVar;
    public static void main(String[] args) {
  DefaultConstructor defaultConstructor;
        // defaultConstructor = new DefaultConstructor();
        // System.out.println(defaultConstructor.intVar);
        // System.out.println(defaultConstructor.floatVar);
        // System.out.println(defaultConstructor.booleanVar);

        // instance vs static
        Thread thread = Thread.currentThread();
        System.out.println(thread);
        System.out.println(thread.getName());
      
        defaultConstructor = new DefaultConstructor(1, 2.0f, true);
        System.out.println(defaultConstructor);
    }
    
    public  DefaultConstructor(){
        // instance variables
        floatVar = 20;
        booleanVar = true;
    }
    //Overloaded Constructor
    public DefaultConstructor(int intVar, float floatVar, boolean booleanVar) {
            this.intVar = intVar;
            this.floatVar = floatVar;
            this.booleanVar = booleanVar;
    }

    @Override
    public String toString() {
        return "DefaultConstructor{" +
                "intVar=" + intVar +
                ", floatVar=" + floatVar +
                ", booleanVar=" + booleanVar +
                '}';
    }
}