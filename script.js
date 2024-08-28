// // line wise running process 
// console.log('<p>object</p>')

// console.table({ name: "hello", age: 99 })
// console.time("timetaken")

// console.timeEnd("timetaken");
// console.warn("this is your last warninng")
// console.error("this is your last error")

// document.write("<p>hello page ")
// document.write(" hello page ")
// document.write(" hello page</p> ")
// document.write(" hello page ")
// document.write("<p> hello page</p>")

// // variables 
// // keyword == let , var ,const  
// // let name = "gagan"
// // const 

// // scope = 
// // var = globally scoped variable ,
// //we can reassign its value  ; 
// // we can redcalare the varibale 

// // { var count = 9090; }
// // console.log(count)

// // hoisting  = it can automatically move the decalaration of the
// //  varibale to the top 



// let user;
// console.log(user);
// user = "xyz"
// console.log(user);
// // blocked scoped keyword
// //  redcalartion is not possible
// //reassingment is possible ; 

// // {
// //     const pi = 66; 

// // }
// // console.log(pi)


// // blocked scoped variable
// //cannot redecalare the const varibale
// //cannot reassign the const varibale 

// // for (var i = 0; i <= 10; i++) {
// //     var num = "its var keyword";
// //     let count = 10;
// //     console.log(i);
// // }
// // console.log(i, num);
// // console.log(count);



// let a = 10;

// // assignment
// console.log(a-- + --a);
// console.log(a);


// let num1 = 10;
// let num2 = 10;

// console.log(!true && 10 + 10);

// while (num1) {
//     console.log(num1);
//     num1--;
// }





// let arr = [[2, 3, [2, 3, 4]], [3, 4]];
// // length , reverse ,push ,pop  ,shift ,unshift , reduce , sort , map ,foreach , delete , fill , join,slice ,splice
// console.log(num%10)
// let k = Math.floor(num/10)
// num = k
// console.log(num)
// console.log(num%10)
// let j = Math.floor(num/10)
// num =j
// console.log(num)


let num = 1234654675753445;
let rev = 0;

while (num) {
    let tem = num % 10;
    rev = rev * 10 + tem;
    num = Math.floor(num / 10)
}
console.log(rev);






// let  str = num.toString();
//   for(let i=str.length-1; i>=0; i--){
// document.write(Number(str[i]))
// }
// let str = num.toString().split("").reverse().join("");
// console.log(Number(str));
