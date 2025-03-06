using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace program1
{
    internal class Section10Array
    {
        public static void Run()
        {
            int[] primes = new int[10];

            primes[0] = 2;
            primes[1] = 3;
            primes[2] = 5;

            // Length of array
            Console.WriteLine(primes.Length);

            Console.WriteLine(string.Join(", ",primes));


            // with initializer
            string[] names = new string[]
            {
                     "John",
                     "Jane",
                     "Mark",
                     "Mary"
            };

            names[0] = "John Doe";

            // we can omit data type on one of the sides
            string[] students1 = { "John", "Jane", "Mark", "Mary" };
            var students2 = new[] { "John", "Jane", "Mark", "Mary" };

            // iteration using for loop
            for (int i = 0; i < names.Length; ++i)
            {
                Console.WriteLine(names[i]);
            }

            // foreach works with "iterables"
            // array is an iterable
            foreach (var prime in primes)
            {
                Console.WriteLine(prime);
            }

            // Aside: string is an iterable as well (we get characters in the string)
            foreach (var letter in "Hello")
            {
                Console.WriteLine(letter);
            }

            // nice way to display the items in an iterable (eg. items in an array, letters in a string etc.)
            // string.Join(delimiter, iterable)
            Console.WriteLine(string.Join(", ", names)); // "John Doe, Jane, Mark, Mary"

            // access from the end
            Console.WriteLine(names[^1]); // 1-based index for accessing from the end

            // get range of array items - includes start index item, excludes end index item
            var someNames = names[1..3]; // { "Jane", "Mark" }
            Console.WriteLine(string.Join(", ", someNames));

        }
    }
}
