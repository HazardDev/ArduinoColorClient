"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Color {
    constructor(red, green, blue) {
        this.toJsonString = function () {
            return `{'red': ${this.red}, 'green': ${this.green}, 'blue': ${this.blue} }`;
        };
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
}
exports.Color = Color;
//# sourceMappingURL=color.js.map