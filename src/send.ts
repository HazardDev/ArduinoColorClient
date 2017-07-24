import * as dgram from "dgram";

export class UDPClient {
	private client: dgram.Socket = dgram.createSocket('udp4');
	private port: number;
	private ipAddress: string;

	constructor(ipAddress: string, port: number) {
		this.port = port;
		this.ipAddress = ipAddress;
	}

	public send = function (message: string): any {
		this.client.send(Buffer.from(message), this.port, this.ipAddress, (err: Error, bytes: number) => {
			if (err) throw err;
		});
	}
}