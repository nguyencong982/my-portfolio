# Bài 03: Lập trình hướng đối tượng (OOP) chuyên sâu

Lập trình hướng đối tượng (Object-Oriented Programming – OOP) là **trái tim của Java**.  
OOP giúp tổ chức mã nguồn rõ ràng, dễ bảo trì, dễ mở rộng và phản ánh đúng các đối tượng trong thế giới thực.

---

## 1. Khái niệm lập trình hướng đối tượng
OOP tập trung vào việc xây dựng chương trình dựa trên:
- **Lớp (Class)**: Bản thiết kế
- **Đối tượng (Object)**: Thực thể cụ thể được tạo ra từ lớp

Java là ngôn ngữ **thuần hướng đối tượng** (ngoại trừ các kiểu dữ liệu nguyên thủy).

---

## 2. Lớp (Class) và Đối tượng (Object)

### 2.1 Lớp (Class)
Lớp là một bản thiết kế mô tả:
- Thuộc tính (biến)
- Hành vi (phương thức)

Ví dụ khai báo một lớp:
```java
public class Student {
    String name;
    int age;

    void study() {
        System.out.println("Sinh viên đang học bài");
    }
}
2.2 Đối tượng (Object)
Đối tượng là thể hiện cụ thể của lớp, được tạo ra bằng từ khóa new.

Ví dụ:

java
Sao chép mã
Student s1 = new Student();
s1.name = "Nguyễn Văn A";
s1.age = 20;
s1.study();
3. Constructor (Hàm khởi tạo)
3.1 Khái niệm
Constructor là phương thức đặc biệt:

Có tên trùng với tên lớp

Không có kiểu trả về

Tự động được gọi khi tạo đối tượng bằng new

3.2 Constructor không tham số
java
Sao chép mã
public class Student {
    String name;
    int age;

    public Student() {
        name = "Chưa xác định";
        age = 0;
    }
}
3.3 Constructor có tham số
java
Sao chép mã
public class Student {
    String name;
    int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
Sử dụng:

java
Sao chép mã
Student s1 = new Student("Nguyễn Văn B", 21);
4. Từ khóa this
this đại diện cho đối tượng hiện tại, thường dùng để:

Phân biệt biến instance và tham số

Gọi constructor khác trong cùng lớp

Ví dụ:

java
Sao chép mã
this.name = name;
5. Đóng gói (Encapsulation)
5.1 Khái niệm
Đóng gói giúp:

Ẩn dữ liệu bên trong lớp

Kiểm soát truy cập thông qua phương thức

5.2 Access Modifier
Từ khóa	Phạm vi truy cập
private	Chỉ trong lớp
default	Trong package
protected	Package + lớp con
public	Mọi nơi

5.3 Getter và Setter
java
Sao chép mã
public class Student {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
6. Kế thừa (Inheritance)
6.1 Khái niệm
Kế thừa cho phép lớp con tái sử dụng thuộc tính và phương thức của lớp cha.

Cú pháp:

java
Sao chép mã
class Child extends Parent {
}
Ví dụ:

java
Sao chép mã
class Person {
    String name;

    void speak() {
        System.out.println("Đang nói");
    }
}

class Student extends Person {
    void study() {
        System.out.println("Đang học");
    }
}
7. Đa hình (Polymorphism)
7.1 Ghi đè phương thức (Method Overriding)
java
Sao chép mã
class Animal {
    void sound() {
        System.out.println("Động vật phát ra âm thanh");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Chó sủa");
    }
}
7.2 Đa hình thông qua tham chiếu cha
java
Sao chép mã
Animal a = new Dog();
a.sound(); // Chó sủa
8. Trừu tượng (Abstraction)
8.1 Lớp abstract
java
Sao chép mã
abstract class Shape {
    abstract void draw();
}
8.2 Interface
java
Sao chép mã
interface Flyable {
    void fly();
}

class Bird implements Flyable {
    public void fly() {
        System.out.println("Chim đang bay");
    }
}
9. Ví dụ tổng hợp OOP
java
Sao chép mã
public class Main {
    public static void main(String[] args) {
        Student s = new Student("Nguyễn Văn C", 22);
        System.out.println(s.getName());
    }
}
10. Tổng kết
Trong Bài 03, bạn đã nắm được:

Class và Object

Constructor và từ khóa this

Đóng gói, Kế thừa, Đa hình, Trừu tượng

Cách áp dụng OOP trong Java