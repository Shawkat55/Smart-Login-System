var enterName=document.getElementById("enterName") 
var enterEmail = document.getElementById('enterEmail')
var enterPassword = document.getElementById('enterPassword')
var btnLog=document.getElementById("btnLog")
var valid=document.getElementById("valid")
var enterYourEmail=document.getElementById("enterYourEmail")
var enterYourPassword=document.getElementById("enterYourPassword")
var valids=document.getElementById("valids")
var welcome=document.getElementById("welcome")


var LoginSystem;
if (localStorage.users != null) {
    LoginSystem = JSON.parse(localStorage.users)
}else{
    var LoginSystem=[];
}

// var LoginSystem=[];

function EmailExist() {
    for (var i = 0; i < LoginSystem.length; i++) {
        if (LoginSystem[i].email == enterEmail.value) {
            return false
        }else{
            return true
        }
    }
}

function EmailExist() {
    for (var i = 0; i < LoginSystem.length; i++) {
        if (LoginSystem[i].email == enterEmail.value) {
            return false
        }
    }
    return true
}

function loginObject() {
    var isnotExist=EmailExist()
    var isfull =loginEmpty()
    if (isnotExist==false) {
        alert("This Email Exists")
        
    }
    if (bookValidation(enterEmail.value)===true & passValidation(enterPassword.value)===true && isfull && isnotExist) {
        var signUp={
            Name:enterName.value,
            email:enterEmail.value,
            Password:enterPassword.value
            }
            LoginSystem.push(signUp)
            console.log(LoginSystem);
    localStorage.setItem("users" , JSON.stringify(LoginSystem))
    document.location.href="./index 2.html"
    }
}


function loginEmpty() {
    if (enterEmail.value=="" ||enterPassword.value=="" || enterName.value=="") {
        valid.classList.replace("d-none" , "d-block")
        return false
    }else{
        valid.classList.replace("d-block" , "d-none")
        return true
    }
    
}



  function bookValidation() {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(enterEmail.value)===true) {
        enterEmail.classList.add("is-valid");
        enterEmail.classList.remove("is-invalid")
        return true
    }else{
        
        enterEmail.classList.add("is-invalid");
        enterEmail.classList.remove("is-valid")
        return false
    }
}
function passValidation() {
    var regex= /^[A-Za-z0-9]{8}/
    if (regex.test(enterPassword.value)===true) {
        enterPassword.classList.add("is-valid");
        enterPassword.classList.remove("is-invalid")
        return true
    }else{
        
        enterPassword.classList.add("is-invalid");
        enterPassword.classList.remove("is-valid")
        return false
    }
}


// login
var isLog = localStorage.getItem("UserName")
if (isLog) {
    welcome.innerHTML="welcome " + isLog
    
}
var date=JSON.parse(localStorage.getItem("users", LoginSystem))
function signIn() {
    var isfulls=signEmpty()
    if (bookValidations(enterYourEmail.value)===true & passValidations(enterYourPassword.value)===true) {
        var signUser={
            email:enterYourEmail.value,
            Password:enterYourPassword.value
        }
    
        for (var i=0 ; i<date.length ; i++){
            if (date[i].enterYourEmail==enterEmail && date[i].enterYourPassword==enterPassword &&isfulls) {
                localStorage.setItem("UserName" ,date[i].Name)
                document.location.href="./index 3.html"
            }else{
                valids.classList.replace("d-none" , "d-block")
                
            }
        }
    }
   
}
function signEmpty() {
    if (enterYourEmail.value=="" || enterYourPassword.value=="") {
        valids.classList.replace("d-none" , "d-block")
        return false
    }else{
        valids.classList.replace("d-block" , "d-none")
        return true
    }
    
}

function bookValidations() {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(enterYourEmail.value)===true) {
        enterYourEmail.classList.add("is-valid");
        enterYourEmail.classList.remove("is-invalid")
        return true
    }else{
        
        enterYourEmail.classList.add("is-invalid");
        enterYourEmail.classList.remove("is-valid")
        return false
    }
}
function passValidations() {
    var regex= /^[A-Za-z0-9]{8}/
    if (regex.test( enterYourPassword.value)===true) {
        enterYourPassword.classList.add("is-valid");
        enterYourPassword.classList.remove("is-invalid")
        return true
    }else{
        
        enterYourPassword.classList.add("is-invalid");
        enterYourPassword.classList.remove("is-valid")
        return false
    }
}
function logout() {
    localStorage.removeItem('users')
    localStorage.removeItem('UserName')
    document.location.href="./index.html"
}
