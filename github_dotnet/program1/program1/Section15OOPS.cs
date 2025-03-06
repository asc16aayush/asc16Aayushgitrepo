using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace program1
{
    internal class Section15OOPS
    {

        public class Person
        {
            // public fields are not preferred
            public string Name; // defaults to null (in fact for any object)
            public int Age; // defaults to 0
            public string City = "Bengaluru"; // initial value may be assigned (but this is usually done in the constructor as value is usually different for different objects)
        }

        public static void Run()
        {
            var john = new Person();

            Console.WriteLine($"john.Name = {john.Name}, john.Age = {john.Age}, john.City = {john.City}");

            john.Name = "John Doe";
            john.Age = 32;
            john.City = "Mumbai";

            Console.WriteLine($"john.Name = {john.Name}, john.Age = {john.Age}, john.City = {john.City}");


            var johnyy = new Person
            {
                Name = "Johnyy Doe",
                Age = 42,
                City = "Mumbai"
            };

            Console.WriteLine($"johnyy.Name = {johnyy.Name}, johnyy.Age = {johnyy.Age}, johnyy.City = {johnyy.City}");
        }
    }
}
