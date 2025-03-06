using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static program1.Section15Abstract;

namespace program1
{
    internal class Section15Abstract
    {

        public class Pizza
        {
            public List<Ingredient> ingredients = new List<Ingredient>();

            public void AddIngredient(Ingredient ingredient)
            {
                ingredients.Add(ingredient);
            }

            // runtime polymorphism
            public override string ToString()
            {
                return "Number of ingredients in this pizza is " + ingredients.Count;
            }
        }

        public abstract class Ingredient
        {
            // virtual method has a default implementation in the base class declaring it
            // abstract method does not have an implementation in the base class declaring it

            // virtual method
            // public virtual string Prepare()
            // {
            //    return "I am an ingredient";
            // }

            // abstract method
            public abstract string Prepare();

            // Virtual properties (fields cannot be virtual - properties and methods can be virtual)
            public virtual string Name { get; set; } = "Some ingredient";

            public override string ToString() => "Name of ingredient : " + Name;
        }

        // Tomato is a concrete implementation of `Ingredient`
        // If we did not override `Prepare()`, `Tomato` would be abstract as well
        public /*abstract*/ class Tomato : Ingredient
        {
            // Since `Tomato` is a concrete `Ingredient`, we must tell how it is prepared
            public override string Prepare()
            {
                return "Chop whole tomato in 1 inch squares";
            }

            public override string Name { get; set; } = "Tomato";

            public override string ToString() => base.ToString() + ". I am a cherry tomato.";
        }

        public class Cheese : Ingredient
        {
            public override string Prepare()
            {
                return "Shred into thin slices";
            }

            public override string Name { get; set; } = "Cheese";
        }


        //public static class PizzaDemo
        //{
            public static void Run()
            {
                Pizza margherita = new Pizza();

                margherita.AddIngredient(new Tomato());
                margherita.AddIngredient(new Cheese());

                Console.WriteLine(margherita.ToString());

                // Note that we are storing a reference to a `Pizza` object in a `System.Object` type
                // The below is same as `object doubleCheese = new Pizza();` as `object` is an alias for `System.Object`
                System.Object doubleCheese = new Pizza();
               ((Pizza) doubleCheese).AddIngredient(new Tomato());
               ((Pizza) doubleCheese).AddIngredient(new Cheese());

                // Which ToString() is called???
                // - System.Object (OOPFundamentals.Pizza)
                // - Pizza (Number of ingredients in this pizza is 2) 
                Console.WriteLine(doubleCheese);

                // When using "method hiding", the method called is decided at compile-time
                // So the method called depends on the type of reference used
                // here, whether we use the Pizza reference type of "System.Object" reference type

                Console.WriteLine("Ingredients of Pizza");

                // Note how ToString() methods works with virtual properties and overrides used
                foreach (var ingredient in ((Pizza)doubleCheese).ingredients)
                {
                    Console.WriteLine(ingredient);
                }
            }
        }
    }
//}
