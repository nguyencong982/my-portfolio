# Bài 02: Cấu trúc điều kiện và Vòng lặp

Trong lập trình Java, không phải lúc nào chương trình cũng chạy theo một luồng cố định từ trên xuống dưới.  
**Cấu trúc điều kiện** và **vòng lặp** giúp điều khiển luồng chương trình, cho phép xử lý các tình huống khác nhau dựa trên điều kiện và lặp lại các thao tác cần thiết.

---

## 1. Cấu trúc điều kiện trong Java
Cấu trúc điều kiện cho phép chương trình **đưa ra quyết định** dựa trên kết quả đúng (`true`) hoặc sai (`false`) của một biểu thức logic.

---

### 1.1 Câu lệnh `if`
Cú pháp:
```java
if (điều_kiện) {
    // Khối lệnh được thực hiện nếu điều kiện đúng
}
Ví dụ:

java
Sao chép mã
int age = 20;

if (age >= 18) {
    System.out.println("Bạn đủ tuổi trưởng thành");
}
1.2 Câu lệnh if - else
Dùng khi cần xử lý hai trường hợp đúng và sai.

Cú pháp:

java
Sao chép mã
if (điều_kiện) {
    // Thực hiện nếu điều kiện đúng
} else {
    // Thực hiện nếu điều kiện sai
}
Ví dụ:

java
Sao chép mã
int score = 4;

if (score >= 5) {
    System.out.println("Bạn đã đậu");
} else {
    System.out.println("Bạn đã rớt");
}
1.3 Câu lệnh if - else if - else
Dùng khi có nhiều điều kiện cần kiểm tra.

Ví dụ:

java
Sao chép mã
int score = 7;

if (score >= 8) {
    System.out.println("Học lực Giỏi");
} else if (score >= 6.5) {
    System.out.println("Học lực Khá");
} else if (score >= 5) {
    System.out.println("Học lực Trung bình");
} else {
    System.out.println("Học lực Yếu");
}
1.4 Cấu trúc switch - case
switch - case dùng để rẽ nhánh chương trình theo giá trị cụ thể của biến, giúp code gọn gàng hơn so với nhiều if - else.

Cú pháp:

java
Sao chép mã
switch (biến) {
    case giá_trị_1:
        // Lệnh
        break;
    case giá_trị_2:
        // Lệnh
        break;
    default:
        // Lệnh mặc định
}
Ví dụ:

java
Sao chép mã
int day = 3;

switch (day) {
    case 2:
        System.out.println("Thứ Hai");
        break;
    case 3:
        System.out.println("Thứ Ba");
        break;
    case 4:
        System.out.println("Thứ Tư");
        break;
    default:
        System.out.println("Ngày không hợp lệ");
}
2. Vòng lặp trong Java
Vòng lặp cho phép thực hiện lặp lại một khối lệnh nhiều lần, giúp giảm trùng lặp code và tăng hiệu quả xử lý.

2.1 Vòng lặp for
Dùng khi biết trước số lần lặp.

Cú pháp:

java
Sao chép mã
for (khởi_tạo; điều_kiện; cập_nhật) {
    // Khối lệnh lặp
}
Ví dụ:

java
Sao chép mã
for (int i = 1; i <= 5; i++) {
    System.out.println("Lần lặp thứ: " + i);
}
2.2 Vòng lặp while
Dùng khi chưa biết trước số lần lặp, chỉ lặp khi điều kiện còn đúng.

Cú pháp:

java
Sao chép mã
while (điều_kiện) {
    // Khối lệnh lặp
}
Ví dụ:

java
Sao chép mã
int i = 1;

while (i <= 5) {
    System.out.println("Giá trị i: " + i);
    i++;
}
2.3 Vòng lặp do - while
Vòng lặp do - while luôn thực hiện ít nhất 1 lần, sau đó mới kiểm tra điều kiện.

Cú pháp:

java
Sao chép mã
do {
    // Khối lệnh
} while (điều_kiện);
Ví dụ:

java
Sao chép mã
int i = 1;

do {
    System.out.println("Giá trị i: " + i);
    i++;
} while (i <= 5);
3. Lệnh điều khiển vòng lặp
3.1 Lệnh break
Dùng để thoát khỏi vòng lặp ngay lập tức.

java
Sao chép mã
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    System.out.println(i);
}
3.2 Lệnh continue
Dùng để bỏ qua lần lặp hiện tại và tiếp tục vòng lặp tiếp theo.

java
Sao chép mã
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    System.out.println(i);
}
4. Ví dụ tổng hợp
java
Sao chép mã
public class ControlFlowExample {
    public static void main(String[] args) {
        int score = 6;

        if (score >= 5) {
            System.out.println("Đậu môn học");
        } else {
            System.out.println("Rớt môn học");
        }

        for (int i = 1; i <= 3; i++) {
            System.out.println("Vòng lặp lần: " + i);
        }
    }
}
5. Tổng kết
Trong Bài 02, bạn đã học được:

Cách sử dụng cấu trúc điều kiện if, if-else, switch-case

Các loại vòng lặp for, while, do-while

Lệnh điều khiển vòng lặp break và continue