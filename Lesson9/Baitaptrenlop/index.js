//Bài 1:
/*const n= Number(prompt("Nhập vào 1 số n"));
for(i=0;i<=n;i++){
    if(i%2===0){`${console.log("Đây là số chẵn")}${console.log(i)}`;}
    else if(i%2===1){`${console.log("Đây là số lẻ")}Đây là số lẻ ${console.log(i)}`;}
}*/

//Bài 2: Chưa biết cách làm

//Bài 3:
/*let num = prompt("Nhập vào 1 số bất kì để tính ra giai thừa của số đó");
let factorialResult = 1;
for (let i = 1; i <= num; i++) {
      factorialResult *= i;
    }
console.log(factorialResult);*/



//Bài 4:Tính tổng các số từ 1 đến n: 1+2+3+...+n

/*let num=prompt("Nhập vào số n để tính tổng các số từ 1 đến n");
let sumResult=0;
for(i=1;i<=num;i++){sumResult+=i;}
console.log(sumResult);*/



//Bài 5: Tìm ra các ước của n
//VD: ước là a thì a<n và a%n===0

/*const num=Number(prompt("Nhập vào số nguyên dương n"));
for (i=1;i<=num;i++){
    if(num%i===0){console.log(i);}
}*/

//Bài 6: Tìm ra xem n có phải số nguyên tố không (số chỉ có ước là 1 và chính nó)
/*let n=Number(prompt("Nhập số n"));
    let flag = true;
    if (n < 2){
        flag = false;
    }
    else if (n == 2){
        flag = true;
    }
    else if (n % 2 == 0){
      flag = false;
    }
    else{
        for (var i = 3; i < n-1; i+=2)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
    if (flag == true){
       console.log(" Đây là số nguyên tố");
    }
    else{
    console.log("Đây không phải là số nguyên tố");
    }*/

//Bài 7: Vẽ hình vuông đặc và rỗng có cạnh độ dài là n ký hiệu *







