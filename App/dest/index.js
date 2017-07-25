"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const udp_client_1 = require("./udp_client");
const config = require('./config.json').general;
const client = new udp_client_1.UDPClient(config.ipAddress, config.port);
const solid_colors_1 = require("./patterns/solid_colors");
//client.queue(new SolidBluePattern().getPixels());
const pixelList = new solid_colors_1.SolidBluePattern().getPixels();
client.queue(pixelList);
// client.queue(new SolidGreenPattern().getPixels());
//client.queue(new SolidRedPattern().getPixels());
// client.queue(new SolidPattern(new Color(255, 255, 255)).getPixels()); 
//# sourceMappingURL=index.js.map