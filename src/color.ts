export class Color {

	private red: number;
	private green: number;
	private blue: number;
	private index?: number;

	constructor(red: number, green: number, blue: number) {
		this.red = red;
		this.green = green;
		this.blue = blue;
	}

	public toString(): string {
		return JSON.stringify(this.toJson());
	};

	public toJson(): Object {
		return {
			red: this.red,
			green: this.green,
			blue: this.blue
		}
	}

}

