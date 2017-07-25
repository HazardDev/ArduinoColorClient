import { Color } from "./color"

export class Pixel {
	private color: Color
	private index: number
	
	constructor(color: Color, index: number) {
		this.color = color;
		this.index = index;
	}

	public getColor(): Color {
		return this.color;
	}

	public getIndex(): number {
		return this.index;
	}

	public toJson(): Object {
		return {
			index: this.index,
			data: this.color.toJson()
		}
	}
	public getString(): string {
		return JSON.stringify(this.toJson());
	}
}