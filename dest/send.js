"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dgram = require("dgram");
const message = Buffer.from("A string");
const client = dgram.createSocket("udp4");
const port = 11135;
const ipAddress = "192.168.1.177";
for (let i = 0; i < 100; i++) {
    client.send(message, port, ipAddress, (error, bytes) => {
        if (error)
            console.log(error);
        console.log("Sent: " + message);
    });
}
//# sourceMappingURL=send.js.map