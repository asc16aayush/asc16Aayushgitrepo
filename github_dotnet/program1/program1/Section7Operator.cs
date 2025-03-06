using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace program1
{
    internal class Section7Operator
    {
        public static void Run()
        {
            Console.WriteLine(1 + 2);
            Console.WriteLine(1 * 2);
            Console.WriteLine(5 / 2); // quotient (int 2)
            Console.WriteLine(5 % 2); // remainder (int 1)


            Console.WriteLine(1 < 2);
            Console.WriteLine(1 <= 2);
            Console.WriteLine(1 > 2); // false
            Console.WriteLine(1 + 1 == 2);
            Console.WriteLine(1 + 1 != 2); // false
            Console.WriteLine(1 < 2 ? "1 is less than 2" : "1 is not less than 2");


            Console.WriteLine(1 < 2 && 2 < 3); // works by short-circuiting - if LHS operand is false, RHS wont be evaluated
            Console.WriteLine(1 < 2 || 3 < 2); // works by short-circuiting - if LHS operand is true, RHS wont be evaluated

            Console.WriteLine(!false);


            string? x = Console.ReadLine();

            // All() method of LINQ and char.IsDigit()
            if (x == null || !x.All(char.IsDigit)) // if not for short-circuting, this line would throw and exception when x is null
            {
                Console.WriteLine("Invalid input");
                Environment.Exit(1);
            }
            else
            {
                // string is an alias of System.String
                string thanks = "Thanks for the input!";
                Console.WriteLine(thanks);
            }
        }
    }
}
