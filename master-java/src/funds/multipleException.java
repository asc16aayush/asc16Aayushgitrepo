package funds;

import java.util.Scanner;

public class multipleException {
    public static void main(String[] args) {
        int n1 = 0;
        int n2 = 100;
        int val[] = { 10, 20, 30 };
        try (Scanner sc = new Scanner(System.in)) {
            System.out.println("enter n1");
            String n1str = sc.nextLine();
            n1 = Integer.parseInt(n1str);
            System.err.println(n1 / n2);
            System.err.println(val[5]);
        } catch (NumberFormatException numberFormatException) {
            System.err.println("Invalid number for number");
        } catch (ArithmeticException arithmeticException) {
            System.err.println("cannt divide by 0");
        }
        catch (Throwable ex) {
            System.err.println("All exception (which are not handled above)");
            System.err.println(ex);

        }
    }
}
