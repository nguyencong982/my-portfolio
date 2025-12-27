# Bài 07: Đa luồng (Multithreading) trong Java

Trong các ứng dụng thực tế, việc chỉ chạy một tác vụ tại một thời điểm (single-thread) sẽ làm giảm hiệu suất, đặc biệt với các chương trình cần xử lý nhiều công việc song song.  
**Đa luồng (Multithreading)** cho phép chương trình Java **thực hiện nhiều tác vụ cùng lúc**, giúp tối ưu hiệu năng và tận dụng tài nguyên CPU tốt hơn.

---

## 1. Luồng (Thread) là gì?
Luồng (Thread) là **đơn vị thực thi nhỏ nhất** trong một chương trình.  
Một chương trình Java mặc định có ít nhất **1 luồng chính (main thread)**.

Ví dụ thực tế:
- Trình duyệt vừa tải dữ liệu, vừa hiển thị giao diện
- Ứng dụng chat vừa gửi, vừa nhận tin nhắn

---

## 2. Tạo luồng trong Java
Java cung cấp **2 cách phổ biến** để tạo luồng.

---

### 2.1 Cách 1: Kế thừa lớp `Thread`
Cách này tạo một lớp mới kế thừa từ `Thread` và ghi đè phương thức `run()`.

Ví dụ:
```java
class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Luồng đang chạy: " + Thread.currentThread().getName());
    }
}

public class ThreadDemo {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        t1.start(); // Không dùng run()
    }
}
👉 Gọi start() để JVM tạo luồng mới và gọi run().

2.2 Cách 2: Triển khai interface Runnable (Khuyến nghị)
Cách này giúp tách logic xử lý và luồng, linh hoạt hơn vì Java không hỗ trợ đa kế thừa.

Ví dụ:

java
Sao chép mã
class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("Luồng Runnable đang chạy");
    }
}

public class RunnableDemo {
    public static void main(String[] args) {
        Thread t1 = new Thread(new MyRunnable());
        t1.start();
    }
}
2.3 So sánh Thread và Runnable
Tiêu chí	Thread	Runnable
Kế thừa	Bắt buộc	Không
Đa kế thừa	❌	✅
Linh hoạt	Thấp	Cao
Khuyến nghị	❌	✅

3. Các trạng thái của luồng (Thread Lifecycle)
Một luồng trong Java có thể trải qua các trạng thái sau:

New – Luồng mới được tạo

Runnable – Sẵn sàng chạy

Running – Đang thực thi

Blocked – Bị khóa tài nguyên

Waiting – Chờ luồng khác

Timed Waiting – Chờ có thời gian

Terminated – Kết thúc

Sơ đồ đơn giản:

sql
Sao chép mã
New → Runnable → Running → Terminated
           ↓
       Blocked / Waiting
4. Các phương thức quan trọng của Thread
Phương thức	Chức năng
start()	Khởi động luồng
run()	Nội dung luồng
sleep(ms)	Tạm dừng luồng
join()	Chờ luồng khác kết thúc
getName()	Lấy tên luồng

Ví dụ sleep():

java
Sao chép mã
try {
    Thread.sleep(1000);
} catch (InterruptedException e) {
    e.printStackTrace();
}
5. Đồng bộ hóa luồng (Synchronization)
5.1 Vấn đề Race Condition
Khi nhiều luồng truy cập và thay đổi cùng một dữ liệu, có thể gây ra lỗi không mong muốn.

5.2 Từ khóa synchronized
Dùng để đảm bảo chỉ một luồng được truy cập tài nguyên tại một thời điểm.

Ví dụ:

java
Sao chép mã
class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}
6. Ví dụ đa luồng đơn giản
java
Sao chép mã
class Task implements Runnable {
    @Override
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(Thread.currentThread().getName() + " - " + i);
        }
    }
}

public class MultiThreadExample {
    public static void main(String[] args) {
        Thread t1 = new Thread(new Task(), "Thread-1");
        Thread t2 = new Thread(new Task(), "Thread-2");

        t1.start();
        t2.start();
    }
}
7. Ưu và nhược điểm của Multithreading
Ưu điểm
Tăng hiệu suất

Tận dụng CPU đa lõi

Ứng dụng phản hồi tốt hơn

Nhược điểm
Code phức tạp

Khó debug

Dễ phát sinh lỗi đồng bộ

8. Khi nào nên dùng đa luồng?
Xử lý song song nhiều tác vụ

Ứng dụng server, web

Game, xử lý nền (background task)

9. Tổng kết
Trong Bài 07, bạn đã học được:

Khái niệm luồng và đa luồng

Hai cách tạo luồng trong Java

Vòng đời của luồng

Đồng bộ hóa với synchronized

Ưu và nhược điểm của Multithreading