import { Color } from "../color";
const patterns = require("../config").patterns;
import { IPattern } from "./patterns.interface";

export class SolidPattern implements IPattern {
	color: Color;

	constructor(color?: Color, red?: number, green?: number, blue?: number) {
		this.color = color ? color : new Color(red, green, blue);
	}

	build(): Color[] {
		let toBuild: Color[] = [];

		for (let i = 0; i < patterns.lights; i++) {
			toBuild.push(this.color);

		}

		return toBuild;
	}

	getString(): string {
		return "[" + this.build().map((index: Color) => {
			return index.toJsonString();
		}).join(',') + "]";
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