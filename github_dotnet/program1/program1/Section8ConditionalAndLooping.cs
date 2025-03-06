using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace program1
{
    internal class Section8ConditionalAndLooping
    {
        public static void Run()
        {
            //if Else
            var city = "Bengaluru";

            if (city == "Mumbai")
            {
                Console.WriteLine("Gateway of India");
            }
            else if (city == "New Delhi")
            {
                Console.WriteLine("India gate");
            }
            else if (city == "Bengaluru")
            {
                Console.WriteLine("Vidhana Soudha");
            }
            else
            {
                Console.WriteLine("I don't know");
            }


            //Switch case
            city = "Bombay";

            switch (city)
            {
                case "Bombay":
                    Console.WriteLine("Now called Mumbai");

                    // If you handle a case it will not automatically fall through to the next case in case of a missing break statement
                    // Use `break` to break out
                    // or,
                    // Use `goto case "case"` to fallthrough to a different case
                    goto case "Mumbai";
                case "Mumbai":
                    Console.WriteLine("Gateway of India");
                    break;
                case "New Delhi":
                    Console.WriteLine("India gate");
                    break;
                case "Bangalore": // no break and no statements handling this case - so falls through automatically
                case "Bengaluru":
                    Console.WriteLine("Vidhana");
                    break;
                default:
                    Console.WriteLine("I don't know");
                    break;
            }


            //for (int j = 0; j < 10; ++j)
            //{
            //    Console.Write(j + ", ");
            //}

            //int i = 0;

            //while (i < 10)
            //{
            //    Console.Write(i + ", ");
            //    ++i;
            //}

            int z = 1;
            do
            {
                Console.WriteLine(z);
                z++;
            }while (z < 10);
        }
    }
}
