'use strict';

var arr = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia nam, veniam cumque, dolor, nulla porro architecto a, itaque laborum labore eum."

var arrStr;
splitArr()

  var targetOd = askFirst();
  var changeOd;
    if(targetOd === null){
      alert("Stop")
    }else{
      changeOd = askSecond();
      if(changeOd === null){
        alert("bye - bye")
      }
      changeObject();
      joinAndComplete();
    }

//========FUNCTIONS

function splitArr() { // разбили на массив
  arrStr = arr.split('');
}

function askFirst() { // спросили первый
  return prompt("Enter target");
};
function askSecond() { // спросили второй
  return prompt("what kind object do you want to use instead?");
}

function changeObject() { // замена первого на второй
  for (var i = 0; i < arrStr.length; i++) {
    if(arrStr[i] == targetOd){
      arrStr[i] = changeOd;
    }
  }
}

function joinAndComplete() { // соединение массива
  var arr = arrStr.join('');
  console.log(arr);
}
//===============
