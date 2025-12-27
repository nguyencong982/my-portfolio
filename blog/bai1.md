1. Giới thiệu về Java

Java là một ngôn ngữ lập trình hướng đối tượng (OOP), được phát triển bởi Sun Microsystems và hiện thuộc sở hữu của Oracle. Java nổi bật với tính đa nền tảng nhờ cơ chế Write Once, Run Anywhere (viết một lần, chạy ở nhiều nơi) thông qua Java Virtual Machine (JVM).

Java được ứng dụng rộng rãi trong:

Phát triển ứng dụng web

Ứng dụng Android

Hệ thống doanh nghiệp

Phần mềm desktop

2. Cấu trúc chương trình Java cơ bản

Một chương trình Java đơn giản gồm các thành phần chính sau:

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Xin chào Java!");
    }
}

Giải thích:

class HelloWorld: Khai báo lớp

main(): Hàm chính, điểm bắt đầu thực thi chương trình

System.out.println(): In dữ liệu ra màn hình console

⚠️ Tên file phải trùng với tên class (HelloWorld.java)

3. Các kiểu dữ liệu trong Java

Java chia kiểu dữ liệu thành kiểu nguyên thủy và kiểu tham chiếu. Trong bài này, ta tập trung vào kiểu nguyên thủy.

3.1 Các kiểu dữ liệu nguyên thủy
Kiểu dữ liệu	Dung lượng	Mô tả	Ví dụ
byte	1 byte	Số nguyên nhỏ	10
short	2 byte	Số nguyên	200
int	4 byte	Số nguyên phổ biến	1000
long	8 byte	Số nguyên lớn	100000L
float	4 byte	Số thực	3.14f
double	8 byte	Số thực chính xác cao	5.5
char	2 byte	Ký tự Unicode	'A'
boolean	1 bit	Đúng / Sai	true

Ví dụ:

int age = 20;
double salary = 15000000.5;
boolean isStudent = true;
char grade = 'A';

4. Biến trong Java
4.1 Khái niệm

Biến là vùng nhớ dùng để lưu trữ dữ liệu trong quá trình chương trình chạy.

4.2 Cú pháp khai báo biến
[Kiểu dữ liệu] [Tên biến] = [Giá trị];


Ví dụ:

int age = 20;
double height = 1.72;
boolean passed = false;

4.3 Quy tắc đặt tên biến

Không bắt đầu bằng số

Không trùng từ khóa Java

Nên dùng camelCase

Tên có ý nghĩa rõ ràng

✅ Ví dụ đúng:

int studentAge;
double averageScore;


❌ Ví dụ sai:

int 1age;
int class;

5. Hằng số trong Java

Hằng số là biến không thể thay đổi giá trị, được khai báo bằng từ khóa final.

final double PI = 3.14159;
final int MAX_STUDENT = 50;

6. Toán tử cơ bản trong Java
6.1 Toán tử số học
Toán tử	Chức năng
+	Cộng
-	Trừ
*	Nhân
/	Chia
%	Chia lấy dư

Ví dụ:

int a = 10;
int b = 3;
System.out.println(a + b); // 13
System.out.println(a % b); // 1

6.2 Toán tử so sánh
Toán tử	Ý nghĩa
==	Bằng
!=	Khác
>	Lớn hơn
<	Nhỏ hơn
>=	Lớn hơn hoặc bằng
<=	Nhỏ hơn hoặc bằng
6.3 Toán tử logic
Toán tử	Ý nghĩa
&&	Và
`	
!	Phủ định
7. Ví dụ chương trình tổng hợp
public class BasicExample {
    public static void main(String[] args) {
        int age = 20;
        double score = 8.5;
        boolean passed = score >= 5;

        System.out.println("Tuổi: " + age);
        System.out.println("Điểm: " + score);
        System.out.println("Kết quả: " + passed);
    }
}

8. Tổng kết

Trong Bài 01, bạn đã học được:

Khái niệm và đặc điểm của Java

Cấu trúc chương trình Java

Các kiểu dữ liệu nguyên thủy

Cách khai báo biến và hằng số

Các toán tử cơ bản