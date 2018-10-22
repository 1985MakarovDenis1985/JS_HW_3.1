'use strict';
// var a =3;
// while(a <= 5){
//   console.log(a);
//   a++
// }

// function foo(){
//   var a =0;
//   while(a < 10){
//     console.log(a);
//     a++
//   }
// }
// foo()




// var a = 5;
// while(a ){
//   console.log(a);
//   a--
// }




// function functionName(n) {
//   var sum = 0;
//   for(var i = 1; i <= n; i++){
//     if(i%2 == 0){
//       sum = sum + i;
//     }
//   }
//   return sum;
// };
// console.log(functionName(100));




//
// function askFirstNumber() {
//   return +prompt('Enter please first number...');
// }
//
// function askSecondNumber() {
//   return +prompt('Enter please second number...')
// }
//
// function calcSum(){
//   var sum = 0;
//   var i = askFirstNumber();
//   var secondNumber = askSecondNumber();
//   for(i ; i <= secondNumber; i++){
//     sum = sum + i;
//   }
//   return sum;
// };
//
// alert(calcSum());





function askFirstNumber() {
  return +prompt('Enter please first number...');
}

function askSecondNumber() {
  return +prompt('Enter please second number...')
}



function calcSum(){
  var sum = 0;
  var i = askFirstNumber();
  var secondNumber = askSecondNumber();
  var x = 'Good Work!'



  if(i > secondNumber){
    alert('First number had to lower than second! Try again...');
    return calcSum();
  }else if(isNaN(i) || isNaN(secondNumber)){
    alert('Sorry, anithing wasn`t number')
    return calcSum();
  }else if(i == 0 || secondNumber == 0){
    return ('Ok! See you later..')
  }

  for(i ; i <= secondNumber; i++){
    sum = sum + i;
  }
  return sum + "\nGood work!!!";
};

alert(calcSum());


// var durtyArray = [3, 110, 1, 50, 45, 6, 200, 78];
// var temp = durtyArray[0];
// for(var i = 1; i < durtyArray.length; i++){
//   if(temp < durtyArray[i]){
//     temp = durtyArray[i]
//   }
//   console.log(temp);
// };
