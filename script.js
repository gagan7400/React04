// // // // line wise running process 
// // // console.log('<p>object</p>')

// // // console.table({ name: "hello", age: 99 })
// // // console.time("timetaken")

// // // console.timeEnd("timetaken");
// // // console.warn("this is your last warninng")
// // // console.error("this is your last error")

// // // document.write("<p>hello page ")
// // // document.write(" hello page ")
// // // document.write(" hello page</p> ")
// // // document.write(" hello page ")
// // // document.write("<p> hello page</p>")

// // // // variables 
// // // // keyword == let , var ,const  
// // // // let name = "gagan"
// // // // const 

// // // // scope = 
// // // // var = globally scoped variable ,
// // // //we can reassign its value  ; 
// // // // we can redcalare the varibale 

// // // // { var count = 9090; }
// // // // console.log(count)

// // // // hoisting  = it can automatically move the decalaration of the
// // // //  varibale to the top 



// // // let user;
// // // console.log(user);
// // // user = "xyz"
// // // console.log(user);
// // // // blocked scoped keyword
// // // //  redcalartion is not possible
// // // //reassingment is possible ; 

// // // // {
// // // //     const pi = 66; 

// // // // }
// // // // console.log(pi)


// // // // blocked scoped variable
// // // //cannot redecalare the const varibale
// // // //cannot reassign the const varibale 

// // // // for (var i = 0; i <= 10; i++) {
// // // //     var num = "its var keyword";
// // // //     let count = 10;
// // // //     console.log(i);
// // // // }
// // // // console.log(i, num);
// // // // console.log(count);



// // // let a = 10;

// // // // assignment
// // // console.log(a-- + --a);
// // // console.log(a);


// // // let num1 = 10;
// // // let num2 = 10;

// // // console.log(!true && 10 + 10);

// // // while (num1) {
// // //     console.log(num1);
// // //     num1--;
// // // }





// // // let arr = [[2, 3, [2, 3, 4]], [3, 4]];
// // // // length , reverse ,push ,pop  ,shift ,unshift , reduce , sort , map ,foreach , delete , fill , join,slice ,splice
// // // console.log(num%10)
// // // let k = Math.floor(num/10)
// // // num = k
// // // console.log(num)
// // // console.log(num%10)
// // // let j = Math.floor(num/10)
// // // num =j
// // // console.log(num)


// // // let num = 44441111;
// // // let rev = 0;

// // // while (num) {
// // //     let tem = num % 10;
// // //     rev = rev + tem;
// // //     num = Math.floor(num / 10)
// // // }
// // // console.log(rev);

// // let ar = [2, 3, 3, 3, 2, 1, 1];
// // // simlier element extract out in new arr ; 
// // // count the similierity 
// // // max repeated element 
// // //min repeated element 







// // // let  str = num.toString();
// // //   for(let i=str.length-1; i>=0; i--){
// // // document.write(Number(str[i]))
// // // }
// // // let str = num.toString().split("").reverse().join("");
// // // console.log(Number(str));

// // let obj = { name: "gagan", age: 33, address: "indore", skill: ["react", "javascript", "node"] }

// // let data = [
// //     { name: "gagan", age: 33, address: "indore", skill: ["react", "javascript", "node"] },
// //     { name: "raj", age: 33, address: "indore", skill: ["react", "javascript", "node"] },
// //     { name: "vishal", age: 33, address: "indore", skill: ["react", "javascript", "node"] },
// //     { name: "zunaid", age: 33, address: "indore", skill: ["react", "javascript", "node"] },
// //     { name: "shaad", age: 33, address: "indore", skill: ["react", "javascript", "node"] },
// // ]


// // // for in loop 
// // // i =  index (in array)
// // // i == key (in object)
// // // in loop is working for array , object , string
// // // for (let i in data) {
// // //    console.log(data[i])
// // // }

// // // i== value
// // // of loop is working only for arrary and strings  
// // for (let i of data) {
// //     console.log(i)
// // }

// // let str = "javascript";
// // for (let i in str) {
// //     console.log(str[i])
// // }


// // // class,
// // // Object
// // // inheritance
// // //  polymorpism
// // // abstraction
// // // encapsulation



// // // for (let key in obj) {
// // //     console.log(obj[key])
// // // }
// // // for (let i =0; i < data.length; i++) {
// // //     document.write(data[i].name+" " + data[i].age+" "+ data[i].address," ",'<br>')
// // // }

// // // document.getElementById("data").innerHTML = data.map((v) => {
// // //     return `
// // //    <div class="box">
// // //     <h1> Name : ${v.name}</h1>
// // //     <h2> age : ${v.age}</h2>
// // //     <h2> address : ${v.address}</h2>
// // //     <h2> skill :  <ul>  ${v.skill.map((value) => {
// // //         return `<li> ${value}</li>`
// // //     }).join("")}
// // //     </ul></h2>
// // //    </div>`
// // // }).join("");




