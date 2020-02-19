////////////////////////////////stars
// var star = "";
// var shape = "";
// for (var n = 0; n < 10; n++) {
//     star = star + "* ";
//     shape += star + "\n";
// }
// console.log(shape);
///////////////////////////////arrays
// var a = [1, 2, 3, 4, 5, 6, 7];
// var res = "";
// for (i = 0; i < a.length; i++) {
//     res += a[i] + "\n";
// }
// console.log(res);
///////////////////////////////////////////////////
// var a = [1, 2, 3, 4, false, 5, "h", true];
// var copy = [];
// for (var i = 0; i < a.length; i++) {
//     if (typeof a[i] === "number") {
//         copy[copy.length] = a[i] * 2;
//     }
// }
// console.log(copy);
// var copy = [];
// var a = [3, 8, 6, 7, 10, 2, false, undefined];
// var sum = 0;
// for (i = 0; i < a.length; i++) {
//     if (a[i] < 7 && typeof a[i] === "number") {
//         copy[copy.length] = a[i];
//         sum = sum + a[i];
//     }
// }
// console.log(sum, copy);
////////////////////////////////////////////////
// var f = [3, 4, false];
// var s = [2, 5, 8];
// var res = [];
// for (i = 0; i < f.length; i++) {
//     res[res.length] = f[i];
//     res[res.length] = s[i];
// }
// console.log(res);
// var f = [3, 4, 5];
// var s = [6, 7, 8];
// var res = [];
// for (i = 0; i < f.length; i++) {
//     res[res.length] = f[i];
// } for (j = 0; j < s.length; j++) {
//     res[res.length] = s[j];
// }
// console.log(res);
// var f = [3, 4, 5];
// var s = [6, 7, 8];
// var res = [];
// for (i = 0; i < f.length; i++) {
//     res[i] = f[i];
//     res[i + f.length] = s[i];
// }
// console.log(res);
//////////////////////////////stars 1.1
// var dimension = 3;
// var square = "";
// for (var j = 0; j < dimension; j++) {
//     var rowOfStars = "";
//     for (var i = 0; i < dimension; i++) {
//         rowOfStars += "* ";
//     }
//     square += rowOfStars + "\n";
// }
// console.log(square);
////////////////////////////////// LOOPS VEZBE 2. PRIMER 1
// var e = 3;
// var a = [5, -4.2, 3, 7];
// var print = "no";
// for (var i = 0; i < a.length; i++) {
//     if (a[i] === e) {
//         print = "yes";
//     }
// }
// console.log(print);
/////////////////////////////////// PRIMER 2
// var a = [-3, 11, 5, 3.4, -8];
// var b = [];
// for (var i = 0; i < a.length; i++) {
//     if (a[i] > 0) {
//         b[i] = a[i] * 2;
//     } else {
//         b[i] = a[i];
//     }
// }
// console.log(b);
/////////////////////////////////// PRIMER 3
// var a = [4, 2, 2, -1, 6];
// var minIndex = 0;
// var min = a[minIndex];

// for (var i = 0; i < a.length; i++) {
//     if (a[i] < min) {
//         min = a[i];
//         minIndex = i;
//     }
// }
// console.log(min, minIndex);
////////////////////////////////// PRIMER 4
// var a = [4, 2, 2, -1, 6];
// var min = a[0];
// var secMin;
// for (i = 0; i < a.length; i++) {
//     if (a[i] > )
// }
////////////////////////////////// PRIMER 5
// var a = [3, 11, -5, -3, 2];
// var sumOfPositives = 0;
// for (var i = 0; i < a.length; i++) {
//     if (a[i] > 0) {
//         sumOfPositives += a[i];
//     }
// }
// console.log(sumOfPositives);
///////////////////////////////////PRIMER 6
// var a = [2, 4, -2, 7, -2, 4, 2];
// var 
///////////////////////////////////PRIMER 9
// var e = 2;
// var a = [4, 6, 2, 8, 2, 2];
// var b = [];

// for (var i = 0; i < a.length; i++) {
//     if (a[i] !== e) {
//         b[b.length] = a[i];
//     }
// }
// console.log(b);
///////////////////////////////////PRIMER10
// var e = 78;
// var p = 3;
// var a = [2, -2, 33, 12, 5, 8];
// var b = []

// for (i = 0; i < a.length; i++) {
//     if (i === p) {
//         b[b.length] = e;
//     }
//     b[b.length] = a[i];
// }
// console.log(b);
