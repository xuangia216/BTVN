//Read

//Câu 1: Khởi tạo 1 mảng gồm các món ăn
//let menu=["bún chả","bánh cuốn","phở","nem nướng"];

//Câu 2: In ra màn hình theo 2 cách (log, table)
//console.log(menu);
//console.table(menu);

//Câu 3: Hỏi người dùng muốn chọn món ăn thứ i nào? In ra món ăn tại vị trí đó?
//const n=Number(prompt("Bạn vui lòng chọn số thứ tự món ăn bạn mong muốn: 0.Bún chả, 1. Bánh cuốn, 2.Phở, 3. Nem nướng"))

//Câu 4: In ra món ăn tại vị trí đó

//Cách 1:
/*if (n===0){console.log(menu[0]);}
else if (n===1){console.log(menu[1]);}
else if(n===2){console.log(menu[2]);}
else if (n==3){console.log(menu[3]);}
else (console.log("Bạn vui lòng chọn lại chính xác STT món ăn hiện có"));*/


//Create

//Câu 1: In ra màn hình 1 Array chứa tên của 3 cầu thủ bóng đá: Ronaldo, Messi, Neymar.Array
//let playerList=["Ronaldo","Messi","Neymar"];
//console.log(playerList);

//Câu 2: Hỏi người dùng có muốn nhập thêm cầu thủ không bằng cách nhập "Y" hoặc "N"
//let response=(prompt("Bạn có muốn nhập thêm cầu thủ không? Nếu có thì nhập: Y hoặc Nếu không thì nhập: N"));

//Câu 3: Nếu người dùng nhập "Y", hỏi tiếp tên cầu thủ muốn nhập, sau đó thêm cầu thủ mới vào Array ban đầu và in Array mới ra màn hình. 

/*if(response==="Y"){
let newMem =prompt("Nhập tên cầu thủ bạn mong muốn:");
playerList.push(newMem);
alert(playerList);}

//Câu 4: Nếu người dùng nhập "N", in ra màn hình câu "Goodbye"
else if(response==="N"){alert("Goodbye!");
}*/

//Update

//Câu 1: In ra vị trí và tên cầu thủ trong danh sách bt create

//let playerList = ["Ronaldo", "Messi", "Neymar"];
//console.table(playerList);

//Câu 2 Hỏi người dùng có muốn nhập sửa tên cầu thủ không bằng cách nhập "Y" hoặc "N"

//let playerChange = prompt("Bạn có muốn sửa tên cầu thủ không? Nếu có thì nhập: Y hoặc Nếu không thì nhập: N");

//Câu 3 và 4: Nếu người dùng nhập "Y", yêu cầu nhập vào vị trí và tên mới, kiểm tra xem vị trí i nhập vào có tồn tại(check undefine).
//a. Nếu tồn tại thay đổi tên ở vị trí đó
//b. Không tồn tại thì báo lỗi và thoát
//Nếu người dùng nhập N in ra màn hình câu Goodbye

/*if (playerChange === "N"){alert("Good Bye!");}

else if (playerChange === "Y") {
    let index = prompt("Nhập vị trí cầu thủ muốn thay đổi: ");
    let newPlayerName = prompt("Hãy nhập tên mới cầu thủ bạn muốn thay đổi: ");
    if (typeof playerList[index] !== "undefined") {
        playerList[index] = newPlayerName;
        console.log(playerList);} 
    else if (typeof playerList[index] === "undefined") {
        alert("Lỗi - Không tồn tại vị trí này");
    }
}*/



//Delete

//Câu 1: In ra vị trí và tên cầu thủ trong danh sách bt create

/*let playerList = ["Ronaldo", "Messi", "Neymar"];
console.table(playerList);

//Câu 2: Hỏi người dùng có muốn xóa cầu thủ không bằng cách nhập Y hoặc N
let playerDel = prompt("Bạn có muốn xóa cầu thủ không? Nếu có thì nhập: Y hoặc Nếu không thì nhập: N");

//Câu 3 và 4: Nếu người dùng nhập "Y", Yêu cầu nhập vào vị trí và tên mới, kiểm tra xem vị trí i nhập vào có tồn tại (check undefine).
//a.Nếu tồn tại thì xóa
//b. Không tồn tại thì báo lỗi và thoát
//Nếu người dùng nhập N in ra màn hình câu Goodbye
if (playerDel === "N") {
    alert("GoodBye!");
}

else if (playerDel === "Y") {
    let index = prompt("Nhập vị trí cầu thủ cần xóa: ");
    let newPlayerName = prompt("Hãy nhập tên mới cầu thủ bạn muốn thay đổi: ");
    if (typeof playerList[index] !== "undefined") {
        playerList.splice(index, 1);
        playerList.push(newPlayerName);
        console.log(playerList);
    }
}

else if (typeof playerList[index] === "undefined") {
    alert("Lỗi - Không tồn tại vị trí này");
}*/



