import { Pixel } from "../pixel";
import { Color } from "../color";
const patterns = require("../config").patterns;
import { IPattern } from "./patterns.interface";

export class SolidPattern implements IPattern {
	color: Color;
	pixels: Pixel[] = [];

	constructor(color?: Color, red?: number, green?: number, blue?: number) {
		this.color = color ? color : new Color(red, green, blue);
	}

	build(): Pixel[] {
		let toBuild: Pixel[] = [];
		for (let i = 0; i < patterns.lights; i++) {
			toBuild.push(new Pixel(this.color, i));
		}
		this.pixels = toBuild;
		return toBuild;
	}

	getString(): string {
		if (!this.pixels) this.build();
		return "[" + this.pixels.map((pixel: Pixel) => {
			return pixel.getString();
		}).join(',') + "]";
	}

	getPixels(): Pixel[] {
		return this.pixels ? this.pixels : this.build();
	}
}

export class SolidRedPattern extends SolidPattern { 
	constructor() {
		super(new Color(255, 0, 0));
	}
}

export class SolidGreenPattern extends SolidPattern {
	constructor() {
		super(new Color(0, 255, 0));
	}
}
export class SolidBluePattern extends SolidPattern {
	constructor() {
		super(new Color(0, 0, 255));
	}
}