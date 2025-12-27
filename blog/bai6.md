# Bài 06: Java Collections Framework

Trong Java, mảng (`array`) có nhiều hạn chế như kích thước cố định và khó thao tác.  
**Java Collections Framework (JCF)** cung cấp các cấu trúc dữ liệu linh hoạt giúp **quản lý tập hợp đối tượng hiệu quả, dễ mở rộng và dễ bảo trì**.

---

## 1. Java Collections Framework là gì?
Java Collections Framework là tập hợp các **interface, class và thuật toán** dùng để:
- Lưu trữ
- Truy xuất
- Thao tác với nhóm các đối tượng

---

## 2. Sơ đồ tổng quát Collections Framework
Iterable
|

Collection
List Set
ArrayList HashSet
LinkedList

Sao chép mã
Map
|
HashMap

yaml
Sao chép mã

---

## 3. Interface `List`
### 3.1 Đặc điểm của List
- Có **thứ tự**
- Cho phép **phần tử trùng lặp**
- Truy cập bằng chỉ số (index)

---

### 3.2 ArrayList
- Dựa trên mảng động
- Truy cập nhanh
- Thêm/xóa ở giữa chậm

Ví dụ:
```java
import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();

        names.add("An");
        names.add("Bình");
        names.add("An");

        System.out.println(names);
        System.out.println(names.get(1));
    }
}
3.3 LinkedList
Dựa trên danh sách liên kết

Thêm/xóa nhanh

Truy cập chậm hơn ArrayList

Ví dụ:

java
Sao chép mã
import java.util.LinkedList;

LinkedList<Integer> numbers = new LinkedList<>();
numbers.add(10);
numbers.add(20);
numbers.addFirst(5);

System.out.println(numbers);
3.4 So sánh ArrayList và LinkedList
Tiêu chí	ArrayList	LinkedList
Truy cập	Nhanh	Chậm
Thêm/xóa	Chậm (giữa)	Nhanh
Cấu trúc	Mảng động	Danh sách liên kết

4. Interface Set
4.1 Đặc điểm của Set
Không cho phép phần tử trùng lặp

Không đảm bảo thứ tự (với HashSet)

4.2 HashSet
java
Sao chép mã
import java.util.HashSet;

public class HashSetExample {
    public static void main(String[] args) {
        HashSet<String> emails = new HashSet<>();

        emails.add("a@gmail.com");
        emails.add("b@gmail.com");
        emails.add("a@gmail.com");

        System.out.println(emails);
    }
}
👉 Phần tử "a@gmail.com" chỉ xuất hiện 1 lần.

4.3 Khi nào dùng Set?
Danh sách không trùng lặp

Kiểm tra tồn tại nhanh

Ví dụ: email, username, mã sinh viên

5. Interface Map
5.1 Đặc điểm của Map
Lưu dữ liệu theo cặp Key – Value

Key không được trùng

Value có thể trùng

5.2 HashMap
java
Sao chép mã
import java.util.HashMap;

public class HashMapExample {
    public static void main(String[] args) {
        HashMap<Integer, String> students = new HashMap<>();

        students.put(1, "An");
        students.put(2, "Bình");
        students.put(3, "Công");

        System.out.println(students.get(2));
    }
}
5.3 Duyệt HashMap
java
Sao chép mã
for (Integer key : students.keySet()) {
    System.out.println(key + " - " + students.get(key));
}
6. So sánh List – Set – Map
Tiêu chí	List	Set	Map
Trùng lặp	Có	Không	Key không
Thứ tự	Có	Không	Không
Truy cập	Index	Không	Key

7. Generic trong Collection
Generics giúp:

An toàn kiểu dữ liệu

Không cần ép kiểu

java
Sao chép mã
ArrayList<Integer> list = new ArrayList<>();
list.add(10);
// list.add("Hello"); // Lỗi compile
8. Ví dụ tổng hợp
java
Sao chép mã
import java.util.*;

public class CollectionDemo {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");

        Set<String> set = new HashSet<>(list);

        Map<Integer, String> map = new HashMap<>();
        map.put(1, "Java");
        map.put(2, "Python");

        System.out.println(list);
        System.out.println(set);
        System.out.println(map);
    }
}
9. Tổng kết
Trong Bài 06, bạn đã học:

Tổng quan Java Collections Framework

List (ArrayList, LinkedList)

Set (HashSet)

Map (HashMap)

Cách lựa chọn Collection phù hợp