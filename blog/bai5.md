# Bài 05: Xử lý Ngoại lệ (Exception Handling)

Xử lý lỗi giúp chương trình không bị dừng đột ngột (crash).

### 1. Try-Catch-Finally
```java
try {
    int data = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Không thể chia cho 0");
} finally {
    System.out.println("Luôn thực thi");
}