function here(){
    local = JSON.parse(localStorage.getItem('Bankapp'));
local2 = JSON.parse(localStorage.getItem('signin'))
wel.innerText ="Welcome,"+" "+ local2.firstName +" "+" "+ local2.secondName + " "+"Your Balance is,"+local2.balance;
acct.innerText = "Your Account Number is,"+" "+ local2.accountNum
var bal = 5000;
}