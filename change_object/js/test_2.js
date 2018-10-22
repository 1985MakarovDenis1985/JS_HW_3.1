var numberOne;
var numberTwo;

mainQestion()

// function askFirstNumber() {
//   return +prompt('Enter please first number...');
// }
//
// function askSecondNumber() {
//   return +prompt('Enter please second number...');
// }

function mainQestion() {

        ask_numberOne();

        if(numberOne !== 0){
          ask_numberTwo();
           if(numberOne === 0 || numberTwo === 0){
                    alert('see you next time')
                    return;
          }else if(numberTwo < numberOne){
                    alert('First number had to lower than second! Try again...');
                    return mainQestion();
          }else if(isNaN(numberOne) || isNaN(numberTwo)){
                    alert('anything was not number')
                    return mainQestion()
          } else{
                    calcSum();
                    alert(calcSum());
          }
        }else if (numberOne === 0){
          alert('See you later')
          return;
        };


        function ask_numberOne() {
          numberOne = +prompt("first number please");
          return numberOne;
        };

        function ask_numberTwo() {
          numberTwo = +prompt("second number please");
          return numberTwo;
        };

        function calcSum(){
          var sum = 0;
          var i = numberOne;
          var secondNumber = numberTwo;
          console.log(i);
          console.log(secondNumber);

          for(i ; i <= secondNumber; i++){
            sum = sum + i;
          }
          return sum + "\nGood work!!!";
        };
      }


// console.log(numberOne);
// console.log(numberTwo);

// var numberOne;
// var numberTwo;
//
// mainQestion()
//
// function askFirstNumber() {
//   return +prompt('Enter please first number...');
// }
//
// function askSecondNumber() {
//   return +prompt('Enter please second number...');
// }
//
// function mainQestion() {
//
//         ask_numberOne();
//
//         if(numberOne !== 0){
//           ask_numberTwo();
//            if(numberOne === 0 || numberTwo === 0){
//                     alert('see you next time')
//                     return;
//           }else if(numberTwo < numberOne){
//                     alert('First number had to lower than second! Try again...');
//                     return mainQestion();
//           }else if(isNaN(numberOne) || isNaN(numberTwo)){
//                     alert('anything was not number')
//                     return mainQestion()
//           } else{
//                     calcSum();
//                     alert(calcSum());
//           }
//         }else if (numberOne === 0){
//           alert('See you later')
//           return;
//         };
//
//
//         function ask_numberOne() {
//           numberOne = askFirstNumber();
//           return numberOne;
//         };
//
//         function ask_numberTwo() {
//           numberTwo = askSecondNumber();
//           return numberTwo;
//         };
//
//         function calcSum(){
//           var sum = 0;
//           var i = numberOne;
//           var secondNumber = numberTwo;
//           console.log(i);
//           console.log(secondNumber);
//
//           for(i ; i <= secondNumber; i++){
//             sum = sum + i;
//           }
//           return sum + "\nGood work!!!";
//         };
//       }
//
//
// console.log(numberOne);
// console.log(numberTwo);
