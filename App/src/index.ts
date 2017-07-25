import * as dgram from "dgram";
import { Color } from "./color";
import { UDPClient } from "./udp_client";
const config = require('./config.json').general;

const client = new UDPClient(config.ipAddress, config.port);

import { SolidPattern, SolidBluePattern, SolidGreenPattern, SolidRedPattern } from "./patterns/solid_colors";
import { AnarchyPattern } from "./patterns/anarchy";


client.queue(new SolidBluePattern().getPixels());
client.queue(new SolidGreenPattern().getPixels());
client.queue(new SolidRedPattern().getPixels());
client.queue(new SolidPattern(new Color(255, 255, 255)).getPixels());
client.queue(new AnarchyPattern().getPixels());
