# Bài 05: Xử lý Ngoại lệ (Exception Handling) trong Java

Trong quá trình chạy chương trình, các lỗi có thể xảy ra ngoài ý muốn như chia cho 0, truy cập sai chỉ số mảng, lỗi nhập dữ liệu…  
**Xử lý ngoại lệ (Exception Handling)** giúp chương trình **không bị dừng đột ngột (crash)** và có thể xử lý lỗi một cách an toàn, chuyên nghiệp.

---

## 1. Ngoại lệ (Exception) là gì?
Ngoại lệ là **sự kiện bất thường** xảy ra trong quá trình thực thi chương trình, làm gián đoạn luồng chạy bình thường.

Ví dụ:
- Chia cho 0
- Truy cập phần tử không tồn tại trong mảng
- Đọc file không tồn tại

---

## 2. Phân loại ngoại lệ trong Java
Java chia ngoại lệ thành 2 loại chính:

### 2.1 Checked Exception
- Được kiểm tra tại **thời điểm biên dịch**
- Bắt buộc phải xử lý bằng `try-catch` hoặc `throws`

Ví dụ:
- `IOException`
- `SQLException`

---

### 2.2 Unchecked Exception
- Xảy ra tại **thời điểm chạy**
- Kế thừa từ `RuntimeException`

Ví dụ:
- `ArithmeticException`
- `NullPointerException`
- `ArrayIndexOutOfBoundsException`

---

## 3. Cấu trúc `try - catch - finally`

### 3.1 Cú pháp cơ bản
```java
try {
    // Đoạn code có khả năng phát sinh lỗi
} catch (ExceptionType e) {
    // Xử lý ngoại lệ
} finally {
    // Luôn được thực thi (dù có lỗi hay không)
}
3.2 Ví dụ minh họa
java
Sao chép mã
try {
    int data = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Không thể chia cho 0");
} finally {
    System.out.println("Luôn thực thi");
}
Kết quả:

css
Sao chép mã
Không thể chia cho 0
Luôn thực thi
4. Bắt nhiều ngoại lệ
Có thể bắt nhiều loại ngoại lệ khác nhau trong cùng một try.

java
Sao chép mã
try {
    int[] arr = new int[3];
    arr[5] = 10;
} catch (ArithmeticException e) {
    System.out.println("Lỗi toán học");
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Lỗi truy cập mảng");
}
5. Bắt nhiều ngoại lệ trong một catch (Java 7+)
java
Sao chép mã
try {
    int x = Integer.parseInt("abc");
} catch (NumberFormatException | NullPointerException e) {
    System.out.println("Lỗi dữ liệu đầu vào");
}
6. Từ khóa throw và throws
6.1 Từ khóa throw
Dùng để chủ động ném ngoại lệ.

java
Sao chép mã
if (age < 18) {
    throw new ArithmeticException("Chưa đủ tuổi");
}
6.2 Từ khóa throws
Khai báo ngoại lệ có thể xảy ra trong phương thức.

java
Sao chép mã
void readFile() throws IOException {
    // code đọc file
}
7. Tạo ngoại lệ tùy chỉnh (Custom Exception)
7.1 Định nghĩa ngoại lệ
java
Sao chép mã
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}
7.2 Sử dụng ngoại lệ tùy chỉnh
java
Sao chép mã
void checkAge(int age) throws InvalidAgeException {
    if (age < 18) {
        throw new InvalidAgeException("Tuổi phải >= 18");
    }
}
8. try-with-resources
Giúp tự động đóng tài nguyên (file, stream…) sau khi sử dụng.

java
Sao chép mã
try (FileReader fr = new FileReader("data.txt")) {
    // đọc file
} catch (IOException e) {
    e.printStackTrace();
}
9. Một số ngoại lệ thường gặp
Ngoại lệ	Nguyên nhân
NullPointerException	Truy cập đối tượng null
ArithmeticException	Chia cho 0
NumberFormatException	Sai định dạng số
IOException	Lỗi vào/ra

10. Ví dụ tổng hợp
java
Sao chép mã
public class ExceptionExample {
    public static void main(String[] args) {
        try {
            int a = 10;
            int b = 0;
            System.out.println(a / b);
        } catch (ArithmeticException e) {
            System.out.println("Lỗi chia cho 0");
        } finally {
            System.out.println("Kết thúc chương trình");
        }
    }
}
11. Tổng kết
Trong Bài 05, bạn đã học được:

Khái niệm và phân loại ngoại lệ

Cách sử dụng try-catch-finally

throw, throws

Ngoại lệ tùy chỉnh

try-with-resources

👉 Xử lý ngoại lệ tốt giúp