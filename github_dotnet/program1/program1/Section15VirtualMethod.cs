using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace program1
{
    internal class Section15VirtualMethod
    {

        public class NumbersAdder
        {
            public int AddNumbers(int[] numbers)
            {
                int sum = 0;

                foreach (var num in numbers)
                {
                    if (Filter(num))
                    {
                        sum += num;
                    }
                }

                return sum;
            }

            public virtual bool Filter(int num)
            {
                return true;
            }
        }

        public class EvenNumbersAdder : NumbersAdder
        {
            public override bool Filter(int num)
            {
                return num % 2 == 0;
            }
        }

        public class MultipleOfThreeAdder : NumbersAdder
        {
            public override bool Filter(int num)
            {
                return num % 3 == 0;
            }
        }
        public static void Run()
        {
            
            Console.Clear();

            var adder1 = new NumbersAdder();
            var adder2 = new EvenNumbersAdder();
            //var adder3 = new OddNumbersAdder();

            var nums = new int[] { 1, 2, 4, 5, 7, 9, 34, 35, 32, 12, 6, 87, 98 };

            int sum1 = adder1.AddNumbers(nums);
            int sum2 = adder2.AddNumbers(nums);
            //int sum3 = adder3.AddNumbers(numbers);

            Console.WriteLine(sum1);
            Console.WriteLine(sum2);
            //Console.WriteLine(sum3);

            Console.ReadKey();
        }
    }
}
