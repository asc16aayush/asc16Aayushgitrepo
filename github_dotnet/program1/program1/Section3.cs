using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//namespace program1;
namespace demo;
internal class Section3
{

public static void Run()
    {
        int _number = 100;

        int @int = 1000; //using @ we can use a keyword as a variable name

        var x = 150; // if we use var-type then it must be initiallised as that point only

        Console.WriteLine($"x= {x}");
        Console.WriteLine($"DataType of x -> x.GetType() = {x.GetType()}");

        char exit = 'E';
        Console.WriteLine($"exit = {exit}");

        decimal cost = 2.50m;
        Console.WriteLine($"cost = {cost}");

        Console.WriteLine(0.1 + 0.2);
        Console.WriteLine(0.1m + 0.2m);

        int num = 10;
        decimal numDecimal = num;
        Console.WriteLine(numDecimal);

        num = (int)numDecimal;
        Console.WriteLine(num);
    }
    }


