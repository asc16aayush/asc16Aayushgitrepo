using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace program1
{
    internal class Exercise3
    {
        public interface INumericTransformation
        {
            int Transform(int number);
        }

        // 2. Implement the By1Incrementer class
        public class By1Incrementer : INumericTransformation
        {
            public int Transform(int number)
            {
                return number + 1;
            }
        }

        // 3. Implement the By2Multiplier class
        public class By2Multiplier : INumericTransformation
        {
            public int Transform(int number)
            {
                return number * 2;
            }
        }

        // 4. Implement the ToPowerOf2Raiser class
        public class ToPowerOf2Raiser : INumericTransformation
        {
            public int Transform(int number)
            {
                return (int)Math.Pow(number, 2); 
            }
        }

        // 5. Define the NumericTransformationsDemo class (as provided in the question)
        public static class NumericTransformationsDemo
        {
            public static int Transform(int number)
            {
                // Create a list of transformations to apply to the number
                var transformations = new List<INumericTransformation>
            {
                new By1Incrementer(),
                new By2Multiplier(),
                new ToPowerOf2Raiser()
            };

                // Apply each transformation to the number
                var result = number;
                foreach (var transformation in transformations)
                {
                    result = transformation.Transform(result);
                }
                return result;
            }
        }

            public static void Run()
        {
                int number = 3;
                int result = NumericTransformationsDemo.Transform(number);
                Console.WriteLine($"Result after transformations: {result}");

            }
    }
}
