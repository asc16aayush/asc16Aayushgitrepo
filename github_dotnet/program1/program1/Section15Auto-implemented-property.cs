using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace program1
{
    internal class Section15Auto_implemented_property
    {
        public class Person
        {
            public string? Name { get; set; } // Auto-implemented property for Name
            public int Age { get; private set; } // Auto-implemented property for Age
            public string City { get; set; } = "Bengaluru"; // Auto-implemented property with default value
        }
        public static void Run()
        {
            var person = new Person
            {
                Name = "John Doe",
                // Age = 32, // cannot be set using the object initializer syntax as it has a private set accessor
                City = "Mumbai"
            };

            Console.WriteLine($"Name: {person.Name}, Age: {person.Age}, City: {person.City}");
        }
    }
}
