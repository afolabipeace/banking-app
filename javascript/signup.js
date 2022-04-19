var allRegister = [];
var bals = [];
var bal = 5000;
bals.push(bal)
var acctNo = Math.floor(Math.random()*10000000000)
if(localStorage.getItem("Bankapp")){
    allRegister=JSON.parse(localStorage.getItem("Bankapp"))
}
function creatHere(){
if(fn.value==""&&email.value==""&&pass.value==""&&sn.value==""){
    alert('Pleace enter your details')
}
else if(pass.value != cpass.value){
    alert('check your password')
}
else{
    register={};
register.firstName = fn.value;
register.secondName = sn.value;
register.cp = cpass.value;
register.password = pass.value;
register.email = email.value;
register.state = sta.value;
register.country = con.value;
register.add = address.value;
register.dobb = dob.value;
register.balance = bals;
register.accountNum = acctNo;
allRegister.push(register)
console.log(allRegister)
localStorage.setItem("Bankapp",JSON.stringify(allRegister))
alert('Welcome' + " " + register.firstName + " "+register.secondName+" "+register.email)
alert(acctNo)
// location.reload();
}

}   