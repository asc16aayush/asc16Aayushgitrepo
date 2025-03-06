using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace program1
{
    internal class Section6Nullable
    {
        public static void Run()
        {
            Console.WriteLine("type any number");
            // nullable types (?)
            string? x = Console.ReadLine();

            // All() method of LINQ and char.IsDigit()
            if (x == null || !x.All(char.IsDigit))
            {
                Console.WriteLine("Invalid input");
                Environment.Exit(1);
            }
            else
            {
                // string is an alias of System.String
                string thanks = $"Thanks for the input!  your number is {x}";
                Console.WriteLine(thanks);
            }
        }
    }
}
