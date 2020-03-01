////////////////////////TASK: 1////////////////////////

// function maximum(a, b) {

//     if (a > b) {
//         var maxNumber = a;
//     } else {
//         var maxNumber = b;
//     }
//     return maxNumber;

// }

// var number = maximum(5, 10);

// console.log(number);

////////////////////////TASK: 2////////////////////////

// function check(a) {
//     if (a % 2 === 0) {
//        var b = "evem";
//     } else {
//        var b = "odd"
//     }
//     return b;
// }

// console.log(check(9));

////////////////////////TASK: 3////////////////////////

// function check(a) {
//     if (a >= 100 && a <= 999) {
//         var threeDigit = "yeah";
//     } else {
//         var threeDigit = "no";
//     } return threeDigit;
// } var res = check(9999);
// console.log(res);

////////////////////////TASK: 4////////////////////////

// function check(numOne, numTwo, numThree, numFour) {
//     return (numOne + numTwo + numThree + numFour) / 4;
// }

// var res = check(10, 11, 12, 13);

// console.log(res);


////////////////////////TASK: 7////////////////////////

// function check(a) {
//     var bit = 0;
//     var res = a;
//     while (0 < res) {
//         var leftOver = res % 10;
//         res = (res - leftOver) / 10;
//         bit++;
//     }
//     return bit;
// }

// var result = check(1256543);
// console.log(result);

////////////////////////TASK: 8////////////////////////

// function check(number, value) {
//     var res = 0;
//     for (var i = 0; i < number.length; i++) {
//         if (number[i] === value) {
//             res++;
//         }
//     }
//     return res;
// }

// var a = [2, 4, 7, 8, 7, 7, 1];
// var e = 7;

// var result = check(a, e)

// console.log(result);


////////////////////////TASK: 9////////////////////////

// function check(b) {
//     var res = 0
//     for (var i = 0; i < b.length; i++) {
//         if (b[i] % 2 !== 0) {
//             res += b[i];
//         }
//     }
//     return res;
// }

// var a = [3, 4, 9, 7, 5, 6, 9, 4];

// var result = check(a);

// console.log(result);

////////////////////////TASK: 10////////////////////////

// function check(letter) {
//     var res = 0;
//     for (var i = 0; i < letter.length; i++) {
//         if (letter[i] === "a" || letter[i] === "A") {
//             res++;
//         }
//     } 
//     return res;
// }

// var a = "appearanaces";
// var result = check(a);

// console.log(result);

////////////////////////TASK: 11////////////////////////

// function check(c, d) {
//     var res = "";
//     for (var i = 0; i < d; i++) {
//         res += c
//     }
//     return res;
// }

// var e = 4;
// var a = "Haris Kane\t";

// var result = check(a, e);
// console.log(result);


//////////////////////////////////////////////////////////////////////////////////////////////////////////END


////////////////////////////////////////////////////////////////////////////////////////////////////////
// var a = 17;
// var res = "";
// if (a >= 15) {
//     res = "Mnogo elemenata";
// } else {
//     res = "Malo elemenata";
// }
// console.log(res);
