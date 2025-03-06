using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace program1
{
    internal class Section11MultiArray
    {
        public static void Run()
        {
            // using Multi-dimensional (here 2D) arrays
            // Note how dimensions are specified and how array is initialized
            var scores = new int[3, 4]
            {
                { 50, 60, 70, 80  },
                { 60, 70, 80, 90  },
                { 70, 80, 90, 100 },
            };

            // When initializer is provided, we can alternatively define the 2D array these ways as well
            var marks1 = new int[,]
            {
                { 50, 60, 70, 80  },
                { 60, 70, 80, 90  },
                { 70, 80, 90, 100 },
            };

            int[,] marks2 =
            {
                { 50, 60, 70, 80  },
                { 60, 70, 80, 90  },
                { 70, 80, 90, 100 },
            };

            int m = scores.GetLength(0);
            int n = scores.GetLength(1);

            Console.WriteLine(m+" "+n);

            for (int i = 0; i < m; ++i)
            {
                for (int j = 0; j < n; ++j)
                {
                    Console.Write(scores[i, j] + "  "); // Note how 2D array is accessed
                }

                Console.WriteLine();
            }

            // foreach loop goes row-by-row - foreach can be be used on implementations of the IEnumerable / IEnumerable<T> interface - like arrays, strings, collections etc.
            foreach (var score in scores)
            {
                Console.Write(score + "  ");
            }
        }
    }
}
