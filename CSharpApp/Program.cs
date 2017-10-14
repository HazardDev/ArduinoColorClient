using System;

namespace CSharpApp
{
    class Program
    {
        static void Main(string[] args)
        {
			Random rand = new Random();
			for (int i = 0; i < 100; i++) {
				Color aColor = new Color(rand.Next(255), rand.Next(255), rand.Next(255));
				Console.ForegroundColor = ConsoleColor.DarkMagenta;
				Console.WriteLine(new Pixel(aColor, i).ToString());
			}
		}
    }
}
