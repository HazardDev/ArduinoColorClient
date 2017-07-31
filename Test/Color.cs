namespace Test
{
	class Color
	{
		private int red;
		private int green;
		private int blue;

		public Color(int red, int green, int blue)
		{
			this.red = red;
			this.green = green;
			this.blue = blue;
		}

		public string toJsonString()
		{
			return $"{{r: {this.red}, g: {this.green}, b: {this.blue}}}";
		}
	}
}


