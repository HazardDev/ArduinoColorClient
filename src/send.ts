import * as dgram from "dgram";
import { Color } from "./color";

const message: Buffer = Buffer.from("A string");
const client: dgram.Socket = dgram.createSocket("udp4");
const port: number = 11135;
const ipAddress: string = "192.168.1.177";

for (let i = 0; i < 100; i++) {
	client.send(message, port, ipAddress, (error: Error, bytes: number) => {
		if (error)
			console.log(error);
		console.log("Sent: " + message);
	});
}