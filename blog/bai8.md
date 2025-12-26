# Bài 08: Lập trình mạng với Socket trong Java

Socket giúp hai máy tính có thể giao tiếp với nhau qua mạng.

### 1. ServerSocket
Dùng ở phía Server để lắng nghe kết nối từ Client.
```java
ServerSocket server = new ServerSocket(1234);
Socket socket = server.accept();