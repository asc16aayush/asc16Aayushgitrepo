package collections;
import java.util.*;

public class Hash_Map_Demo {
    public static void main(String[] args)
    {

        // Creating an empty HashMap
        HashMap<String, Integer> hash_map = new HashMap<String, Integer>();

        // Mapping int values to string keys
        hash_map.put("Geek", 11);
        hash_map.put("4", 15);
        hash_map.put("Geeks", 20);
        hash_map.put("Welcomes", 10);
        hash_map.put("You", 30);

        // Displaying the HashMap
        System.out.println("Initial Mappings are: " + hash_map);

        // Getting the value of "Geeks"
        System.out.println("The Value is: " + hash_map.get("Geeks"));

        // Getting the value of "You"
        System.out.println("The Value is: " + hash_map.get("You"));

        
    }
}
