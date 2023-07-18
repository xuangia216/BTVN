//Bài tập thực hành
//Bài số 1
/*const originalArray = ['a','b','c','d','e','f'];
const newArray = originalArray.reverse();
console.log(newArray)*/


//Bài số 2
/*function unique(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i])
      }
    }
    return newArr
  }
  console.log(unique([1, 2, 3, 5, 4, 2, 6, 4]))*/

//Bài số 3: 
/*function array_unique(array){
    array.sort();
    let max =[0,0];
    let count =1;
    for (let i = array.length-1; i > 0; --i) {
        if (array[i] == array[i-1]) ++count; 
        else{
             if (max[1] < count){ 
                  max[0] = array[i];
                  max[1] = count;   
             }
             count = 1;
        }
    }
    console.log( "Phần tử "+max[0]+" xuất hiện nhiều nhất với "+max[1]+" lần");
}


let array = [ 1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3 ];
array_unique(array);*/



