

namespace CSharpApp
{

	class Pixel
	{
		public Color color { get; }
		public int index { get; }

		public Pixel(Color color, int index)
		{
			this.color = color;
			this.index = index;
		}

		public override string ToString()
		{

			return $"Pixel - Index: {this.index} --- {this.color.ToString()}";

		}

	}


}