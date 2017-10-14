using System;

namespace CSharpApp
{
	class Color
	{
		public int red { get; }
		public int green { get; }
		public int blue { get; }
		public double alpha { get; }

		public Color(int red, int green, int blue, double alpha = 1)
		{
			this.red = red;
			this.green = green;
			this.blue = blue;
			this.alpha = alpha;
		}

		public Color(System.Drawing.Color theColor) : this(theColor.R, theColor.G, theColor.B, theColor.A) { }

		public override string ToString()
		{
			return $"Color - R: {this.red} G: {this.green} B: {this.blue}";
		}

		public System.Drawing.Color ToDrawingColor() {
			return System.Drawing.Color.FromArgb(this.red, this.green, this.blue);
		}
	}
}