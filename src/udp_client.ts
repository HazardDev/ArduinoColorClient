import * as dgram from "dgram";
import { Pixel } from "./pixel";
const packetTimeout = require('./config.json').general.timeout;

export class UDPClient {
	private client: dgram.Socket = dgram.createSocket('udp4');
	private port: number;
	private ipAddress: string;
	private messageQueue: Array<Pixel[]> = [];

	constructor(ipAddress: string, port: number) {
		this.port = port;
		this.ipAddress = ipAddress;
		this.send();
	}

	public send = function (): any {
		if (this.messageQueue.length !== 0) {
			let sending: Pixel[] = this.messageQueue.shift();
			
			sending.map((pixel: Pixel) => { 
				this.client.send(pixel.getString(), this.port, this.ipAddress, (err: Error, bytes: number) => {
					if (err) console.log(err);
					console.log(pixel.getString());
				});
			})
			setTimeout(() => { this.send() }, packetTimeout);
		} else {
			setTimeout(() => { this.send() }, packetTimeout);
		}
		
	}

	public queue = function (message: Pixel[]): void {
		this.messageQueue.push(message);
	}

	public clearMessageQueue = function (): void {
		this.messageQueue = [];
	}
}