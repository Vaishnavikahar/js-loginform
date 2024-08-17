function login(){

    var Email=document.getElementById("Email").value;
    var password=document.getElementById("password").value;
    
    if(!Email|| !password){
        alert("all feild are required");
    }
    else if(Email=="omsai@123" && password=="12345") {
    
        alert("login successful");
        console.log("login sucessfully")
        window.open('home.html');
    }
    else{
        console.log("please give correct credentials");
        alert("please give correct credentials");
    }
    
    }