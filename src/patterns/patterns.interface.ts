import { Color } from "../color";

export interface IPattern {
	build(): Array<Color>
	get(): Array<string>
}