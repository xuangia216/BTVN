const a=parseInt(prompt('Nhập vào số a:'));
const b=parseInt(prompt('Nhập vào số b:'));
let sum=0;
for (var i=a; i<=b;i++){let flag=0;
for (let j=2;j<i;j++){
    if(i%j==0){flag=1;
    break;
}
    if (i>1 && flag==0){sum=sum+i}
}
}
console.log(sum);


