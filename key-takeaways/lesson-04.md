## Buổi 4: JavaScript Basic Continue

### 1. Phạm vi của biến
- là nơi mà biến có thể truy cập , có 3 loại phạm vi:
  - Global (toàn cục):
  ```typescript
  var globalVar = "ABC";
  let globalLet = 123;

  function test() {
    console.log(globalVar); // truy cập bình thường
    console.log(globalLet); // truy cập bình thường 
  }
  ``` 
    - Function scope (hàm):
  ```typescript
  function test() {
    var globalVar = "ABC";
    let globalLet = 123;
    console.log(globalVar); // truy cập bình thường

  }
  console.log(globalLet); // Error vì nằm ngoài pvi hàm
  ``` 
    - Block scope (khối):
  ```typescript
  if(true){
    var globalVar = "ABC";
    let globalLet = 123;
    const constVariable = "const có block scope";
  }
  console.log(globalVar); // ok vì khai báo là var
  console.log(globalLet); // Error vì nằm ngoài pvi scope
  console.log(constVariable); // Error vì nằm ngoài pvi scope
  ```

**Note:** **Hoisting** khi thực thi biến trước khi khai báo sẽ là undifined chứ không bị lỗi
```typescript
    console.log(globalVar); // Undefined
    var globalVar = "ABC";
    
    console.log(globalVar,constVariable); // Error ; can not access before initialization   
    let globalLet = 123;
    const constVariable = "const có block scope";
  ```

### 2. break and continue

#### 2.1 break
- break dùng để thoát vòng lặp ngay lập tức
 ```typescript
 for (let i = 0 ; i < 10 ; i++){
  if (i===5){
    break ; // => out vòng lặp ngay khi i = 5
  }
 }
 //Out put: 0,1,2,3,4
 ```
#### 2.2 continue
- continue dùng để bỏ qua phần còn lại của vòng lặp và thực thi kế tiếp 
 ```typescript
 for (let i = 0 ; i < 10 ; i++){
  if (i===5){
    continue ; // => skip vòng lặp và chạy tiếp ngay khi i = 5
  }
  console.log(i)
 }
 ```
 //Out put: 0,1,2,3,4,6,7,8,9

### 3. if else nâng cao
- dùng để kiêm tra nhiều điều kiện 
```typescript
function printLoveNumber(n) {
    if (n % 2 === 0) {
        console.log("So yeu thich là số chắn");
    } else {
        console.log("So yeu thich la so le");
    }
}
printLoveNumber(10_2103);
```
- hoặc có thể dùng ***Ternary operator*** cách viết ngắn gọn if else
```typescript
let age = 2;
let myStatus = '';

let myStatus2 = (age >= 18) ? "Người lớn" : "Trẻ em";
// ? là nếu điêù kiện đúng thì in ra cón

console.log(myStatus2)
let myStatus3 = (age >= 65) ? "Nghỉ hưu" : "Lao động";
console.log(age)
console.log(myStatus3);
```

### 4. Vòng lặp nâng cao

#### 4.1 for...in
- dùng để duyệt qua các thuộc tính của object, array
```typescript
//Đói với Object
const person = {
    name: "ádasdasd",
    age: 30,
    city: "HCM"
};
for (let property in person) {
    console.log(property); // in ra property tên gì
    console.log(person[property]); // in ra value của property
}

//Đối với Array
const arr1 = ["ádadsad", "kokok", 2323];
for (let index in arr1) {
    console.log(index); // in ra index của từng giá trị trong mảng
    console.log(arr1[index]); // in ra các giá trị có trong mảng
}
```
#### 4.2 for...of
- in thẳng ra giá trị của array, object đó lun
```typescript
const arr2 = [122, 222, 2323, "ádasdasd"];
for (let item of arr2) {
    console.log(item); 
}
// Output :
// 122
// 222
// 2323
// ádasdasd
```

### 5. Utils Function

#### 5.1 String Utils:

