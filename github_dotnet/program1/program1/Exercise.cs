using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace program1
{
    internal class Exercise
    {
        public static string FindShortestWord(List<string> words)
        {
            string str1="";
            try
            {
                if (words.Count > 0 )
                {
                    str1 = words[0];

                    foreach (string word in words)
                    {
                        if (word.Length < str1.Length )
                        {
                            str1= word;
                        }

                    }
                }
            }
            catch (Exception ex)
            {
                str1 = "not any words";

            }

            return str1;
        }
        public static void Run()
        {
            List<string> list = new List<string>();
            
            Console.WriteLine("enter the number of words you want to enter");
            int x = int.Parse(Console.ReadLine());
            while (x <1) {

                Console.WriteLine("enetr a valid positive integer");
                x = int.Parse(Console.ReadLine());
            }

            Console.WriteLine($"enter {x} words");
            for (int i = 0; i < x; i++)
            {
                list.Add(Console.ReadLine());
            }

            string str=FindShortestWord(list);
            Console.WriteLine();
            Console.WriteLine($"the shortest word in the list is : {str}");
            //Console.WriteLine(str);

        }

    }
}
