// setTimeOut():are the timer function which behave as a sheddular to provide a particular delay to a particular function inside which is wrriten inside the set-timmer function .........which return a timmer id 

// clearTimeout(): is used to cancel a timeout that was created with setTimeout()

// setInterval(): is used to run a function repeatedly after a fixed time interval.

// clearInterval(): is used to stop an interval that was started using setInterval()
// =====================================================================================================
// SetTimeOut()

// let a =setTimeout(function(){
//     alert("It is a set-timmer function which return a timmer id ");
// },2000);

// clearTimeout(a);
// console.log(a);
// ======================================================================================================
// let a = setTimeout(function(){
//     console.log("Hello Coders");
// },2000);
// let b = prompt("Do you want to activate a Timmer");
// if("No"==b){
//     clearTimeout(a);
// }
// ========================================================================================================
// setInterval()
// setInterval(function(){
//     console.log("Hello");
// },1000);
// ========================================================================================================
// const sum=(a,b,c)=>{
//     console.log("Yes , I am running",a+b+c);
// };
// setInterval(sum,1000,2,3,4);
// ========================================================================================================
// let count=0;;
// let id = setInterval(function(){
//     count++;
//     console.log("count",count);

//     if(count==5){
//         clearTimeout(id);
//          console.log("Stop counting");
//     }
// },1000);
// =====================================================================================================
// let clock = setInterval(function(){
//     const now = new Date();
//     console.log(now.toLocaleTimeString());
// },1000);

// setTimeout(function(){
//     clearTimeout(clock);
//     console.log("Clock stopped here");
// },10000);
// ===================================================================================  
// // Hoisting: is the feature of js in which declaration will be move at the top of their scope for its code execution
// greet();

// function greet(){
//    console.log("Hello Coders");
// }

// var

// console.log(a);
// var a=34;         undefined print hoga var case me  

// let and const

// console.log(x);
// let x=100;
        //  temprarory dead zone -in case of let and const
        //  (memory allocate hua hostiong hua but initialize nhi hua )
// console.log(y);
// const y=100;
// ========================================================================================================================================= 
// console.log(x);
// var x=100;


// function test(){
//     console.log(x);
//     var x = 1000;
//     console.log(x);
// }
// test();
// console.log(x);
// ==========================================================================================================================================
// var sayHi;
// sayHi();
// sayHi=function(){
//     console.log("Hello Coder");
// };
                            //    TypeError: sayHi is not a function
// ==========================================================================================================================================
// function fun(){
//     console.log(x);
//     var x=100;
//     if(true){
//         var x = 20;
//         console.log(x);
//     }
//     console.log(x);
// }
// fun();
// =================================================Object Destructuring=========================================================================
// const student={
//     name : "Vinoth",
//     age: 22,
//     course : "CSE"
// };
// const {name,age,course} = student;
// console.log(name);
// console.log(age);
// console.log(course);


// const student={
//     name : "Vinoth",
//     age: 22,
//     course : "CSE"
// };
// const {course : DATA} = student;

// console.log(course);


// ============================================================================================================================================
// const Person  = {
//     namae: Tejasree;
//     address :{
        
//     }
// }
// =================================================================================================================================================
// 
//  call() 
//  apply()
//  bind()
// 
// -> The above methods is used to control "this" keyword
// -> By the help of above methods we can call function passing with objects and parameters 


// ===============================================================================================================================================
// / call() : By the help of call method we can immediately call a function 
            // Arguments are passing with this methods by using commas 
// const person1={
//     name : "Chotta Bheem"

// }

// const person2={
//     name : "Indhumathi"
// }

// function introduce(course,city){
//     console.log(` NAME : ${this.name} , COURSE :${course} , City : ${city}`)

// }

// introduce.call(person1,"Save Dholakpur","Dholakpur_Jungle_se");
// introduce.call(person2,"Laddu_Making","Dholakpur_pahad_ke_upar_se");
// ===============================================================================================================================================
// Apply() :  In the Apply() method the function will call immediately 
//            The aruguments are passing in the arrayy form

// const person ={
//      name : "Hiroshi Nohara",
//      role  : "father"
// };
// function info(city,country){
//     console.log(`${this.name} is the  ${this.role} of the Nohara Family and lives in ${city},${country}. `);
// }
// info.apply(person,["KAsukabae" ,"Japan"]);
// ===============================================================================================================================================

// Bind() : By the help of above methods we cant call the function immediately  
        // 1.create a new variable  
        // 2. after that we can bind the function and calling that function

// const person={
//     name : "Tejasree",
// };

// function greet(city){
//    console.log(`${this.name} is living in ${city}`)
// }
// const newfunc = greet.bind(person);
// newfunc("Chennai");
// ===============================================================================================================================================
// const student = {
//     name : "Manoj",
// };
// function result(course,score){
//     console.log(`name : ${this.name} ,course : ${course},score : ${score}`);
// }
// result.call(student,"CSE",8.8);
// result.apply(student,["ECE",8.9]);
// const res1=result.bind(student);
// res1("EE",7.8);
// ===============================================================================================================================================

// Higher oRder Function are those function which takes another function as an arguement or return a another function 

function greet(name){
 console.log("HEllo",name);
}
function process(callback){
    
      callback("CODER");

}
process(greet);

// ===============================================================================================================================================

// return function 

function multiply(a){
    return function(b){
        return a * b ;
    };
}
const double = multiply(2);
console.log(double(3));