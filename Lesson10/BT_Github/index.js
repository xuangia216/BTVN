// Bài số 1:

// cho 1 mảng 
// arrayData = [
//    {
//       id:1,
//       name:'Nguyen Van A',
//       age:15
//    },
//    {
//       id:2,
//       name:'Nguyen Van B',
//       age:16
//    },
//    {
//       id:3,
//       name:'Nguyen Van C',
//       age:17
//    },
//    {
//       id:4,
//       name:'Nguyen Van D',
//       age:18
//    },
// ]

// console.log ra dữ liệu mỗi object trên 1 dòng theo quy tắc 
// STT: 1 - Họ tên : Nguyen Van A - 15 tuoi
// STT: 2 - Họ tên : Nguyen Van B - 16 tuoi
// STT: 3 - Họ tên : Nguyen Van C - 17 tuoi
// STT: 4 - Họ tên : Nguyen Van D - 18 tuoi
//-----------------------------------------

/*let person1 ={
    id: 1,
    name: 'Nguyen Van A',
    age: 15,
};

let person2 ={
    id: 2,
    name: 'Nguyen Van B',
    age: 16,
};

let person3 ={
    id: 3,
    name: 'Nguyen Van C',
    age: 17,
};

let person4 ={
    id: 4,
    name: 'Nguyen Van D',
    age: 18,
};

console.log("STT:",person1.id,"- Họ tên:",person1.name, "-",person1.age,"tuoi")
console.log("STT:",person2.id,"- Họ tên:",person2.name, "-",person2.age,"tuoi")
console.log("STT:",person3.id,"- Họ tên:",person3.name, "-",person3.age,"tuoi")
console.log("STT:",person4.id,"- Họ tên:",person4.name, "-",person4.age,"tuoi")*/


//-----------------------------------------



//Bài số 2:
//function getUpperCaseName(string){}
// Expected results:
//console.log(getUpperCaseName("Nguyen van a")) // "NGUYEN VAN A"
//console.log(getUpperCaseName("nGuyen vAn C")) // "NGUYEN VAN C"
//-----------------------------------------

/*console.log(person1.name.toUpperCase());
console.log(person2.name.toUpperCase());
console.log(person3.name.toUpperCase());
console.log(person4.name.toUpperCase());*/
//-----------------------------------------



//Bài số 3:
//function joinWithCharacter(array, charactor) {}
// Ví dụ khi sử dụng
//var cars = ['Honda', 'Mazda', 'Mercedes'];
//var result = joinWithCharacter(cars, ' - ');
//console.log(result); // Expected: "Honda - Mazda - Mercedes"
//-----------------------------------------

/*const cars =['Honda', 'Mazda', 'Mercedes'];
let result =cars.join("-");
console.log(result);*/

//-----------------------------------------


//Bài số 4: 
// Viết hàm tại đây
// Ví dụ sử dụng
/*var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);
console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']*/
//-----------------------------------------

/*let animals = ['Monkey', 'Tiger', 'Elephant'];
console.log(animals);
let result = animals[animals.length-1]
console.log(`A last Element in array is: ${result}`);*/

//-----------------------------------------


//Bài số 5:
 // Viết hàm tại đây
// Ví dụ sử dụng
//var animals = ['Monkey', 'Tiger', 'Elephant'];
//var result = getFirstElement(animals);
//console.log(result); // Expected: "Monkey"
//console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']
//-----------------------------------------

/*let animals = ['Monkey', 'Tiger', 'Elephant'];
console.log(animals);
console.log(`A first element in array is: ${animals[0]}`);*/

//-----------------------------------------


//Bài số 6: 
/*const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]
// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]*/

/*let sports =[
    {name:"Bóng đá",like: 10},
    {name:"Bơi lội",like: 5},
    {name:"Bóng rổ",like: 6},
];
sports.sort((a,b)=>a.like-b.like);
console.log(sports);
let mostFavoriteSport = sports[sports.length-1];
console.log("The most favorite sport is:")
console.log(mostFavoriteSport);*/

//-----------------------------------------


//Bài số 7:
/*
var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]
//Expected results:
console.log(getTotalGold(sports)) // Output: 23*/
/*let sports =[
    {name:"Bơi lội",gold: 11},
    {name:"Boxing",gold: 3},
    {name:"Đạp xe",gold: 4},
    {name:"Đấu kiếm",gold: 5},
];

const sum = sports.reduce((accumulator,object)=>{return accumulator +object.gold;},0)
console.log(`Total gold medal is ${sum}`);*/

//-----------------------------------------

//-----------------------------------------

//Bài số 8: 
/*var listStudent = [
    { id: 1, name: "Nguyen Van A", age: 15 },
    { id: 2, name: "Nguyen Van B", age: 13 },
    { id: 3, name: "Nguyen Van C", age: 18 },
    { id: 4, name: "Nguyen Van D", age: 14 },

];

function sortArray(arr){
}

console.log(sortArray(listStudent)) 
//output [
    // { id: 2, name: "Nguyen Van B", age: 13 },
    // { id: 4, name: "Nguyen Van D", age: 14 },
    // { id: 1, name: "Nguyen Van A", age: 15 },
    // { id: 3, name: "Nguyen Van C", age: 18 },
// ]*/

/*let listStudent = [
    { id: 1, name: "Nguyen Van A", age: 15 },
    { id: 2, name: "Nguyen Van B", age: 13 },
    { id: 3, name: "Nguyen Van C", age: 18 },
    { id: 4, name: "Nguyen Van D", age: 14 },

];

listStudent.sort((a,b)=> a.age-b.age);
console.log(listStudent)*/












