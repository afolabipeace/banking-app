function here(){
    local = JSON.parse(localStorage.getItem('Bankapp'));
local2 = JSON.parse(localStorage.getItem('signin'))
wel.innerText ="Welcome,"+" "+ local2.firstName +" "+" "+ local2.secondName+ " "+"Your Balance is,"+local2.balance;
acct.innerText = "Your Account Number is,"+" "+ local2.accountNum
var bal = 5000;
}
function depoSit(){
    // var v = 'enter the amount you want to deposit'
    inp.innerText = 'Enter the amount you want to deposit'
    // userDetails.innerText = 'kindly enter amount you want to withdraw'
}