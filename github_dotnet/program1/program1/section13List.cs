using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace program1
{
    internal class section13List
    {
        public static void Run()
        {
            var names = new List<string>();

            names.Add("John");
            names.Add("Jane");
            names.Add("Mark");
            names.Add("Mary");

            // List is enumerable - foreach can be used
            foreach (var item in names)
            {
                Console.WriteLine(item);
            }


            // alternative way to display items
                Console.WriteLine(string.Join(", ", names));

            // list initializer
            var primes = new List<int>() { 2, 3, 5 };
            var morePrimes = new List<int>() { 7, 11, 13 };

            // size can be queried using the `Count` property
            Console.WriteLine(names.Count);

            Console.WriteLine("names.Contains(\"Jane\") - " + names.Contains("Jane"));
            Console.WriteLine("names.Contains(\"David\") - " + names.Contains("David"));

            // you can find the index of an item (return -1 if item does not exist in the list)
            Console.WriteLine("names.IndexOf(\"Jane\") - " + names.IndexOf("Jane"));
            Console.WriteLine("names.IndexOf(\"David\") - " + names.IndexOf("David"));

            names.Remove("Jane");
            Console.WriteLine("names.Contains(\"Jane\") - " + names.Contains("Jane"));

            names.RemoveAt(0);
            Console.WriteLine("names.Contains(\"John\") - " + names.Contains("John"));

            // you can index into a list (just like array)
            Console.WriteLine("names[0] = " + names[0]);
            Console.WriteLine("names[1] = " + names[1]);

            names[0] = "John Doe";
            names[1] = "Mark Smith";

            Console.WriteLine("names[0] = " + names[0]);
            Console.WriteLine("names[1] = " + names[1]);

            primes.AddRange(morePrimes);
            Console.WriteLine("After adding more primes - " + string.Join(", ", primes));



        }
    }
}
