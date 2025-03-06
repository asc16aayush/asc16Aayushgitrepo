using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace program1
{
    internal class Section15Properties
    {

        public class Person
        {
            // properties - A public property is backed up by a private field
            private string? _name; // a secret variable used by Name's getter and setter

            public string? Name
            {
                get
                {
                    Console.WriteLine("get is called when accessing the property");

                    return _name;
                }
                set
                {
                    Console.WriteLine("set is called when we assign a value to the property");

                    if (value != null && Regex.IsMatch(value, @"^[A-Za-z][A-Za-z\s]+$"))
                    {
                        _name = value; // The assigned value is accessed using the special variable `value`
                    }
                    else
                    {
                        throw new ArgumentException("The name argument is not a valid Name");
                    }
                }
            }

            private int _age; // a secret variable used by Age's getter and setter

            public int Age
            {
                get
                {
                    return _age;
                }
                set
                {
                    _age = (value >= 0 && value <= 120) ? value : throw new ArgumentException("The age argument should be between 0 - 120");
                }
            }

            private string _city = "Bengaluru"; // normal private field. This would need getter and setter methods.

            public string getCity()
            {
                return _city;
            }

            public void setCity(string city)
            {
                _city = city;
            }
        }

        public static void Run()
        {
            var john = new Person();

            // Note that when we access the properties, the get accessor methods are executed. Yet the access syntax is like for normal fields.
            // Only Name and Age are public properties (backed up by private _name and _age fields). City is a private field and is accessed using the usual getter method.
            Console.WriteLine($"john.Name = {john.Name}, john.Age = {john.Age}, john.getCity() = {john.getCity()}");

            // set accessor methods are invoked on assignment to properties
            john.Name = "John Doe";
            john.Age = 32;

            // normal setter method
            john.setCity("Mumbai");

            Console.WriteLine($"john.Name = {john.Name}, john.Age = {john.Age}, john.getCity() = {john.getCity()}");

            try
            {
                john.Name = "John 123";
                john.Age = -32;

                Console.WriteLine($"john.Name = {john.Name}, john.Age = {john.Age}, john.getCity() = {john.getCity()}");
            }
            catch (Exception e) // it is a bad idea in general to handle only the general Exception (more on Exception handling later)
            {
                Console.WriteLine(e.Message);
            }

        }
    }
}
