# Bài 09: Kết nối Cơ sở dữ liệu với JDBC

Trong các ứng dụng thực tế, dữ liệu thường được lưu trữ trong **Cơ sở dữ liệu (Database)**.  
Java cung cấp **JDBC (Java Database Connectivity)** – một API chuẩn giúp Java kết nối và làm việc với các hệ quản trị CSDL như **MySQL, SQL Server, PostgreSQL, Oracle**.

---

## 1. JDBC là gì?
**JDBC (Java Database Connectivity)** là tập hợp các interface và class cho phép:
- Kết nối Java với Database
- Thực thi câu lệnh SQL
- Lấy và xử lý dữ liệu trả về

JDBC nằm trong package:
```java
java.sql
2. Kiến trúc JDBC
arduino
Sao chép mã
Java Application
       |
       | JDBC API
       |
JDBC Driver
       |
Database (MySQL, SQL Server, ...)
3. Các thành phần quan trọng trong JDBC
Thành phần	Vai trò
Driver	Kết nối Java với DB
Connection	Quản lý kết nối
Statement	Thực thi SQL
PreparedStatement	SQL có tham số
ResultSet	Lưu kết quả truy vấn

4. Các bước kết nối CSDL bằng JDBC
Quy trình chuẩn:
Nạp Driver JDBC

Thiết lập kết nối (Connection)

Tạo Statement hoặc PreparedStatement

Thực thi truy vấn SQL

Đóng kết nối

5. Chuẩn bị Driver JDBC
Ví dụ với MySQL
Tải thư viện:

Sao chép mã
mysql-connector-j
Maven
xml
Sao chép mã
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <version>8.0.33</version>
</dependency>
6. Ví dụ kết nối MySQL cơ bản
java
Sao chép mã
import java.sql.Connection;
import java.sql.DriverManager;

public class JdbcConnection {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/testdb";
        String user = "root";
        String password = "123456";

        try {
            Connection conn = DriverManager.getConnection(url, user, password);
            System.out.println("Kết nối CSDL thành công!");
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
7. Thực thi câu lệnh SQL với Statement
java
Sao chép mã
import java.sql.*;

public class JdbcStatement {
    public static void main(String[] args) throws Exception {
        Connection conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/testdb", "root", "123456");

        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery("SELECT * FROM users");

        while (rs.next()) {
            System.out.println(
                rs.getInt("id") + " - " +
                rs.getString("name")
            );
        }

        conn.close();
    }
}
8. PreparedStatement – An toàn & hiệu quả hơn
👉 Nên dùng PreparedStatement thay cho Statement

Ưu điểm:
Tránh SQL Injection

Tăng hiệu suất

Dễ đọc, dễ bảo trì

Ví dụ Insert dữ liệu
java
Sao chép mã
import java.sql.*;

public class JdbcPrepared {
    public static void main(String[] args) throws Exception {
        Connection conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/testdb", "root", "123456");

        String sql = "INSERT INTO users(name, email) VALUES (?, ?)";
        PreparedStatement ps = conn.prepareStatement(sql);

        ps.setString(1, "Nguyen Van A");
        ps.setString(2, "a@gmail.com");

        ps.executeUpdate();
        conn.close();
    }
}
9. Thao tác CRUD với JDBC
Thao tác	Phương thức
SELECT	executeQuery()
INSERT	executeUpdate()
UPDATE	executeUpdate()
DELETE	executeUpdate()

10. Đóng kết nối đúng cách
Luôn đóng tài nguyên theo thứ tự:

java
Sao chép mã
rs.close();
stmt.close();
conn.close();
Hoặc dùng try-with-resources (Java 7+):

java
Sao chép mã
try (Connection conn = DriverManager.getConnection(url, user, pass)) {
    // xử lý
}
11. Các lỗi JDBC thường gặp
Sai URL kết nối

Sai username/password

Chưa thêm Driver

Không đóng kết nối gây rò rỉ tài nguyên

12. JDBC và Framework hiện đại
Trong thực tế, JDBC thường được dùng gián tiếp qua:

JPA / Hibernate

Spring JDBC

Spring Data JPA

👉 JDBC là nền tảng bắt buộc phải hiểu trước khi học các framework trên.

13. Tổng kết
Trong Bài 09, bạn đã học được:

JDBC là gì và kiến trúc hoạt động

Các bước kết nối CSDL trong Java

Sử dụng Statement và PreparedStatement

Thực hiện CRUD với JDBC

Các lưu ý thực tế khi làm việc với Database