// // // basics of oop  (obect oriented programing )
// let user1 = { name: "gagan", age: 99 };
// let user2 = { ...user1 };
// console.log(user1);
// console.log(user2);

// //  spread 
// user2.address = "indore";
// user2.name = "jone";
// user2.age = 100;

// console.log(user1);
// console.log("user2", user2);
// console.log({ ...user2, ...user1 });

// function singer(a, b) {
//     return {
//         name: a,
//         songs: b
//     }
// }

// // console.log(singer.songs);


// function Star(a, b) {
//     this.name = a;
//     this.age = b;
// }

// let shah = new Star("harry", 22);



// let anoth = new Star("check", 78)

// // console.log(shah.name, anoth.age);



// // classes, object 
// class company {
//     constructor(a, b, c, d) {
//         this.employename = a;
//         this.employeid = b;
//         this.employesalary = c;
//         console.log("hello company construtor")
//     }
//     employecard() {
//         return `
//          <div class="box">
//          <h1> NAME ${this.employename}</h1>
//          <h1> ID :  ${this.employeid}</h1>
//          <h1> SALARY ${this.employesalary}</h1>
//          </div>
//          `
//     }
// }

// // inheritance
// // child 
// class companypolicy extends company {
//     constructor(a, b, c, d, e) {
//         console.log("child constructor")
//         super(a, b, c, d)
//         this.employeleave = e
//     }
//     info() {
//         return `
//          <div class="card"> 
//         ${super.employecard()} 
//         <h1> leave count ${this.employeleave}</h1>
//         </div>`
//     }
// }

// let card = new companypolicy("raj", 123, 100000, 77, 12);
// document.write(card.employecard())
// document.write(card.info());



// // class
// // Object,
// // inheitance
// // polymorphism
// // abstraction
// // encapsulation

// // obj2.empolyecard()  out = "first"
// // obj1.empolyecard()  out = "second"
// // obj3.empolyecard()  out = "third";


// class employe {
//     constructor(a, b, c) {
//         this.salary = a;
//         this.incentive = b;
//         this.extra = c;
//     }
//     leave() {
//         console.log("leave")
//     }
//     normalemployee() {
//         console.log("normalemployyee", this.salary)
//     }
//     manager() {
//         console.log("manage", this.salary + this.incentive)
//     }
//     headofoffice() {
//         console.log("head", this.salary + this.incentive + this.extra)
//     }
// }

// let obj = new employe(5000, 1000, 2000);
// obj.normalemployee();
// obj.manager()
// obj.headofoffice();





// //  Abstraction in JavaScript is a technique that reduces complexity in software systems 
// //  by hiding technical details and showing only the functionality. It's a fundamental 
// //  concept in object-oriented programming (OOP).


// // // Encapsulation in JavaScript refers to the practice of wrapping data and behavior 
// // within a single entity, known as an object and limiting external access to the object's
// // internal state. This helps to protect the data and behavior from external interference
// // and misuse.

// class task {
//     constructor(a) {
//         this.internal = a
//     }

//     test(a, b) {
//         return a + b
//     }
//     check(a, b) {
//         console.log(this.test(a, b))
//     }


// }
// let o = new task();
// o.check(33, 66)

// class Person {
//     #name;
//     constructor(name) {
//         this.#name = name;
//         this.gagan = "hello"
//     }
//     get Name() {
//         return this.#name;
//     }
//     set Name(newName) {
//         this.#name = newName;
//     }
//     static fun(a) {
//         console.log(a)
//     }
// }
// // const person = new Person("John Doe");
// Person.fun("elon")

// // modules

// // transfer of data from multiple files  

// // document.write("hello testing")



// let data = [2, 4, 4, 4];
// let keyname = "address";
// let obj = {
//     name: "hi",
//     age: 90,
//     data,
//     [keyname]: "indore",
//     fun(a = 0, b = 0) {
//         console.log(a + b)
//     }
// }
// console.log(obj)
// obj.fun(88);

// let ar = [3, 4, 5];
// console.log(ar);
// ar.data = 33;
// console.log(ar);
// console.log(ar.data);

// ar.map((v, i) => {
//     console.log(v, i)
// });

if (!true)
    console.log("object")
else if (!true)
    console.log("232")
console.log("object");

let data = fetch('https://jsonplaceholder.typicode.com/todos');
data.then((r) => { return r.json() }).then((result) => { console.log(result) }).catch((err) => {
    console.log(err)
})
// console.log(data)
// setTimeout(() => {
//     console.log(data)
// }, 3000);
// console.log("last");

let pro = new Promise(function (resolve, reject) {
    if (true) {
        resolve("all data recived")
    } else {
        reject("error occured")
    }
})


pro.then((r) => { console.log(r) })
    .catch((err) => { console.log(err) })