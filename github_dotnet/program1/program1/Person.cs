using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace program1;

internal class Person
{
    public string Name;
    public int Age;
    public Person(string name,int age) 
    {
        Name = name;
        Age = age;

    }

    public override string ToString()
    {
        //return "Name = " + Name + ", Age = "+ Age;

        return $"Name = {Name} , Age = {Age}";
    }

    public static void Run() { }

}
