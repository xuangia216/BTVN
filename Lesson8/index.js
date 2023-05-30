//Bài 1: Nhập số đầu tiên và số thứ 2 bằng prompt sau đó in ra bằng console.log theo cú pháp số lớn hơn lớn hơn số bé hơn.

//Cách 1

/*let a=prompt("Nhập số thứ nhất:");
let b=prompt("Nhập số thứ hai:");
let aNumber = Number(a);
let bNumber = Number(b);
if(aNumber>bNumber){console.log(`Số thứ nhất (${aNumber}) lớn hơn số thứ hai (${bNumber})`)}
else if (bNumber>aNumber){console.log(`Số thứ hai (${bNumber}) lớn hơn số thứ nhất (${aNumber})`)}
else{console.log("Hai số bằng nhau")};*/

//Cách 2

/*let a=prompt("Nhập số thứ nhất:");
let b=prompt("Nhập số thứ hai:");
let aNumber = parseFloat(a);
let bNumber = parseFloat(b);
if(aNumber>bNumber){console.log(`Số thứ nhất (${aNumber}) lớn hơn số thứ hai (${bNumber}`);}
else if (bNumber>aNumber){console.log(`Số thứ hai (${bNumber}) lớn hơn số thứ nhất (${aNumber})`);}
else {console.log("Hai số bằng nhau");}*/

//Question1: Nếu nhập sai thành ký tự chữ thì kết quả trả ra bằng nhau lọc thế nào?

/* Bài 2: Nhập vào một số a từ promt và in ra là đây là một số chia hết hết cho 3. 
Giá trị của phép chia là a/3 nếu a chia hết cho 3. 
In ra số này không chia hết cho 3 nếu a không chia hết cho 3 */

/*let a=prompt("Nhap vao so a");
let aNumber= Number(a);
if (a%3===0){console.log(`Số ${aNumber} chia hết cho 3 và có kết quả là ${aNumber/3}`);}
else (console.log(`Số ${aNumber} không chia hết cho 3`))*/

/* Bài 3: Nhập vào một số a và in ra tháng a theo tháng bằng tiếng anh nếu a > 12 in ra số bạn nhập vượt quá số tháng */

/*let yourMonth = prompt("Nhập tháng bạn cần biết dưới dạng tiếng Anh");
let yourMonthNum = Number(yourMonth);
switch (yourMonthNum) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Bạn đã nhập quá số tháng")
}*/

/*bài 4 :  Tạo máy tính cơ bản với các chức năng: +, -, * và /.
- Sử dụng prompt để nhập phép tính
- Sử dụng prompt để nhập 2 số cần tính.
- Tạo biến result để lưu lại kết quả mỗi phép tính
- Sử dụng 2 cách khác nhau (if...else và switch)*/

//Cách 1: Switch Case

/*let phepTinh= prompt("Nhập vào phép tính: +,-,*,/");
let b = prompt("Nhập vào số thứ nhất:");
let c = prompt("Nhập vào số thứ hai:");

switch (phepTinh) {
    case "+":
        console.log(`Tổng của hai số là: ${Number(b) + Number(c)}`);
        break;
    case "-":
        console.log(`Hiệu của hai số là: ${Number(b) - Number(c)}`);
        break;
    case "*":
        console.log(`Tích của hai số là: ${Number(b) * Number(c)}`);
    case "/":
        if (Number(c)=0){console.log(" Không thể thực hiện vì mẫu bằng 0")}
        else{console.log(`Phép chia hai số là: ${Number(b)/Number(c)}`);}
        break;
    default:
    console.log("Không thể thực hiện phép tính, hãy thử lại");
}*/

//Cách 2: If else 

/*let a = prompt("Nhập phép tính: +, -, *, /,");
let b = prompt("Nhap so thu nhat:");
let c = prompt("Nhap so thu hai:");

if (a === "+") {
    alert(`Tổng của hai số là: ${Number(b) + Number(c)}`);
}
else if (a === "-") { alert(`Hiệu của hai số là:${Number(b) - Number(c)}`); }
else if (a === "*") { alert(`Tích của hai số là: ${Number(b) * Number(c)}`); }
else if (a === "/" && Number(c) !== 0) { alert(`Phép chia của hai số là: ${Number(b) / Number(c)}`); }
else alert("Không thể thực hiện phép tính, hãy thử lại");*/

//Bài 5: Nhập số a từ prompt sau đó in ra các số nguyên tố từ 1-> a bằng console.log
// Chưa biết làm

//Bài 6: Viết trương trình nhập vào 3 số a,b,c là 3 biến trong phương trình bậc 2 .tìm ra các nghiệm của phương trình

/*const a = Number(prompt("Nhập biến a:"));
const b = Number(prompt("Nhập biến b:"));
const c = Number(prompt("Nhập biến c:"));
delta = b*b-4*a*c;

if (delta < 0) { console.log("Phương trình vô nghiệm"); }
if (delta > 0) { console.log(`Phương trình có 2 nghiệm phân biệt là: X1 = ${(-b + Math.sqrt(delta))/(2*a)} và X2 =${(-b -Math.sqrt(delta))/(2*a)}`); }
if (delta = 0) { console.log(`Phương trình có 2 nghiệm kép là: X1=X2= ${-b/(2*a)}`); }*/

//Bài 7:  Nhập vào 1 số và in ra mùa theo mùa ở việt nam nếu số đó từ 1-3 là xuân ,4-6 :hạ ......

/*let a=prompt("Nhập vào số bất kỳ:");
let aNumber=Number(a);
if(aNumber>=1&&aNumber<=3){console.log("Mùa xuân");}
else if (aNumber>=4 && aNumber<=6){console.log("Mùa hạ");}
else if (aNumber>=7 && aNumber<=9){console.log("Mùa thu");}
else if (aNumber>=10 && aNumber<=12){console.log("Mùa đông");}
else (console.log("Không xác định được mùa, hãy thử lại"));*/



