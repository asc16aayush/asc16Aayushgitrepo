using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace program1
{
    internal class Section15StructVsClass
    {
        public class Point
        {
            public int x;
            public int y;
        }

        public struct PointStruct
        {
            public int x;
            public int y;
        }

        // A separate copy of the value is made in the stack
        // The object pointed by p is the same as in the Run() function's p
        public static  void ChangePoint(Point p)
        {
            ++p.x;
        }

        // A separate copy of the value is made in the stack
        // The object pointed by p is different from the q in the Run() function
       public static  void ChangePointStruct(PointStruct p)
        {
            ++p.x;
        }
        // A separate copy of the value passed is made in the stack as x
        public static  void ChangeInt(int x)
        {
            ++x;
        }
        public static void Run()
        {
            int x = 10;
            ChangeInt(10);
            Console.WriteLine($"x = {x}");


            // p is a reference variable created on the stack - it has the address of the new point object created on the heap
            Point p = new Point();
            p.x = 10;
            p.y = 20;
            ChangePoint(p); // p (the reference) is copied by value -> the object pointed by this p and the p in ChangePoint()
            Console.WriteLine(p.x); // this is 11

            // q is a reference variable created on the stack - it has the address of the new point object created on the stack
            PointStruct q = new PointStruct();
            q.x = 10;
            q.y = 20;
            ChangePointStruct(q); // p (the reference) is copied by value -> the object pointed by q is also copied when calling ChangePointStruct
            Console.WriteLine(q.x); // this is 10
        }
    }
}
