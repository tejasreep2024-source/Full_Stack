// const os = require("os");
// console.log("Platform :"+os.platform());
// console.log("Architecture:"+os.arch());
// console.log("HostName:"+os.hostname());
// console.log("CPU Details:"+os.cpus().length);
// console.log("Total Memory:"+os.totalmem());
// console.log("Free Memory:"+os.freemem());
// =================================================================================================================
// Sorting of an array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort(); 

// console.log(fruits); 
// // =================================================================================
// // Bubble Sorting

// let arr = [40, 30, 10, 20];
// let temp;

// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//1.calculator.js ========================================================================================
// const calculator = require("./calculator");
// console.log(calculator.add(17,3));
// console.log(calculator.sub(17,3));
// console.log(calculator.mul(17,3));
// console.log(calculator.div(17,3));
// // 2.student.js
// const student = require("./student");
// console.log(student.name);

// console.log(student.course);

// console.log(student.age);
// 3.employee.js
// const employee = require("./employee");
// console.log(employee.name);

// console.log(employee.designation);

// console.log(employee.salary);

//4.area.js ========================================================================================
// const area = require("./area");
// console.log(area.square(17));
// console.log(area.rec(17,3));
// console.log(area.circle(3));
// console.log(area.tri(17,3));
// ===============================brower pe print =====================================
// const http = require("http");

// http
// .createServer(function(req , res) {
// res.write("Hello i am Tejuuuuuuuuuuuuuu");
// res.end();
// console.log("Server Connected");
// })
// .listen(3000);
// ========================================================================================
// server is a software in which are application is running
// client is the user side part in which the request is hitted by user  to the server for getting desire output
//  localhost =local machine where the application is running
// Request= is commimg from client side to the server for getting the desired output. 
// response= are the server side result for specified request from the clint side .
// http=hypertext trasffer protocol is the protocol for the communication btw frontend and backend
// create server =for creating a server in node application
// port= number(gatepass)
// listen = method
//===============================================================================================
// const http = require("http");

// const server = http.createServer(function(req, res) {

//     if (req.method === "GET" && req.url === "/Home") {
//         res.end("Home Page");

//     } else if (req.method === "GET" && req.url === "/About") {
//         res.end("About Page");

//     } else {
//         res.statusCode = 404;
//         res.end("Page not found");
//     }

// });

// const Port = 3000;

// server.listen(Port, () => {
//     console.log(`Server is running on Port No ${Port}`);
// });
// ===================================================================================================
// const http = require("http");

// const Server = http.createServer(function(req, res) {

//     if (req.method === "POST" && req.url === "/data") {
//         console.log("Data Created");
//         res.end("Data Created");

//     } else if (req.method === "GET" && req.url === "/getdata") {
//         console.log("Fetch Data");
//         res.end("Fetch Data");

//     } else if (req.method === "PUT" && req.url === "/updateData") {
//         console.log("Update Data");
//         res.end("Update Data");

//     } else if (req.method === "DELETE" && req.url === "/deletedata") {
//         console.log("Delete Data");
//         res.end("Delete Data");

//     } else {
//         res.statusCode = 404;
//         res.end("Page not found");
//     }

// });

// const Port = 3000;

// Server.listen(Port, () => {
//     console.log(`Server is running on Port No ${Port}`);
// });
// 17-08-26========================================================================================2
// const url = require("url");
// const myurl="http://www.example.com/product?id=898";
// const result = url.parse(myurl);

// console.log(result);

// console.log("protocols:",result.protocol);
// console.log("host:",result.host);
// console.log("host name:",result.hostname);
// console.log("path:",result.path);
// console.log("query:",result.query);
// console.log("search:",result.search);
// console.log("query:",result.query);
// console.log("href:",result.href);
// ===========================================================================
// const url = require("url");
// const myurl=new URL("http://www.amazon.com/Gazetts?id=334&item=Mobile&price=100000",);

// console.log("ID:",myurl.searchParams.get("id"));
// console.log("ITEM:",myurl.searchParams.get("item"));
// console.log("PRICE:",myurl.searchParams.get("price"));
// ===========================================================================
// const http = require("http");
// const url = require("url");

// const server = http.createServer((req, res) => {
//     const myurl = new URL(req.myurl,`http://${req.headers.host}`);


// console.log("PathName:" ,myurl.pathName);
// console.log("ID:",myurl.searchParams.get("id"));
// res.end("Data Created");
// });
// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`server is running at port ${PORT}`);

// });
// 18-8-26===========================================================================
// const fs= require("fs");
// fs.writeFile("Student.txt","Mahakal",function(error){
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Data CReated");
//     }
// });
// /============================================================================
// const fs = require("fs");
// fs.readFile("Student.txt","utf8",function(error,data){
//     if(error){
//         console.log(error);

//     }else{
//         console.log("Student:");
//         console.log(data);
//     }
// });
// ================================================================================
// const fs=require("fs");
// fs.appendFile("Student.txt","\nSandhya",function(error){
//     if(error){
//         console.log(error);
//     }else{
//         console.log("New studen added");
//     }
// });
// ===============================================================================
// const fs = require("fs");
// fs.rename("Student.txt","Students.txt",function(error){
//     if(error){
//         console.log(error);
//     }else{
//         console.log("File renamed");
//     }
// });
// fs module=============================================================================
// const fs = require("fs");
// fs.mkdir("Testing",function(error){
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Folder Created");
//     }
// });

// const fs= require("fs");
// fs.unlink("Students.txt",function(error){
//     if(error){
//         console.log(error)
//     }else{
//         console.log("File Deleted");
//     }
// })
//19-08-26(path module) ==============================================================================
// const path = require("path");
// const filePath = path.join("projects","Task","test.txt");
// console.log(filePath);

// =============================================================================================
// const path = require("path");
// const filePath = "home/f1/f11/Testing.txt";
// console.log(path.basename(filePath));
// console.log(path.extname(filePath));
// console.log(path.parse(filePath));

// const path = require("path");
// const result = path.parse("C:\Windows\Boot\Resources.txt");
// console.log(result.name);
// console.log(result.ext);

const path =require("path");
const result = path.resolve("area.js");
console.log(result);
