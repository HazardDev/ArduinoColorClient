import { Color } from "../color";

export interface IPattern {
	build(): Color[]
	getString(): string
}