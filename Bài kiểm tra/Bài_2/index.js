function numberOneTriangle(){}
let a=Number((prompt("Bạn hãy nhập vào số nguyên trong khoảng từ 1-10")));
for (let i=0;i<=a;i++){
    for (let j=0;j<=i;j++){
        document.writeln("*")
    }
    document.writeln("<br/>")
}