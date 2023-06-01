using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace Shirt_example
{
    class Program
    {
        static string[] colorOptions = { "green", "red", "pink", "blue" };
        static string[] patternOptions = { "polka dot", "striped", "checkerd", "zig zag" };
        //static int count  = 0; 
        
        static void Main(string[] args)
        {
            //colors colors1 = new colors();
            //patterns patterns1 = new patterns();
           //generateShirts();
            generateShirts2();


        }
        //option #1
        static void generateShirts()
        {
            int count = 0;
          
            foreach (var item in colorOptions)
            {
                foreach (var pattern in patternOptions)
                {
                    Console.WriteLine($"shirt{count+1}: {item} {pattern}");
                    count++;
                    
                }
            }

            Console.WriteLine();
            Console.WriteLine($"total shirts combos: {count}");
            
        }

        static void generateShirts2()
        {
            int count = 0;
            List<shirt> shirts = new List<shirt>();
            foreach (var item in colorOptions)
            {
                foreach (var pattern in patternOptions)
                {
                    shirts.Add(new shirt(item, pattern));
                    Console.WriteLine($"shirt{count+1}  {shirts[count]}");
                    count++;
                    //shirt[] shirts = new shirt[count]; //each shirt should get this info how?
                }
            }

            Console.WriteLine();
            Console.WriteLine($"total shirts combos: {count}");

        }
    }

}