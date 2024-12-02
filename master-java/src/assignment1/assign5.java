package assignment1;

public class assign5 {
    public static void main(String[] args) {
        String s="Aayush is a very nice and good person";
        String s1="Aayush Raj";
        String s2="aAyush rAj";

        System.out.println(s.charAt(5));
        System.out.println(s.contains("aayush"));
        System.out.println(s.length());
        System.out.println(s.indexOf('s'));
        System.out.println(s.equals(s1));
        System.out.println(s1.equalsIgnoreCase(s2));
        System.out.println(String.join("s1 ","ral","aayush"));
        System.out.println(s.substring(5,11));
        System.out.println(s1.toLowerCase());
        System.out.println(s.trim());

    }

    
}