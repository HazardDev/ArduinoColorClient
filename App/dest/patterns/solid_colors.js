"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pixel_1 = require("../pixel");
const color_1 = require("../color");
const patterns = require("../config").patterns;
class SolidPattern {
    constructor(color, red, green, blue) {
        this.pixels = [];
        this.color = color ? color : new color_1.Color(red, green, blue);
        this.build();
    }
    build() {
        let toBuild = [];
        for (let i = 0; i < patterns.lights; i++) {
            toBuild.push(new pixel_1.Pixel(this.color, i));
        }
        this.pixels = toBuild;
        return toBuild;
    }
    getString() {
        if (!this.pixels)
            this.build();
        return "[" + this.pixels.map((pixel) => {
            return pixel.getString();
        }).join(',') + "]";
    }
    getPixels() {
        if (!this.pixels)
            this.build();
        return this.pixels;
    }
}
exports.SolidPattern = SolidPattern;
class SolidRedPattern extends SolidPattern {
    constructor() {
        super(new color_1.Color(255, 0, 0));
    }
}
exports.SolidRedPattern = SolidRedPattern;
class SolidGreenPattern extends SolidPattern {
    constructor() {
        super(new color_1.Color(0, 255, 0));
    }
}
exports.SolidGreenPattern = SolidGreenPattern;
class SolidBluePattern extends SolidPattern {
    constructor() {
        super(new color_1.Color(0, 0, 255));
    }
}
exports.SolidBluePattern = SolidBluePattern;
//# sourceMappingURL=solid_colors.js.map