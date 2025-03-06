using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace program1
{
    internal class Section15Constructor
    {
        public class Person
        {
            public string? Name { get; set; } // Auto-implemented property for Name
            public int Age { get; set; }      // Auto-implemented property for Age
            public string City { get; set; } = "Bengaluru"; // Auto-implemented property with default value

            // Constructor 1: Takes Name, Age, and City
            public Person(string name, int age, string? city)
            {
                Name = name;
                Age = age;

                if (city != null)
                {
                    City = city;
                }
            }

            // Constructor 2: Takes Name and Age, calls Constructor 1 with null for City
            public Person(string name, int age) : this(name, age, null)
            {
            }

            // Constructor 3: Takes no arguments, calls Constructor 1 with default values
            public Person() : this("Unknown", 0, null)
            {
            }
        }
        public static void Run()
        {
            // Constructor 1
            var person1 = new Person("John Doe", 32, "Mumbai");
            Console.WriteLine($"Name: {person1.Name}, Age: {person1.Age}, City: {person1.City}");

            // Constructor 2
            var person2 = new Person("Jane Doe", 28, "Bengaluru");
            Console.WriteLine($"Name: {person2.Name}, Age: {person2.Age}, City: {person2.City}");

            // Constructor 3
            var person3 = new Person();
            Console.WriteLine($"Name: {person3.Name}, Age: {person3.Age}, City: {person3.City}");
        }
    }
}
