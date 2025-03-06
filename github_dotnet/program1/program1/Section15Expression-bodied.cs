using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace program1
{
    internal class Section15Expression_bodied
    {
        public class Person
        {
            private string? _name;

            public string? Name
            {
                get => _name;
                set => _name = value != null && Regex.IsMatch(value, @"^[A-Za-z][A-Za-z\s]+$") ? value : throw new ArgumentException("The name argument is not a valid Name");
            }

            private int _age; // a secret variable used by Age's getter and setter

            public int Age
            {
                get => _age;
                set => _age = (value >= 0 && value <= 120) ? value : throw new ArgumentException("The age argument should be between 0 - 120");
            }

            private string _city = "Bengaluru"; // normal private field. This would need getter and setter methods.

            public string getCity() => _city;

            public void setCity(string city) => _city = city;
        }
        public static void Run()
        {
            var john = new Person
            {
                Name = "John Doe",
                // Age = 32, // Age cannot be set through outside the class - specifically, it cannot be used in the object initializer syntax
                // _city = "Mumbai" // _city is private and cannot be set
            };

            Console.WriteLine($"john.Name = {john.Name}, john.Age = {john.Age}, john.getCity() = {john.getCity()}");
        }
    }
}
