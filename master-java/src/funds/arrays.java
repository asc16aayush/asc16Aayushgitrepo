package funds;

import java.util.Arrays;
import java.util.List;

public class arrays {

    private void primitiveArray(){
        int intArray[]=new int[5];
        intArray[0]=10;
        intArray[1]=20;
        intArray[2]=30;
        intArray[3]=40;
        intArray[4]=50;

        for(int i=0;i<intArray.length;i++){
            System.out.println(i+"="+intArray[i]);
        }

    }



    private void referenceArray() {
        String [] names = new String[3];
        names[0] = "Aayush";
        names[1] = "Jalaj";
        names[2] = "Nitesh";

        for(int ctr =0 ; ctr < names.length; ctr++){
            System.out.println("names[" + ctr + "] = " + names[ctr]);
        }

        for(String name : names){
            System.out.println("name = " + name);
        }

       List namesList  = Arrays.asList(names);
        namesList.forEach(name -> System.out.println(name));

        namesList.forEach(System.out::println);

        //Concise and modern syntax using java 8
        System.out.println("Modern syntax : using lambda and collection.");
        Arrays.asList(names).forEach(System.out::println);
    }



    public static void main(String[] args) {
        arrays obj1=new arrays();
        obj1.primitiveArray();

        String s=new String("aayush");
        System.out.println(s);

        obj1.referenceArray();

        
    }
}




