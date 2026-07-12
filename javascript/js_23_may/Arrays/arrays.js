let arr=[2,34,34,34];
let arr1=["hello","how","are"];
let arr2=["one",1,2];

for ( let i = 0;i < arr2.length ; i++ ){
    console.log(arr2[i]);
}

// student score in class=[34,56,67,23,34]
// average

let score=[34,56,67,23,34];
let total=0;
for(let s=0;s<score.length;s++){
    total=total+score[s];
}
let avg=total/score.length;
console.log("avg:",avg);

// items=[22,44,55,77,99]
// offer=10%
// new price of item

let items=[22,44,55,77,99];
let offer=10;

let new_items=[];
for(let o=0;o<items.length;o++){
    new_items[o] = items[o]-(items[o]*offer/100);
}
console.log(new_items);


// array methods
let fruits=["Mango","Apple","Banana"];
fruits.push("Kiwi");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("JAckfruit");
console.log(fruits);

fruits.shift();
console.log(fruits);

let vege=["ladyfinfer","onion"];
let veg2=["beetroot","Potato"];
let color=["Red","Blue","Black"];
let newarr = vege.concat(veg2,color);
console.log(newarr);

let color1=["Red","Blue","Black"];
let newarr1 = color.toString();
console.log(newarr1);

// Slice(startIndex.EndIndex)
let fruit=["Mango","Apple","Banana"];
    let narr=fruit.slice(1,3);
    console.log(narr);

// splice(add,remove,replace)->(startindex,delIcount,newElement)
let spl=[1,2,3,4,5];
spl.splice(2,2,100,101);
console.log(spl);

// add element
let spl1=[10,20,30,40];
spl1.splice(1,0,100);
console.log(spl1);

// remove element
let spl2=[22,33,44,55,66];
spl2.splice(3,1);
console.log(spl2);

// replace 
let spl3=[100,200,300,400];
spl3.splice(2,1,1000);
console.log(spl3);

// create an array of companies ->Bloomberg,Microsoft,Uber,Google
// Remove 1st company
// Replace uber with ola
// Add Amazon company at last

let companines=["Boomberg","Microsoft","Uber","Google"];
companines.shift();
console.log(companines);

companines.splice(1,1,"Ola");
console.log(companines);

companines.push("Amazon");
console.log(companines);


// Spread Operator-It is used to expand an array.Separate out the element individually.
let spread=[1,2,3,4,5];
let spread1=[6,7,8,9];
let combine=[...spread, ...spread1];
console.log(combine);

let rrr=[20,30];
let updaterrr=[10, ...rrr ,30,40];
console.log(updaterrr);

let person={
    nam:"ria",
    age1:35,
};

let updateperson={
    ...person,
    age1:45,
};
console.log(updateperson);

// REst OPerator ->It is used to combine elements into an array.

let com=[1,2,3,4,5];
let [first,second,...rest]=com;
console.log(first);
console.log(second);
console.log(rest);



// string 


let itemss={
    name:"pen",
    price:25,
};

console.log(`the cost of ${itemss.name} is ${itemss.price}`);

// string methods

// touppercase()
// tolowercase()
// concat()
// silce()-used to return certain characters from particular string 
// trim()-to removes starting and endind space from string
// replace()-used to replace certain characters from particlar string
// replaceAll()-used to replace number of multiple similar by using replaceAll methods 

// let str = "aditya";
// let str1=str.toUpperCase();
// console.log(str1);

// let str = "NAVeen";
// let str2=str.toLowerCase();
// console.log(str2);

// let str1="Stranger";
// let str2="Rishabh";
// let mergeStr=str1.concat(str2);
// console.log(mergeStr);

// let str1="Shourya";
// console.log(str1.slice(3,5));

// let str="        New York Nagaram      -uragam neerathil     ";
// // let str1=str.trim();
// console.log(str.trim());

// let str = "Helloll0l0l0l0l0l0l0l0l0l";
// let str1=str.replaceAll("l","e");
// console.log(str1);

// let t1="varun";
// let t2="\tverma";
// let res ="Java full Stack Developer:"+t1+t2;
// console.log(res);



// let str = Javascript =>reverse the string

// let str="JavaScript";
// let rev=" ";
// for (let i=str.length-1;i>=0;i--){
//     rev=rev+str[i];

// }
// console.log(rev);

// check pallindrome
let str="JavaScript";
let rev=" ";
for (let i=str.length-1;i>=0;i--){
    rev=rev+str[i];
}
if(rev==str){
    console.log("It is a Pallindrome");
}
else{
    console.log("It is not a pallindrome");
}



