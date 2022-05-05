local = JSON.parse(localStorage.getItem('Bankapp'));
local2 = JSON.parse(localStorage.getItem('signin'))
function here(){
    wel.innerText =`Welcome, ${local2.firstName}`;
    let named = local.find((v) => v.email == local2.email)
    var mean = local.indexOf(named);
    p = local[mean].balance;
    bal.innerText = "Your Balance is" +p
    acct.innerText = "Your Account Number is,"+" "+ local2.accountNum

}
function dashboard(){
    location.href = "dashboard.html"
}
function transfer(){
    location.href="transfer.html"
}
function Name(){
    let trans = JSON.parse(localStorage.getItem("Bankapp"));
    let user = trans.find(vl => vl.accountNum == acc.value)
    if(user){
        indexOfUser = trans.indexOf(user)
        // console.log(indexOfUser)
        full = trans[indexOfUser]
        found = (full.firstName)
        look.innerHTML=found
    }
}
// let histo=[]
function proceed(){
    let trans = JSON.parse(localStorage.getItem("Bankapp"));
    let local2 = JSON.parse(localStorage.getItem("signin")); 
    found = document.getElementById('look').innerHTML
    // let user = trans.find((val, index) =>(val.accountNum == acc.value))
    // var found = trans.indexOf(user);
    let name = trans.find((v) => v.email == local2.email)
    if(name && name.balance > amt.value){
        let main = parseFloat(name.balance)
        let  pa = parseFloat(amt.value)
        let dat = new Date().toLocaleDateString();
        let tim = new Date().toLocaleTimeString();
        main -=pa
        alert(found)
        let arr = {recipient:found,amountSend:pa,daet:dat,team:tim}
        name.transfer.push(arr);
        localStorage.setItem('Bankapp', JSON.stringify(name))
        console.log(name);
        bal.innerText = "Your balance is" +name
        show.innerText = "Transaction Successful!"
    }
        // location.reload()
}
function deposit(){
    location.href= "deposit.html"
}
function Named(){
    let transed = JSON.parse(localStorage.getItem("Bankapp"));
    let usered = transed.find((vl) => (vl.Pin == acced.value));
    if(usered){
        looked.innerText ='Please Enter Amount You to Deposit'
    }
    else{
        looked.innerText ='Incorrect Pin'
    }
}
function enter(){
    let transaction = JSON.parse(localStorage.getItem("Bankapp"));
    // let thanks = JSON.parse(localStorage.getItem("signin"));
    let usher = transaction.find((vl) => (vl.Pin == acced.value));
    var founded = transaction.indexOf(usher);
    newbaled = parseInt(transaction[founded].balance)+parseInt(amted.value)
    transaction[founded].balance = newbaled
    ap = JSON.stringify(transaction)
    localStorage.setItem("Bankapp",ap)
    newed = JSON.parse(localStorage.getItem("Bankapp"));
    p = newed[founded].balance;
    bal.innerText = "Your balance is" +p
    show.innerText = "Transaction Successful!"
    // location.reload()
}

function withdraw(){
    location.href ="withdraw.html"
}
function naem(){
    let wor = JSON.parse(localStorage.getItem("Bankapp"));
    let used = wor.find((vl) => (vl.Pin == pined.value));
    if(used){
        disp.innerText ='Please Enter Amount You to withdraw'
    }
    else{
        disp.innerText ='Incorrect Pin'
    }
}
function hered(){
    let transac = JSON.parse(localStorage.getItem("Bankapp"));
    // let thanks = JSON.parse(localStorage.getItem("signin"));
    let used = transac.find((vl) => (vl.Pin == pined.value));
    var founder = transac.indexOf(used);
    newbaled = parseInt(transac[founder].balance)-parseInt(amted.value)
    transac[founder].balance = newbaled
    ar = JSON.stringify(transac)
    localStorage.setItem("Bankapp",ar)
    newer = JSON.parse(localStorage.getItem("Bankapp"));
    p = newer[founder].balance;
    bal.innerText = "Your balance is" +p;
    show.innerText = "Transaction Successful!"
    // location.reload()
}
function logout(){
    if(confirm('Are You Sure You Want To Logout')){
    location.href ="welcome.html"
    }
}
function history(){
    location.href = "history.html"
}
function credittran(){
   
}