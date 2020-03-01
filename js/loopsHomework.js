//////////////////////////1
// for (var x = 0; x <= 15; x++) {
//     if (x % 2 === 0) {
//         console.log("even :" + x);
//     } else {
//         console.log("odd :" + x);
//     }
// }
///////////////////////2
// var res = 0;

// for (var n = 1; n < 1000; n++) {
//   if (n % 3 === 0 && n % 5 === 0) {
//     res = n + res;
//   }
// }

// console.log(res);
////////////////////////3
// var a = [1, 2, 3, 4];
// var sum = 0;
// var product = 1;
// for (var i = 0; i < a.length; i++) {
//   sum = a[i] + sum;
//   product = a[i] * product;
// }
// console.log(sum, product);
/////////////////////////4
// var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
// var string;
// for (var i = 0; i < x.length; i++) {
//     string = string + "," + x[i];
// }
// console.log(string);
////////////////////////5
// var a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27]
// ];
// for (var i = 0; i < a.length; i++) {
//     console.log("row " + i + ":");
//     for (var j = 0; j < a[i].length; j++) {
//         console.log(a[i][j]);
//     }
// }
/////////////////////////5.1
// var a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27]
// ];

// for (var i in a) {
//     console.log("row " + i);
//     for (var j in a[i]) {
//         console.log(" " + a[i][j]);
//     }
// }
/////////////////////////6
// var sum = 0;
// for (var x = 1; x <= 20; x++) {
//     sum = sum + (x * x);
// }
// console.log(sum);
///////////////////////7
// var students = [
//     ['David', 80],
//     ['Marko', 77],
//     ['Dany', 88],
//     ['John', 95],
//     ['Thomas', 68]
// ];

// var Avgmarks = 0;

// for (var i = 0; i < students.length; i++) {
//     Avgmarks += students[i][1];
//     var avg = (Avgmarks / students.length);
// }

// console.log("Average grade: " + avg);

// if (avg < 60) {
//     console.log("Grade : F");
// } else if (avg < 70) {
//     console.log("Grade : D");
// } else if (avg < 80) {
//     console.log("Grade : C");
// } else if (avg < 90) {
//     console.log("Grade : B");
// } else if (avg < 100) {
//     console.log("Grade : A");
// }

//////////////////////////////////////////8
// for (var num = 0; num <= 100; num++) {

//     var checkForThree = num % 3;
//     var checkForFive = num % 5;

//     if ((checkForThree === 0) && (checkForFive == 0))
//         console.log("FizzBuzz");

//     else if (checkForThree === 0)
//         console.log("Fizz");

//     else if (checkForFive === 0)
//         console.log("Buzz");

//     else
//         console.log(num);
// }

///////////////////////////////////////8.1
// for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0)
//         console.log("FizzBuzz");
//     else if (i % 3 === 0)
//         console.log("Fizz");
//     else if (i % 5 === 0)
//         console.log("Buzz");
//     else console.log(i);
// }