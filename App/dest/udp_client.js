"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dgramAsPromised = require("dgram-as-promised");
const packetTimeout = require('./config.json').general.timeout;
class UDPClient {
    constructor(ipAddress, port) {
        this.socket = dgramAsPromised.createSocket('udp4');
        this.messageQueue = [];
        this.clearMessageQueue = function () {
            this.messageQueue = [];
        };
        this.port = port;
        this.ipAddress = ipAddress;
        this.send();
    }
    async send() {
        if (!this.messageQueue || this.messageQueue.length === 0) {
            setTimeout(() => { this.send(); }, packetTimeout);
            return;
        }
        let sending = this.messageQueue.shift();
        for (let i = 0; i < sending.length; i++) {
            let theResponse = await this.socket.send(sending[i].getString(), 0, sending[i].getString().length, this.port, this.ipAddress);
            console.log(sending[i].getIndex() + " sent");
        }
        setTimeout(() => { this.send(); }, packetTimeout);
    }
    queue(message) {
        this.messageQueue.push(message);
    }
}
exports.UDPClient = UDPClient;
//# sourceMappingURL=udp_client.js.map