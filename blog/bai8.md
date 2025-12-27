# Bài 08: Lập trình mạng với Socket trong Java

Trong các hệ thống phân tán, ứng dụng client–server hay chat, việc các máy tính **giao tiếp với nhau qua mạng** là yêu cầu bắt buộc.  
Java cung cấp API **Socket** giúp hiện thực việc trao đổi dữ liệu giữa các máy thông qua mạng TCP/IP.

---

## 1. Socket là gì?
**Socket** là một điểm cuối (endpoint) của kênh giao tiếp giữa hai máy tính trong mạng.

Trong mô hình Client – Server:
- **Server**: Lắng nghe và chấp nhận kết nối
- **Client**: Gửi yêu cầu đến Server

Java hỗ trợ lập trình mạng thông qua gói:
```java
java.net
2. Mô hình Client – Server với Socket
scss
Sao chép mã
Client  <------->  Server
(Socket)         (ServerSocket)
Quy trình cơ bản:

Server mở cổng và lắng nghe

Client gửi yêu cầu kết nối

Hai bên trao đổi dữ liệu

Đóng kết nối

3. ServerSocket (Phía Server)
3.1 Khái niệm
ServerSocket dùng ở phía Server để:

Mở một cổng (port)

Lắng nghe kết nối từ Client

Chấp nhận kết nối thông qua accept()

3.2 Ví dụ Server đơn giản
java
Sao chép mã
import java.io.*;
import java.net.*;

public class SimpleServer {
    public static void main(String[] args) {
        try {
            ServerSocket server = new ServerSocket(1234);
            System.out.println("Server đang lắng nghe tại cổng 1234...");

            Socket socket = server.accept();
            System.out.println("Client đã kết nối");

            BufferedReader in = new BufferedReader(
                    new InputStreamReader(socket.getInputStream()));
            PrintWriter out = new PrintWriter(
                    socket.getOutputStream(), true);

            String message = in.readLine();
            System.out.println("Client gửi: " + message);

            out.println("Server đã nhận được tin nhắn");

            socket.close();
            server.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
4. Socket (Phía Client)
4.1 Khái niệm
Socket dùng ở phía Client để:

Kết nối đến Server thông qua IP và Port

Gửi và nhận dữ liệu

4.2 Ví dụ Client đơn giản
java
Sao chép mã
import java.io.*;
import java.net.*;

public class SimpleClient {
    public static void main(String[] args) {
        try {
            Socket socket = new Socket("localhost", 1234);

            BufferedReader in = new BufferedReader(
                    new InputStreamReader(socket.getInputStream()));
            PrintWriter out = new PrintWriter(
                    socket.getOutputStream(), true);

            out.println("Xin chào Server!");

            String response = in.readLine();
            System.out.println("Server phản hồi: " + response);

            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
5. Luồng dữ liệu trong Socket
Để trao đổi dữ liệu, Socket sử dụng:

InputStream – nhận dữ liệu

OutputStream – gửi dữ liệu

Thường kết hợp với:

BufferedReader

PrintWriter

DataInputStream, DataOutputStream

6. Server đa luồng (Multi-client Server)
Trong thực tế, Server cần phục vụ nhiều Client cùng lúc, do đó phải kết hợp Socket + Multithreading.

6.1 Ý tưởng
Mỗi Client kết nối → tạo một Thread riêng

Các Client hoạt động độc lập

6.2 Ví dụ Server đa luồng
java
Sao chép mã
class ClientHandler extends Thread {
    private Socket socket;

    public ClientHandler(Socket socket) {
        this.socket = socket;
    }

    public void run() {
        try {
            BufferedReader in = new BufferedReader(
                    new InputStreamReader(socket.getInputStream()));
            PrintWriter out = new PrintWriter(
                    socket.getOutputStream(), true);

            String msg = in.readLine();
            out.println("Server nhận: " + msg);

            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
java
Sao chép mã
import java.net.*;

public class MultiServer {
    public static void main(String[] args) {
        try {
            ServerSocket server = new ServerSocket(1234);
            System.out.println("Server đa luồng đang chạy...");

            while (true) {
                Socket socket = server.accept();
                new ClientHandler(socket).start();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
7. TCP và UDP trong Java
Tiêu chí	TCP (Socket)	UDP (Datagram)
Độ tin cậy	Cao	Thấp
Tốc độ	Chậm hơn	Nhanh
Kiểm soát	Có	Không
Ứng dụng	Web, Chat	Game, Stream

👉 Socket trong bài này sử dụng TCP.

8. Một số lỗi thường gặp
Port bị chiếm

Firewall chặn kết nối

Không đóng socket gây rò rỉ tài nguyên

Server không chạy nhưng Client kết nối

9. Ứng dụng thực tế của Socket
Chat application

Game online

Hệ thống client–server

Microservices (ở mức thấp)

10. Tổng kết
Trong Bài 08, bạn đã học được:

Khái niệm Socket và lập trình mạng trong Java

Cách tạo Server và Client

Trao đổi dữ liệu qua Socket

Server đa luồng

Ứng dụng thực tế của Socket