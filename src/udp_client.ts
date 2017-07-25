import * as dgram from "dgram";
const packetTimeout = require('./config.json').general.timeout;

export class UDPClient {
	private client: dgram.Socket = dgram.createSocket('udp4');
	private port: number;
	private ipAddress: string;
	private messageQueue: Array<string> = [];

	constructor(ipAddress: string, port: number) {
		this.port = port;
		this.ipAddress = ipAddress;
		this.send();
	}

	public send = function (): any {
		if (this.messageQueue.length !== 0) {
			this.client.send(this.messageQueue[0], this.port, this.ipAddress, (err: Error, bytes: number) => {
				if (err) console.log(err);
				console.log(this.messageQueue.shift());
				setTimeout(() => { this.send() }, packetTimeout);
			});
		} else {
			setTimeout(() => { this.send() }, packetTimeout);
		}
		
	}

	public queue = function (message: string): void {
		this.messageQueue.push(message);
	}

	public clearMessageQueue = function (): void {
		this.messageQueue = [];
	}
}