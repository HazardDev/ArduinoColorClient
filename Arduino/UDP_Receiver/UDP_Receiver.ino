#include <MemoryFree.h>

#include <NeoPixelBus.h>
#include <ArduinoJson.h>


const uint16_t PixelCount = 120; 
const uint8_t PixelPin = 3;  

NeoPixelBus<NeoGrbFeature, Neo800KbpsMethod> strip(PixelCount, PixelPin);


#include <SPI.h>         // needed for Arduino versions later than 0018
#include <Ethernet.h>
#include <EthernetUdp.h>         // UDP library from: bjoern@cs.stanford.edu 12/30/2008


// Enter a MAC address and IP address for your controller below.
// The IP address will be dependent on your local network:
byte mac[] = {
  0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xEC
};
IPAddress ip(192, 168, 1, 177);
unsigned int localPort = 1337;      // local port to listen on
char packetBuffer[48];
EthernetUDP Udp;

char ReplyBuffer[] = "ack";

void setup() {
  // start the Ethernet and UDP:
  Ethernet.begin(mac, ip);
  Udp.begin(localPort);

  Serial.begin(9600);
  while (!Serial);

  strip.Begin();
  strip.Show();

  Serial.println("Starting server...");
}

void loop() {
  // if there's data available, read a packet
  int packetSize = Udp.parsePacket();
  if (packetSize) {
    Udp.read(packetBuffer, packetSize);
//    Serial.println(packetBuffer);
    color(packetBuffer);

    // send a reply to the IP address and port that sent us the packet we received
    Udp.beginPacket(Udp.remoteIP(), Udp.remotePort());
    Udp.write(ReplyBuffer);
    Udp.endPacket();
  }
}

void color(char packetBuffer[]){
  DynamicJsonBuffer jsonBuffer;
  JsonObject& object = jsonBuffer.parseObject(packetBuffer);
//  object.printTo(Serial);
  strip.SetPixelColor(object["i"], RgbColor(object["r"], object["g"], object["b"]));
//  Serial.print("Free mem:");
//  Serial.println(freeMemory());
  strip.Show();
}


