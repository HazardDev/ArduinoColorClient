export class Color {

	private red: number;
	private green: number;
	private blue: number;

	constructor(red, green, blue) {
		this.red = red;
		this.green = green;
		this.blue = blue;
	}

	public toJsonString = function (): string {
		return `{'red': ${this.red}, 'green': ${this.green}, 'blue': ${this.blue} }`;
	};

}

