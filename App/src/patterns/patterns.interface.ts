import { Pixel } from "../pixel";

export interface IPattern {
	build(): Pixel[]
	getString(): string
	getPixels(): Pixel[]
}