import * as dgram from "dgram";
import { Color } from "./color";
import { UDPClient } from "./udp_client";
const config = require('./config.json').general;

const client = new UDPClient(config.ipAddress, config.port);


import { SolidPattern, SolidBluePattern, SolidGreenPattern, SolidRedPattern } from "./patterns/solid_colors";

client.send(new SolidBluePattern().getString());
client.send(new SolidGreenPattern().getString());
client.send(new SolidRedPattern().getString());
client.send(new SolidPattern(new Color(255, 255, 255)).getString());