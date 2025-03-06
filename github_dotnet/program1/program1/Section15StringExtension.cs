using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace program1
{
    //internal class Section15StringExtension
    //{
        public static class StringExtensions
        {
            public static int CountLines(this string str)
            {
                return str.Split('\n').Length;
            }
            public static int CountWords(this string str)
            {
                return str.Split(new char[] { ' ', '\n', '\t' }).Length;
            }

        public static void Run()
        {
            Console.Clear();

            var str = "Hello world\nHow are you?";

            // We have built-in methods like Split for string. Can we create our own extension methods?
            // str.Split(","); // { "hello", "world" }

            Console.WriteLine("Number of lines = " + str.CountLines());
            Console.WriteLine("Number of words = " + str.CountWords());

            Console.ReadKey();
        }
        }


    }
//}
