function here(){
    local = JSON.parse(localStorage.getItem('Bankapp'));
    local2 = JSON.parse(localStorage.getItem('signin'))
    wel.innerText =`Welcome, ${local2.firstName}  ${local2.secondName}; Your Balance is,${local2.balance}`;
    acct.innerText = "Your Account Number is,"+" "+ local2.accountNum
}
function Name(){
    trans = JSON.parse(localStorage.getItem("Bankapp"));
    user = trans.find(vl => vl.accountNum == acc.value)
    if(user){
        indexOfUser = trans.indexOf(user)
        // console.log(indexOfUser)
        full = trans[indexOfUser]
        found = full.firstName
        found = full.secondName
        look.innerHTML=found
    }
}
function proceed(){
    trans = JSON.parse(localStorage.getItem("Bankapp"));
    user = trans.find(vl => vl.accountNum == acc.value)
    if(user){
        user.balance = user.balance + +amt.value
        alert(user.balance);
        console.log()
        localStorage.setItem('Bankapp', JSON.stringify(trans))
    }
}
// function here(){
//     local = JSON.parse(localStorage.getItem('Bankapp'));
//     local2 = JSON.parse(localStorage.getItem('signin'))
//     wel.innerText ="Welcome,"+" "+ local2.firstName +" "+" "+ local2.secondName+ " "+"Your Balance is,"+local2.balance;
//     acct.innerText = "Your Account Number is,"+" "+ local2.accountNum
//     var bal = 5000;
// }
// function Name(){
//     trans = JSON.parse(localStorage.getItem("Bankapp"));
//     user = trans.find(vl => vl.accountNum == acc.value)
//     if(user){
//         indexOfUser = trans.indexOf(user)
//         // console.log(indexOfUser)
//         full = trans[indexOfUser]
//         found = full.firstName
//         found = full.secondName
//         look.innerHTML=found
//     }
//     // trans = JSON.parse(localStorage.getItem("Bankapp"));
//     // user = trans.find(vl => vl.accountNum == acc.value)
   
//     // indexOfUser = trans.indexOf(user)
//     // // console.log(indexOfUser)
//     // full = trans[indexOfUser]
//     // found = full.firstName
//     // look.innerHTML=found
// }
// function proceed(){
//     amountToSend = amt.value;
//     accountNumber = acc.value
//     let credit =  signin.findIndex(check=>check.accountNum== accountNumber);
//     console.log(credit)
//     // let debit = Bankapp.findIndex(check=>check.)
//     if(amountToSend > local2.balance){
//         alert('Your account Balance is too low for this transaction')
//     }else if(amountToSend < local2.balance){

//     }
//     // trans = JSON.parse(localStorage.getItem("Bankapp"));
//     // user = trans.find(vl => vl.accountNum == acc.value)
//     // let 
//     // if(user){
//     //     user.balance = +user.balance + +amt.value
//     //     alert(user.balance)
//     //     localStorage.setItem('Bankapp', JSON.stringify(trans))
//     // }
// }