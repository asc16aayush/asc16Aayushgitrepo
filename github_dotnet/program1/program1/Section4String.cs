using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace program1;

internal class Section4String
{
    public static void Run()
    {
        string str1 = "aayush";
        string str2 = "aayush";

        Console.WriteLine(str1==str2);

        string message = "Hello, World!";
        int length = message.Length;
        char character = message[7]; // Index starts from 0

        Console.WriteLine($"The length of the string is: {length}");
        Console.WriteLine($"The character at index 7 is: {character}");

        string[] words = message.Split('l');

        foreach (var word in words)
        {
            Console.WriteLine(word);
        }
       

        Console.WriteLine(  message.ToLower());
        Console.WriteLine(message.Substring(2, 5));

        //string for multiple line 
        string multiLineString = @"
            This is a multiline string.
                It preserves formatting
                     including leading spaces and tabs.";
        Console.WriteLine(multiLineString);

        //string interpolation with multiple lineString
        int value = 42;
        string report = $@"
            Report Summary:
            ---------------
                Value: {value}
                Date: {DateTime.Now}
                    ";
        Console.WriteLine(report);

        //parse + try catch

        // try + Tab + Tab
        try
        {
            string quantityOfBooks = "150", priceOfBook = "2.50", taxPercentage = "0.05abc";

            int quantityOfBooksInt = int.Parse(quantityOfBooks);
            float priceOfBookFloat = float.Parse(priceOfBook);
            Console.WriteLine(quantityOfBooksInt);
            Console.WriteLine(priceOfBookFloat);

            decimal q = decimal.Parse(priceOfBook);
            Console.WriteLine(q);

            float taxPercentageFloat = float.Parse(taxPercentage);
            Console.WriteLine($"Total price of books = {quantityOfBooksInt * priceOfBookFloat * (1 + taxPercentageFloat)}");
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }

    }
}
