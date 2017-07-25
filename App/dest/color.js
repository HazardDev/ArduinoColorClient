"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Color {
    constructor(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
    toString() {
        return JSON.stringify(this.toJson());
    }
    ;
    toJson() {
        return {
            r: this.red,
            g: this.green,
            b: this.blue
        };
    }
}
exports.Color = Color;
//# sourceMappingURL=color.js.map