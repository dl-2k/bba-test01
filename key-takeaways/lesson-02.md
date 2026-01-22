## Buổi 2: Git & JavaScript Basic

### 1. Git
- Git là Distributed Version Control System
- Được sử dụng phổ biến để quản lý phiên bản mã nguồn

#### 1.1 So sánh Git và GitHub

| Git | GitHub |
|----|--------|
| Là một phần mềm | Là một dịch vụ web |
| Quản lý các phiên bản source code | Nơi upload và lưu trữ Git repository |

#### 1.2 Git – Three States
- Lệnh khởi tạo 3 states:  git init
- **Working Directory**  
  - Chứa file mới hoặc file có thay đổi 
- **Staging Area**  
  - Chứa file chuẩn bị commit  
  - Dùng lệnh: git add
- **Repository**  
  - Lưu các commit  
  - Dùng lệnh: git commit -m "message"

#### 1.3 Git – Cấu hình
- **Global config**:
    ```git
    - git config --global user.name "Name"
    - git config --global user.email "YourEmail"
    ```
- **Config cho từng project**:
    ```git
    - git config user.name "Name"
    - git config user.email "YourEmail"
    ```
---

### 2. JavaScript
- JavaScript là ngôn ngữ lập trình phổ biến
- Giúp trình duyệt xử lý logic và tương tác người dùng

#### 2.1 Biến và Hằng
- **Biến**: giá trị có thể thay đổi  
  - `var`: có thể khai báo lại (hạn chế dùng)  
  - `let`: không thể khai báo lại

- **Hằng**: giá trị không thay đổi  
  - `const`: dùng khi không cần gán lại giá trị

#### 2.2 Kiểu dữ liệu
- **Primitive types**:
  - number, string, boolean, undefined, null, symbol, bigint

- **Reference types**:
  - object

#### 2.3 Toán tử so sánh và logic
- So sánh:
  - `==`, `===` (so sánh cả giá trị và kiểu dữ liệu)
  - `>`, `<`, `>=`, `<=`

- Logic:
  - `&&` (AND): cả hai đều true
  - `||` (OR): một trong hai true
  - `!` (NOT)

#### 2.4 Toán tử ngôi
- `x++`, `x--`: gán trước, tăng/giảm sau
- `++x`, `--x`: tăng/giảm trước, gán sau

#### 2.5 Điều kiện và vòng lặp
- Điều kiện:
  - `if else`
  - `switch case`

- Vòng lặp:
  - `for (i)`
