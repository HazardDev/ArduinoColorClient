"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pixel {
    constructor(color, index) {
        this.color = color;
        this.index = index;
    }
    getColor() {
        return this.color;
    }
    getIndex() {
        return this.index;
    }
    toJson() {
        var colorJson = this.color.toJson();
        colorJson.i = this.index;
        return colorJson;
    }
    getString() {
        return JSON.stringify(this.toJson());
    }
}
exports.Pixel = Pixel;
//# sourceMappingURL=pixel.js.map