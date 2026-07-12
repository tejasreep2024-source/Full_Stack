function validateform(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let MobNo = document.getElementById("MobNo").value;
    let address = document.getElementById("address").value;

    if( name==" "){
        alert("Name is Required");
        return false;
    }
    if( email==""){
        alert("Email is Required");
        return false;
    }
    
    if( MobNo==""){
        alert("Mobile Number is Required");
        return false;
    }
    
    if( address==" "){
        alert("Adress is Required");
        return false;
    }
    alert("Form Submittes Successfully");

}