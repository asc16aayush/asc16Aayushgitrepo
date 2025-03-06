using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace program1
{
    internal class Section12OutParameters
    {

        public static int[] FindMinMax(int[,] input)
        {

            

            int min=input[0,0];
            int max = input[0, 0];

            foreach (var item in input)
            {
                if (item < min)
                {
                    min = item;
                }

                if (item > min)
                {
                    max = item;
                }
            }


            return new int[] { min, max };
        }

        public static void Run()
        {
            var scores = new int[3, 4]
            {
                { 50, 60, 70, 80  },
                { 60, 70, 80, 90  },
                { 70, 80, 90, 100 },
            };

            var result=FindMinMax(scores);
            foreach (var item in result)
            {
                Console.WriteLine(item);   
            }

        }
    }
}
