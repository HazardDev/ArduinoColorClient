import * as dgram from "dgram";
import { Color } from "./color";
import { UDPClient } from "./udp_client";
const config = require('./config.json').general;

const client = new UDPClient(config.ipAddress, config.port);


import { Solid, SolidBlue, SolidGreen, SolidRed } from "./patterns/solid_colors";

client.send(new SolidBlue().getString());
client.send(new SolidGreen().getString());
client.send(new SolidRed().getString());
client.send(new Solid(new Color(255, 255, 255)).getString());