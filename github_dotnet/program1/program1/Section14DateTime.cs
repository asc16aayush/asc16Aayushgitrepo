using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace program1
{
    internal class Section14DateTime
    {
        public static void Run()
        {
            // working with DateTime
            var today = DateTime.Now;
            var independenceDay = new DateTime(1947, 8, 15, 0, 0, 0, DateTimeKind.Local);

            // Add*() returns a new DateTime object with the required changes
            var independenceDay77YearsLater = independenceDay.AddYears(77);

            Console.WriteLine(today);
            Console.WriteLine(independenceDay);
            Console.WriteLine(independenceDay77YearsLater);
            Console.WriteLine(today.DayOfWeek);
        }
    }
}
