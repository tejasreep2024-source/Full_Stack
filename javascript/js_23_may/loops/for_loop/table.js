// for loop
for(let i=1;i<=10;i++){
    console.log(" 2 X" + i +" = "+ 2*i);
}
// while loop
// let i=1;
// while(true){
//     console.log("hey there hows r u ");
// }
// do while loop
let a = "SNV";
let u = 0;
do {
    console.log(a[u]);
    u++;
} while (u < a.length);

// sum of first 5 numbers
let sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i;

}
console.log("sum: " ,sum);

// for of loop
// let sum=0;
// for(let )

// for in loop

let person={
    name:"tejasree",
    post:"node js developer"
};
for(let key in person){
    console.log(key,person[key]);
}
// diff ntw for inn and for each

let data1="SNV";
for(let val of data1){
    console.log(key);
}