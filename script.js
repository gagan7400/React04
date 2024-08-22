// line wise running process 
console.log('<p>object</p>')

console.table({ name: "hello", age: 99 })
console.time("timetaken")

console.timeEnd("timetaken");
console.warn("this is your last warninng")
console.error("this is your last error")

document.write("<p>hello page ")
document.write(" hello page ")
document.write(" hello page</p> ")
document.write(" hello page ")
document.write("<p> hello page</p>")

// variables 
// keyword == let , var ,const  
// let name = "gagan"
// const 

// scope = 
// var = globally scoped variable ,
//we can reassign its value  ; 
// we can redcalare the varibale 

// { var count = 9090; }
// console.log(count)

// hoisting  = it can automatically move the decalaration of the
//  varibale to the top 



let user;
console.log(user);
user = "xyz"
console.log(user);
// blocked scoped keyword
//  redcalartion is not possible
//reassingment is possible ; 

// {
//     const pi = 66; 

// }
// console.log(pi)


// blocked scoped variable
//cannot redecalare the const varibale
//cannot reassign the const varibale 

for (var i = 0; i <= 10; i++) {
    var num = "its var keyword";
    let count = 10;
    console.log(i);
}
console.log(i, num);
console.log(count);