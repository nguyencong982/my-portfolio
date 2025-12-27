# Bài 04: 4 Tính chất của Lập trình hướng đối tượng (OOP)

Lập trình hướng đối tượng (OOP) trong Java được xây dựng dựa trên **4 trụ cột cốt lõi**.  
Việc hiểu rõ và vận dụng tốt 4 tính chất này giúp bạn viết code **dễ bảo trì, dễ mở rộng và chuyên nghiệp** hơn.

---

## 1. Đóng gói (Encapsulation)

### 1.1 Khái niệm
Đóng gói là cơ chế **ẩn dữ liệu bên trong đối tượng**, chỉ cho phép truy cập thông qua các phương thức được kiểm soát.

👉 Mục tiêu:
- Bảo vệ dữ liệu
- Giảm phụ thuộc giữa các lớp
- Dễ bảo trì và mở rộng

---

### 1.2 Cách triển khai trong Java
- Khai báo thuộc tính với `private`
- Cung cấp `getter` và `setter` để truy cập

Ví dụ:
```java
public class Student {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age > 0) {
            this.age = age;
        }
    }
}
1.3 Lợi ích
Kiểm soát dữ liệu đầu vào

Tránh thay đổi dữ liệu không mong muốn

Code an toàn và rõ ràng hơn

2. Kế thừa (Inheritance)
2.1 Khái niệm
Kế thừa cho phép lớp con tái sử dụng thuộc tính và phương thức của lớp cha, giúp giảm trùng lặp mã nguồn.

2.2 Cú pháp kế thừa
java
Sao chép mã
class Child extends Parent {
}
2.3 Ví dụ
java
Sao chép mã
class Person {
    String name;

    void speak() {
        System.out.println("Con người đang nói");
    }
}

class Student extends Person {
    void study() {
        System.out.println("Sinh viên đang học");
    }
}
Sử dụng:

java
Sao chép mã
Student s = new Student();
s.speak();
s.study();
2.4 Lợi ích
Tái sử dụng code

Dễ mở rộng hệ thống

Phản ánh mối quan hệ is-a

3. Đa hình (Polymorphism)
3.1 Khái niệm
Đa hình cho phép một hành động có nhiều cách thực hiện khác nhau, tùy thuộc vào đối tượng cụ thể.

Java hỗ trợ đa hình thông qua:

Overloading (nạp chồng)

Overriding (ghi đè)

3.2 Overloading (Nạp chồng phương thức)
Cùng tên phương thức nhưng khác tham số.

java
Sao chép mã
class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}
3.3 Overriding (Ghi đè phương thức)
Lớp con ghi đè phương thức của lớp cha.

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
3.4 Đa hình qua tham chiếu cha
java
Sao chép mã
Animal a = new Dog();
a.sound(); // Chó sủa
3.5 Lợi ích
Code linh hoạt

Dễ mở rộng

Giảm phụ thuộc vào lớp cụ thể

4. Trừu tượng (Abstraction)
4.1 Khái niệm
Trừu tượng tập trung vào cái gì làm, không quan tâm làm như thế nào.

Java hỗ trợ trừu tượng thông qua:

abstract class

interface

4.2 Abstract Class
java
Sao chép mã
abstract class Shape {
    abstract double area();
}
java
Sao chép mã
class Rectangle extends Shape {
    double width, height;

    Rectangle(double w, double h) {
        width = w;
        height = h;
    }

    double area() {
        return width * height;
    }
}
4.3 Interface
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
4.4 So sánh Abstract Class và Interface
Tiêu chí	Abstract Class	Interface
Kế thừa	extends	implements
Thuộc tính	Có biến thường	Chỉ public static final
Phương thức	Có phương thức thường	Mặc định public abstract
Đa kế thừa	❌	✅

5. Ví dụ tổng hợp 4 tính chất OOP
java
Sao chép mã
abstract class Person {
    protected String name;

    abstract void work();
}

class Developer extends Person {
    Developer(String name) {
        this.name = name;
    }

    @Override
    void work() {
        System.out.println(name + " đang viết code");
    }
}
java
Sao chép mã
Person p = new Developer("Công");
p.work();
6. Tổng kết
Trong Bài 04, bạn đã nắm vững:

Đóng gói (Encapsulation)

Kế thừa (Inheritance)

Đa hình (Polymorphism)

Trừu tượng (Abstraction)