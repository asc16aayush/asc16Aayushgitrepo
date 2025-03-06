using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace program1
{
    internal class Exercise2
    {
        public class Person
        {
            private string fname;
            private string mname;
            private string lname;

            public string Fname
            {
                get { return fname; }
                set{ fname = value; }
        }
            public string Mname
            {
                get { return mname; }
                set { mname = value; }
            }
            public string Lname
            {
                get { return lname; }
                set { lname = value; }
            }
            public Person(string fname, string mname, string lname)
            {
                this.fname = fname;
                this.mname = mname;
                this.lname = lname;
            }


            public string Fullname
            {
                get { return $"full_name is : {fname}, {mname}, {lname}"; }
            }

            public string OfficialFullname
            {
                get { return $"official_name is : {lname}, {fname}, {mname}"; }
            }

        }
        public static void Run()
        {

            Person p1 = new Person("john", "Deo", "De");
            Console.WriteLine(p1.Fullname);
            Console.WriteLine(p1.OfficialFullname);

        }
    }
}

