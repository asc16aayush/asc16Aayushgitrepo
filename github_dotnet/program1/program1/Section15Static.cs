using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace program1
{
    internal class Section15Static
    {

        public class Calculator
        {
            // Static method for addition
            public static double Add(double a, double b)
            {
                return a + b;
            }

            // Static method for subtraction
            public static double Subtract(double a, double b)
            {
                return a - b;
            }

            // Static method for multiplication
            public static double Multiply(double a, double b)
            {
                return a * b;
            }

            // Static method for division
            public static double Divide(double a, double b)
            {
                if (b == 0)
                {
                    throw new DivideByZeroException("Division by zero is not allowed.");
                }
                return a / b;
            }
        }

        public static void Run()
        {
            double result1 = Calculator.Add(5, 3);           // Output: 8
            double result2 = Calculator.Subtract(10, 4);     // Output: 6
            double result3 = Calculator.Multiply(3, 4);      // Output: 12
            double result4 = Calculator.Divide(10, 2);       // Output: 5

            Console.WriteLine(result1);
            Console.WriteLine(result2);
            Console.WriteLine(result3);
            Console.WriteLine(result4);
        }
    }
}
