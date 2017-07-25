import { Color } from "../color";
import { Pixel } from "../pixel";
const patterns = require("../config").patterns;
import { IPattern } from "./patterns.interface";

export class AnarchyPattern implements IPattern {
	pixels: Pixel[] = [];

	constructor() { }

	build(): Pixel[] {
		let toBuild: Pixel[] = [];

		for (let i = 0; i < patterns.lights; i++) {
			toBuild.push(new Pixel(new Color(this.genRandNum(), this.genRandNum(), this.genRandNum()), i));
		}
		this.pixels = toBuild;
		return toBuild;
	}

	getString(): string {
		return "[" + this.build().map((pixel: Pixel) => {
			return pixel.getString();
		}).join(',') + "]";
	}

	getPixels(): Pixel[] {
		return this.pixels ? this.pixels : this.build();
	}

	private genRandNum(): number {
		return Math.floor(Math.random() * 127) + 1;
	}
}
