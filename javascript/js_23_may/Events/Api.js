//fetching cat facts
let factpara = document.getElementById("para");
let BTN = document.getElementById("BTN");
let url ="https://catfact.ninja/fact";

const getFacts =async() => {
    try{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    

    factpara.innerHTML = data.fact ;
} catch(error){
     console.log(error);
     
    }
};
BTN.addEventListener("click", getFacts);

// ----------------------------------------------------------------------------------------------------------------------------
// let BTN = document.getElementById("BTN");
// let dogImage = document.getElementById("dogImage");

// const url = "https://dog.ceo/api/breeds/image/random";

// const getDogImage = async () => {
//     try{
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//     dogImage.src = data.message;
//     }catch(error){
//         console.log(error);
        
//     }
// };
// BTN.addEventListener("click", getDogImage);