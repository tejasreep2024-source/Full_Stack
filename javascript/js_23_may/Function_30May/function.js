//  Function->It is block of code ,used to perform specific task,when it is invoked

// function function_name(){
//     // code
// }

// // function_name()
// -----------------------------------
// Parameter 
// function function_name([[ara1,para2]){
//     // code
// }

// function_name(para1,para2);

// function myFunction(){
//     console.log("My Program");
// }
// myFunction();
// -------------------------
// Parameter
// function Add(a,b){
//     console.log("Sum " +(a+b));
// }
// Add(4,6);

// Arrow Function->arrow function introduced by ES6
// It is Compact in nature

// const sum=(a,b)=>{
//     console.log("sum: " +(a+b));
// }
// sum(6,6);

// const sum1=(a,b)=>a+b;
// console.log(sum1(2,4));

// const square=(x)=>x*x;
// console.log(square(4));

// map function used to iterate the elements of array 
// its is stored the elements of that array into new array,if we want to manupliate that array we can easily manuplate by using map funaction
// let arr=[3,5,4,3,5];
// let double=arr.map((arr)=>2*arr);
// console.log(double);

// Filter
// By this filter we can filter the data ans stored in new array
// let age=[12,45,67,11,22,23,23,56];
// let Adults=age.filter((age)=>age>=18);
// console.log(Adults);

// Normal Function
// const  person={
//     name:"Aditi",
//     age:34,

//     greet : function (){
//         console.log(this.name);
//     },
// }
// person.greet();

// For Arrow Function
// const Data="Aditi";
// const  person={
//     name:"Aditi",
//     age:34,

//     greet :  ()=>{
//         console.log(this.name);
//     },
// }
// person.greet();
// // If we use 'THIS' keyword inside a Arrow Function ....so it will access the Global Elements 


// count vowel->"Education"->by using arrow function
// let count=0;
// const CountVowel=(str)=>{
//     for(let str1 of str ){
//         if(str1=='a'||str1=='e'||str1=='i'||str1=='o'||str1=='u'||str1=='A'||str1=='E'||str1=='I'||str1=='O'||str1=='US'){
//             count++;
//         }
//     }
//     console.log(count);

// };
// CountVowel("Tommarow");


// -----------------------------------------------------------------------------------------
// forEach()=> it is used to apply on an array , to iterate the elements 
// let array=[1,2,3,4,5];
// array.forEach((arr)=>{
//     console.log(arr);
// });

// let fruits =["Apple","banana","orange"];
// fruits.forEach((fruit)=>{
//     console.log(fruit);
// });

// let s=[1,2,3,4];
// s.forEach((sst)=>{
//     console.log(sst*2);
// });


// let a=[1,2,3,4,5];
// const squareFunc = (num)=>{
//     console.log(num*num);
// };
// a.forEach(squareFunc);
// --------------------------------------------------------------------------
// callback function = are those function which are passed as a arguement to another function 


// function greet(name){
//     console.log("Hey ! " , name);
// }
// function process(callback){
//     callback("Rahul");
// }
// process (greet);

// // sum 
// function Addition (a,b){
//     console.log(a+b);
// }
// function processsum(a,b,callback){ 
//     callback(a,b);
// }
// processsum(2,3,Addition);
// /===================================================================================
//Reduse method-used to convert array into single element

// let array =[11,22,33,44];
// array.reduse((accumulator, currentvalue )=>{
//     return accumulator + currentvalue;
// },initialize);

// let sum= array.reduce(( acc,curr)=>{
//     return acc +curr;
// },0)
// console.log(sum);

let fruits= [" Apple","Bananana","Apple","Bananana","Orange"];
const count=fruits.reduce((acc,curr)=>{
    acc[fruits]=(acc[fruits]||0)+1;
    return acc;
});
console.log(count);