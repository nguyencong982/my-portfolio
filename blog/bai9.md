### Bài 09: Kết nối Cơ sở dữ liệu với JDBC
**File:** `blog/bai9.md`
```markdown
# Bài 09: Kết nối Cơ sở dữ liệu với JDBC

JDBC là thư viện chuẩn để kết nối Java với các hệ quản trị CSDL như MySQL, SQL Server.

### Các bước kết nối:
1. Nạp Driver.
2. Thiết lập kết nối (`Connection`).
3. Tạo đối tượng `Statement` hoặc `PreparedStatement`.
4. Thực thi truy vấn SQL.
5. Đóng kết nối.