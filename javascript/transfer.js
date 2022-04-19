function here(){
    local = JSON.parse(localStorage.getItem('Bankapp'));
local2 = JSON.parse(localStorage.getItem('signin'))
wel.innerText ="Welcome,"+" "+ local2.firstName +" "+" "+ local2.secondName+ " "+"Your Balance is,"+local2.balance;
acct.innerText = "Your Account Number is,"+" "+ local2.accountNum
var bal = 5000;
}
function Name(){
    trans = JSON.parse(localStorage.getItem("Bankapp"));
    user = trans.find(vl => vl.accountNum == acc.value)
    if(user){
        indexOfUser = trans.indexOf(user)
        // console.log(indexOfUser)
        full = trans[indexOfUser]
        found = full.firstName
        look.innerHTML=found
    }
}
function proceed(){
    trans = JSON.parse(localStorage.getItem("Bankapp"));
    user = trans.find(vl => vl.accountNum == acc.value)
    if(user){
        user.balance = +user.balance + +amt.value
        alert(user.balance)
        localStorage.setItem('Bankapp', JSON.stringify(trans))
    }
}