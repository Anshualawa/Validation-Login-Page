function formfunction(){
    var user = document.username.value;
    var psw = document.password.value;

    if(user=="" && paw==""){
        alert("Enter Your User Name and Passowrd !")
        return false;
    }
    if(user!="" && psw==""){
        alert("Enter Your Username !")
        return false;
    }
    if(user=="" && psw!=""){
        alert("Enter your Passowrd")
        return false;
    }
    if(user=="pappu" && psw=="admin"){
        alert("😀login succesfully 😀")
        setTimeout(function(){
            window.open('Home.html')
        },3)
    }
    else{
        alert("😭😢 ! Incorrect User name and Password !😢😭")
        return false
    }
}