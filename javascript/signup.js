var allRegister = [];
var bal = 5000;
var acctNo = Math.floor(Math.random() * 10000000000)
if (localStorage.getItem("Bankapp")) {
    allRegister = JSON.parse(localStorage.getItem("Bankapp"))
}
function creatHere() 
{
    if (fn.value == "" && email.value == "" && pass.value == "" && pin.value=="" && cpass.value=="" && address.value=="" && dob.value==""){
       display.innerHTML='Pleace enter your details'
    }
    else {
         if (pass.value != cpass.value) {
            display.innerHTML= 'check your password'
        }
        // else if(allRegister.find((val) => val.email == email.value)
        // {
        //     alert('Email already exist')
        // }
        else{
        register = {};
        register.firstName = fn.value;
        register.Pin = pin.value;
        register.cp = cpass.value;
        register.password = pass.value;
        register.email = email.value;
        register.add = address.value;
        register.dobb = dob.value;
        register.balance = bal;
        register.accountNum = acctNo;
        register.transfer =[];
        // register.deposit = [];
        allRegister.push(register)
        console.log(allRegister)
        localStorage.setItem("Bankapp", JSON.stringify(allRegister))
        display.innerHTML='Welcome' + " " + register.firstName + " " + register.email
        alert(acctNo)
        }
    }

}   

function creatRere(){
    location.href="index02.html"
}