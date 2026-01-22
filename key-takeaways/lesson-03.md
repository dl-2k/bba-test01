## Buổi 3: Git & JavaScript Basic Continue

### 1. Git
#### 1.1 Undo Actions trong Git

- Undo commit message: 
    - khi vừa có lệnh commit kèm message lên trên vùng Repository mà muốn sữa message đó thì dùng lệnh
```git
 git commit --amend -m"msg want to change"
``` 
- Undo file từ Staging Area về vùng Working Directory:
    - khi vừa dùng git add . or git add <file> bất kỳ mà muốn back file đó về lại thì dùng lệnh
```git
 git restore --staged<file_name>
 git restore --staged . #undo toàn bộ file
``` 
- Undo file từ Repository về vùng Working Directory:
    - khi vừa hoàn thành git commit file lên mà muốn reset về vùng Working Directory thì dùng lệnh
```git
git reset HEAD~1
git reset HEAD~N #xoá bao nhiêu commit đều dc (N: số lượng commit sẽ reset)
``` 
**Note:** 
- commit đầu tiên sẽ không thể reset
- xoá phải xoá .git rồi init lại (không nên)

#### 1.2 Git Branching   
lệnh trên lấy code từ server về:
```git
git pull origin main
``` 
lệnh khi khởi tạo init nhánh main là mặc định 
```git
git config --global init.dèaultBranch main
``` 
lệnh xem danh sách nhánh:
```git
git branch
##note: phải có ít nhất 1 commit
``` 
lệnh tạo nhánh mới + checkout nhánh mới:
```git
git branch <tên branch>
git checkout <tên branch>
git checkout -b <tên branch>
``` 
lệnh xoá branch: lưu ý switch qa nhánh khác trước khi xoá
```git
git branch -D <tên branch>
```

#### 1.3 Ignore file
- folder/ : ignore folder
- file : ignore file
    
---

### 2. JavaScript

#### 2.1 Convention
- **sake_case**: tạm thời không dùng
- **kebab-case**: đặt tên file và folder
- **camelCase**: đặt tên biến, hàm
- **PascalCase**: đặt tên class



#### 2.2 Console.log
```typescript
console.log('text');
console.log("text");
console.log(`${variable_name}`);
let name = "Alex";
console.log(`My name is ${name}`);
console.log("My name is" + name +"");
```

#### 2.3 Object
- là 1 kiểu dữ liệu quan trọng dùng để lưu trữ dạng key-value
- Ví dụ
```typescript
const student = {
    studentName: "Alex",
    age: 21,
    country: {
        address: "121 Audinen",
        city: "Hai Phong"
    }
}
// gán thêm
student.phoneNumber = 213123123;
// xoá giá trị object
delete student.age;
```

#### 2.4 Array
```typescript
const score = [2, 424, 23, 12, 123, , false, "ádasdasd", "oooo"];
console.log("Do dai cua mang", score.length, "va Index", score[2]);
```

#### 2.5 Function
```typescript
function <nameFunction>(){
    // code
}
```
