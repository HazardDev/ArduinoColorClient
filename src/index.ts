import * as dgram from "dgram";
import { Color } from "./color";
import { UDPClient } from "./udp_client";
const config = require('./config.json').general;

const client = new UDPClient(config.ipAddress, config.port);