```typescript
// trim(): cắt đi khoảng trống đầu và cuối mỗi chuối 
//to lowerCase(): chuyển chuỗi thành chữ thường
//to upperCase(): chuyển chuỗi thành chữ hoa
let className = " adasWWWWd ";
console.log(className);
console.log(className.trim());
console.log(className.toUpperCase());
console.log(className.toLocaleLowerCase());

// includes(): trả về giá trị boolean: kiểm tra chuỗi có bao gồm chuỗi con của nó không
console.log(className.includes("WsssssWW"));

//replace(): thay thế một chuỗi này bằng một chuỗi khác (giá trị cũ,  giá tri mới)
console.log(className.replace("a22222da", "QADA")); // nếu giá cũ ko tìm thấy thì giữ nguyên giá trị cũ


//split(): Chia chuỗi thành những mảnh
// chia 3 mảnh 
// nếu chuyền @ vào thì sao
// cứ chạy tới khi phân từ tiếp theo 
let exampleString = "Simple D@o,kokokok, SOo@gmail.com";
const arraNew = exampleString.split("@");
console.log(arraNew);

let fatherText = "PlayWright JavaScript";
//subString(): chia chuỗi cha thành chuỗi con

console.log(fatherText.substring(0, 10)); // gia trị đầu + với gía trị đứng ngay sau số truyền vào
console.log(fatherText.substring(10)); // 10: là từ giá trị 10 đến hết về sau

//indexOf: kiểm tra vị trí của ký tự trong chuỗi
console.log(fatherText.indexOf("J")); // nếu truyễn chuỗi ko nằm trong chuỗi thì in ra -1
```

### 5.2 Array Utils:
```typescript
const users = [
    { id: 1, name: "An", age: 20, active: true },
    { id: 2, name: "Binh", age: 17, active: false },
    { id: 3, name: "Chi", age: 25, active: true },
    { id: 4, name: "Dung", age: 30, active: false }
];
//1. map (): Tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc. Trả về mảng mới có cùng độ dài

const names = users.map(u => u.name);
/// Output: ["An", "Binh", "Chi", "Dung"]

//2. filer(<biến cần lọc> => <điều kiện lọc>): Trả về mảng đã được lọc thoả dkien
const adults = users.filter(u => u.age >= 18);
/* Output: 
  { id: 1, name: 'An', age: 20, active: true },
  { id: 3, name: 'Chi', age: 25, active: true },
  { id: 4, name: 'Dung', age: 30, active: false }
*/

//3. find(): tìm và trả phần tử đầu tiên hoặc undefined
const user = users.find(u => u.id === 3);
/// Output: { id: 3, name: 'Chi', age: 25, active: true }

//4.  reduce(): duyệt mảng và tích luỹ các phần tử thành 1 giá trị dựa trên hàm callback
// array.reduce((accumulator, currentValue) => {
//     return giá_trị_mới_của_accumulator;
// }, initialValue);

const totalAge = users.reduce(
    (sum, u) => sum + u.age,
    0
);
/// Output:  92

//5. some(): trả về khi 1 cái đúng && every(): trả về khi tất cả phải đúng
const hasMinor = users.some(u => u.age < 18);
// true
const allAdults = users.every(u => u.age >= 18);
// false

//6. sort() ; sắp xếp mảng theo thứ tự (mặc định là tăng dần/alphabet)
users.sort((a, b) => a.age - b.age); // tăng dần thoe tuổi
/* Output:
 { id: 2, name: 'Binh', age: 17, active: false },
  { id: 1, name: 'An', age: 20, active: true },
  { id: 3, name: 'Chi', age: 25, active: true },
  { id: 4, name: 'Dung', age: 30, active: false }
*/

//7. push(): thêm mảng ; pop(): xoá cuối mảng ; shift(): xoá đầu mảng ; unshift( thêm đầu mảng
users.push({ id: 5, name: "Ha", age: 22, active: true });
const lastUser = users.pop(); 
const firstUser = users.shift();
users.unshift({ id: 0, name: "Admin", age: 40, active: true });
```

