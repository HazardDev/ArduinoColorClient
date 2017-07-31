using System;
using System.Net.Sockets;
using System.Net;
using System.Text;


namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
			Color aColor = new Color(255, 0, 0);

			String[] sendStrings = new String[120];
			for (int i = 0; i < sendStrings.Length; i++) {
				sendStrings[i] = $"{{i: {i}, {aColor.toJsonString()}}}";
			}

			Socket sock = new Socket(AddressFamily.InterNetwork, SocketType.Dgram, ProtocolType.Udp);
			IPAddress serverAddress = IPAddress.Parse("192.168.1.177");
			IPEndPoint endPoint = new IPEndPoint(serverAddress, 1337);

			//Send aColor via UDP 120 times, to test if it's Typescript's fault or the Arduino
			foreach(String message in sendStrings) { 
				byte[] sendBuffer = Encoding.ASCII.GetBytes(message);

				sock.SendTo(sendBuffer, endPoint);
			}
		}
    }
}
