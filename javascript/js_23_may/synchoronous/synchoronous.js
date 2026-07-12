// synchoronous programming
// console.log("Task1");
// console.log("Task2");
// console.log("Task3");
// --------------------------------------------------------------------------------------------------------

//setTimeout=>  setTimeout is in-Buit function of js which provide some dealy in execution of thr code

// function hello(){
//     console.log("Gives Delay");
// }
// setTimeout(hello, 2000);

// ---------------------------------------------------------------------------------------------------------

// Asynchoronous programming

// function hello(){
//     console.log("Gives Delay");
// }
// setTimeout(hello, 2000);
// console.log("Task1");
// console.log("Task2");
// setTimeout(()=>{ 
//     console.log("Smile please");
// },4000)
// console.log("Task3");
// console.log("Task4");
// ----------------------------------------------------------------------------------------------------------
// callBack function=> Are those function  which is used to pass as an argument to another function

// function sum(a,b){
//     console.log(a+b);
// }

// function calc (a,b,callback){
//     callback(a,b);
// }
// calc(17,3,sum);
// -----------------------------------------------------------------------------------------------------------

// callback hell=> when we use nested callback functions one inside another and so on , one inside a other callback function and so on ,so it looks like pyramid it makes the code complex..

// function getData(dataId,nextId){
//     setTimeout(()=>{
//         console.log("Data",dataId);

//         if(nextId){
//             nextId();
//         }
//     },1000);
// }
// getData(1,()=>{
//      console.log("callback hell1");
//     getData(2,()=>{
//        console.log("callback hell2");
//          getData(3,()=>{
//            console.log("callback hell3");
//             getData(4,()=>{
//                 console.log("callback hell4");
//             });
//         });
//     });
// });
// ====================================================================================================================
// function login(Username,password){
//     setTimeout(()=>{
//         console.log("Credential:",Username);

//         if(password){
//             password();
//         }
//     },2000);
// }
// login("Tejasree",()=>{
//      console.log("password 1");
//     login("Khushi",()=>{
//        console.log("password 2");
//          login("Varun",()=>{
//            console.log("password 3");
//             login("StRangeR",()=>{
//                 console.log("password 4");
//             });
//         });
//     });
// });
// -------------------------------------------------------------------------------------------------------------
// promise-promise is a function which eventually the completion of task ..

// let promise =  new promise((resolve,reject)={
// resolve("succedd")        reject("failure")
//  })


// 3 states in promises:

// pendinig-task which is being processed
// fullfilled-task completed
// rejeted-task failed or rejected due to unwanted errors
// ------------------------------------------------------------------------------------------------------------------
// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            resolve("Success");
//         },2000);
//     })
// }
// let promise=getData();
// console.log(promise);
// // then method : is used when we want to see the reselt
// promise.then((res)=>{
//     console.log(res);
//     console.log(promise);
// });

// --------------------------------------------------------------------------------------------------------------
// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            reject("Some error");
//         },2000);
//     })
// }
// let promise=getData();
// console.log(promise);
// // then method : is used when we want to see the reselt
// promise.catch((err)=>{
    // errors show karne keliye :catch 
//     console.log(err);
//     console.log(promise);
// });
// --------------------------------------------------------------------------------------------------------
// function getData(userId){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data",userId);
//             resolve("Success");
//         },2000);
//     });
// }
// let promise=getData(304);
// console.log(promise);
// promise.then((res)=>{
//     console.log(res);
//     console.log(promise);

// });
// -------------------------------------------------------------------------------------------------------
// promise chaining 

// function async1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             resolve("Some Error");
//         }, 2000)
//     });
// }

// function async2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve("Again Success");
//         }, 2000);
//     });
// }

// async1().then((res) => {
//         console.log("Fetching Data1");
//         console.log(res);
//         return async2();

//     })
//     .then((res) => {
//         console.log("Fetching Data2");
//         console.log(res);
//     });
// ======================================================================================================
// async await: is a asynchoronus function which is built on the top of promise ...
// await keyword=>it gives pause after the execution of code 
// async keyword:is used to return promise after completion of resolve or reject 
// await is used to give the pause of the exectuion of the code until the response will obtain ...

