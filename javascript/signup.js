var bal = 5000;
function creatHere() 
{
    if (localStorage.Bankapp) {
        allRegister = JSON.parse(localStorage.getItem("Bankapp"));
    }
    else{
        allRegister = [];
    }
    register = {
        firstName : fn.value,
        Pin : pin.value,
        cp : cpass.value,
        password : pass.value,
        email : email.value,
        add : address.value,
        dobb : dob.value,
        balance : bal.toFixed(2),
        acctNo : Math.floor(Math.random() * 10000000000),
        transfer : [],
        deposit :[],
        withdraw : []
    }
    if (fn.value == "" && email.value == "" && pass.value == "" && pin.value=="" && cpass.value=="" && address.value=="" && dob.value==""){
       display.innerHTML='Pleace enter your details'
    }
    else if (pass.value != cpass.value){
            display.innerHTML= 'check your password'
        }
        // else if(allRegister.find((val) => val.email == email.value)
        // {
        //     alert('Email already exist')
        // }
    else{ 
        allRegister.push(register);
        localStorage.setItem("Bankapp", JSON.stringify(allRegister));
        display.innerHTML='Welcome' + " " + register.firstName + " " + register.email; 
        // alert(acctNo)
        location.href="index02.html"
    }

}   