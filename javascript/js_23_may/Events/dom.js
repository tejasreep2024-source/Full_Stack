// let Heading = document.getElementById("Heading");
// Heading.innerText="I am a Fullstack Developer";
// console.dir(window);

// document.body.style.background="  orange";

// let boxes=document.getElementsByClassName("box");
// for(i=0;i<=boxes.length;i++){
//     boxes[i].innerText=`Tejasree ${i+1}`;
// }

// let para = document.getElementsByTagName("p");
// for(let i=0;i<para.length;i++){
//     para[i].style.color= "red";
// }

// let box = document.querySelector(".box");
// box.innerText="Only First Box";

// let divs = document.querySelectorAll(".box");
// let idx=1;
// for(div of divs){
//     div.innerText=`Unique ${idx}`;
//     idx++;
// }

// let para = document.getElementsByTagName("p");
// for(let i=0;i<para.length;i++){
//     para[i].style.color= "red";
// }
// let circle = document.querySelector(".circle");
// circle.innerText="rishabh";
// ========================================================================================


// let BTN =document.getElementById("btn");
// BTN.onclick=()=>{
//     let a=5;
//     let b=2;
//     let c=a+b;
// console.log("Add : " ,c);
// };


// function getMessage(){
//     alert("Welcome  JavaScript");
// }

// let BTN =document.getElementById("btn");
// BTN.addEventListener("click",function(){
//     document.getElementById("text").innerText="HEY Stranger";
//     document.getElementById("text").style.color="Blue";
// })

// let  boxes = document.getElementsByClassName("box");
// BTN.addEventListener("mouseover",function(){
//     for(box of boxes){
//         box.style.background="pink";
//     }
// })


// Take a button,which is used for toggling the mode=dark or  light ,
// let BTN =document.getElementById("ModeChange");

// let darkMode=false;

// BTN.addEventListener("click",function(){
//     if(darkMode==false){
//         document.body.style.Background="purple";
//         // document.body.style.Background="White";
//         darkMode=true;
//     }
//     else{
//         document.body.style.Background="pink";
//         // document.body.style.Background="black";
//         darkMode=false;
//     }
// })
// ======================================================================================

// console.dir(window);
// window.location.href="https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&oq=hgoog&gs_lcrp=EgZjaHJvbWUqFwgBEC4YChgLGIMBGMcBGLEDGNEDGIAEMgYIABBFGDkyFwgBEC4YChgLGIMBGMcBGLEDGNEDGIAEMhEIAhAAGAoYCxiDARixAxiABDIOCAMQABgKGAsYsQMYgAQyEQgEEAAYChgLGIMBGLEDGIAEMg4IBRAAGAoYCxixAxiABDIOCAYQABgKGAsYsQMYgAQyDggHEAAYChgLGLEDGIAEMg4ICBAAGAoYCxixAxiABNIBCDMwMTJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8";
// window.alert("Hey Stranger");
// window.confirm("Do you really want to Submit?");
// window.open("https://www.google.com");


// Conversion Object to JSON vice-versa 
let bioData={
    name:"Shivani",
    age:"22",
    Designation:"Student",
};
console.log(bioData);
console.log(bioData.name);
let jsonData = JSON.stringify(bioData);
console.log(jsonData);

// json to object
let objdata=JSON.parse(jsonData);
console.log(objdata);