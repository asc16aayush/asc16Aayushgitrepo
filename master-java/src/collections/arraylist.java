package collections;

import java.util.ArrayList;
import java.util.List;

public class arraylist {
    public static void main(String[] args) {
        List<String> l1=new ArrayList<>();

        // l1.add(25);
        // l1.add("blue");
        // l1.add(true);
        // int x=9;
        // Integer xToInteger=new Integer(x);
        // l1.add(xToInteger);
        // l1.remove(3);
        // System.out.println(l1);

        l1.add("blue");
        l1.add("red");
        l1.add("green");
        l1.add("yellow");
        l1.add("purple");
        l1.add("black");
        l1.add("blue");

        l1.remove(3);

        System.out.println(l1.get(3));
        System.out.println("----------------");
        System.out.println(l1);
        System.out.println(l1.size());
        System.out.println(l1.contains("yellow"));
        System.out.println(l1.lastIndexOf("blue"));
        System.out.println(l1.indexOf("blue"));
        System.out.println(l1.isEmpty());
        l1.clear();
        System.out.println(l1.isEmpty());

        

    }
}
