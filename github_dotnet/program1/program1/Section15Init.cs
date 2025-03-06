using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace program1
{
    
    internal class Section15Init
    {
        public class Person
        {

            //Init is used to make PROPERTY 'immutable' after it is initialized 

            public string? Name { get; init; } // Auto-implemented property with init accessor
            public int Age { get; init; }      // Auto-implemented property with init accessor
            public string City { get; init; } = "Bengaluru"; // Default value with init accessor

           //public  Person() {
           //     Name = "aayush";
           //     Age = 43;
           //     City = "kolkata";
           // }
        }

        public static void Run()
        {
            var person = new Person
            {
                Name = "John Doe",
                Age = 32,
                City = "Mumbai"
            };

            Console.WriteLine($"Name: {person.Name}, Age: {person.Age}, City: {person.City}");
        }
    }
}