// async function greet(){
//     return "Hello";
// }
// greet().then(console.log);
// ---------------------------------------------------------------------------------------------------
// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("fetching Data");
//         },2000);
//     });
// }
// async function getCall(){
//     const response = await getData();
//     console.log(response);
// }
// getCall();
// -----------------------------------------------------------------------------------------------------
// function getFunc(){
//     return new Promise((resolve,response)=>{
//         setTimeout(()=>{
//             resolve(100);
//         },2000);
//     });
// }
// async function getResult(){
//     console.log("fetching A");
//     const response = await getFunc();
//     console.log(response);
//     console.log("fetching B");
    
// }
// getResult();

// console.log("Fetching c");
// ---------------------------------------------------------------------------------------------------------------------

// async await :error handling is possible through try catch ...

// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject("Some Error");
//         },2000);
//     });
// }
// async function getResult() {
//     try{
//         console.log("Hello");
//         const response = await getData();
//          console.log("Coder");
//     }catch(error){
//         console.log(error);
//     }   
// }
//  getResult();
// -----------------------------------------------------------------------------------------------------------------

// function async1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("data 1");
//              resolve();
//         },2000);
//     });
// }function async2(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("data 2");
//             resolve();
//         },3000);
//     });
// }
// async function getData(){
//    console.log("Start Fetching Data.....");
//    await async1();
//    await async2();
//    console.log("completed");
// }
// getData();
// ----------------------------------------------------------------------------------------

// -----------------------------------closure function------------------------------------------

// function outter(){
//     let message = "Hey Stranger";

//     function inner(){
//         console.log(message);
//     }
//     return inner;
// }
// const myFunction = outter();
// myFunction();

// function createcount(){
//     let count=0;

//     return function(){
//         count++;
//         console.log(count);

//     };
// }
// const counter = createcount();
// counter();
// counter();
// counter();
// using independent function for calling outter function
// function createcount(){
//     let count=0;

//     return function(){
//         count++;
//         console.log(count);

//     };
// }
// const counter1 = createcount();
// const counter2 = createcount();
// counter1();
// counter2();
// ------------------------------------------------------------------------------------------
// function banckaccount(){
//     let balance =1000;

//     return function(){
//         console.log(balance);
//     };
// }
// const checkbalance=banckaccount();
// checkbalance();
// ------------------------------------------------------------------------------------------
function account1(){
    let username = "Rishabh";
    

}
// ----------------------------------------------------------------------------------------
// ===============================================currying===========================================================
// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         };
//     };
// }
// console.log(add(20)(30)(40));
// ====================================================================================================

// function multiply(a){
//      return function(b){
//          return a*b;
//     };
// }
// const double = multiply(2);
// const triple = multiply(3);
// console.log(double(10));
// console.log(double(20));
// console.log(triple(30));
// console.log(triple(40));
// =======================================================================================================
// function table(a){
//     return function(b){
//     return a*b;
//     };
// }
// const double = table(2);
// console.log(double(1));
// console.log(double(2));
// console.log(double(3));
// console.log(double(4));
// console.log(double(5));
// console.log(double(6));
// console.log(double(7));
// console.log(double(8));
// console.log(double(9));
// console.log(double(10));

// function table(a) {
//     return function(b) {
//         return a * b;
//     };
// }

// const double = table(2);

// for(let i = 1; i <= 10; i++) {
//     console.log(double(i));
// }
// ----------------------------------------------------------------------------------------------------------
function  greet(greeting){
    return function(name){
        return `${greeting} ${name}`;
    };
}

const sayHello = greet ("Hello");
console.log(sayHello("Rishhh"));
console.log(sayHello("Priyaa"));
// ========================================Discount Calculator====================================================
function discountCalculator(percent){
    return function(price){
        return price-(price)*(percent)/100;
    };
}
const tenpercentDisocunt = discountCalculator(10);
const twentypercentDisocunt = discountCalculator(20);
console.log(tenpercentDisocunt(1000));
console.log(twentypercentDisocunt(1000));
// ==============================================GST CALCULATOR==============================================
function gstCalculator(gstpercent) {
    return function(price) {
        return price+(price*gstpercent)/100;
    };
}
const gst18percent = gstCalculator(18);
const gst5percent = gstCalculator(5);



console.log(gst18percent(100));   
console.log(gst5percent(500));   
//  ===================================================================================================