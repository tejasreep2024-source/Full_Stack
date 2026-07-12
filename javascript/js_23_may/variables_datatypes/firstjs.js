console.log("We are java developer");
//1. automatically
a=5;
console.log(a); 

//2. var    reupdate and redeclare  so drawback:bugs
var b=4;
// var b=20;   
 b=78;
console.log(b);
{
    var b=1900;
}
console.log(b);

//3. let

let c=10;
// let c=98;   error no redeclare   but update
c=500;
console.log(c);
{
    let  c=100;
    console.log(c);
}

// 4.const
const d=97;
// const d=98;    no redclare no reupdate
console.log(d);
{
    const d=96;
    console.log(d);
}
// --------------------------------------------------------------------------------------

// DataTypes -Primitive datatypes
let car=23;
let weight=77.88;
let name="Tejasree";
let bag=BigInt("123409876543543");
let card=Symbol("Password");
let click=true;
let t;
let college=null;
