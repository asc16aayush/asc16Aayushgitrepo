package funds;

public class abstractDataType {

    byte bytevar=-128;
    short shortvar=32767;
    int intvar=12123536;
    long longvar= 43576325345676L;
    float floatvar=362.3232f;
    double doublevar=53265.637438;
    char charvar='a';
    boolean booleanvar=false;

    public void display(){
        System.out.println("bytevar :"+bytevar);
        System.out.println("booleanvar :"+booleanvar);
        System.out.println("doublevar :"+doublevar);
    }

    public static void main(String[] args) {
        abstractDataType abstractdata1=new abstractDataType();
        abstractdata1.display();

        System.out.println(abstractdata1.charvar);
    }

}
