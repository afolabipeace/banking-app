function here(){
    local = JSON.parse(localStorage.getItem('Bankapp'));
    local2 = JSON.parse(localStorage.getItem('signIn'))
    findMe = local.find((val)=>val.email == local2.email)
    if (findMe) {
        wel.innerText =`Welcome, ${findMe.firstName}`;
        acct.innerText = `Your Account Number is, ${findMe.acctNo}`;
        bal.innerText = `Your Balance is, ${findMe.balance}`;
    }
    else{
        
    }
}

function dashboard(){
    location.href = "dashboard.html"
}
function transfer(){
    location.href="transfer.html"
}
function Name(){
    let tran = JSON.parse(localStorage.getItem("Bankapp"));
    let addUser = tran.find((vl)=>vl.acctNo==acc.value)
    if(addUser){
            look.innerHTML=addUser.firstName
        }
}
function proceed(){
    var trans = JSON.parse(localStorage.getItem("Bankapp"));
    var local2 = JSON.parse(localStorage.getItem("signIn")); 
    found = document.getElementById('look').innerHTML
    // let user = trans.find((val, index) =>(val.accountNum == acc.value))
    // var found = trans.indexOf(user);
    let name = trans.find((v) => v.email == local2.email)
    if(name && name.balance > amt.value){
        let main = parseFloat(name.balance)
        let  pa = parseFloat(amt.value)
        let ac = parseFloat(acc.value)
        let dat = new Date().toLocaleDateString();
        let tim = new Date().toLocaleTimeString();
        name.balance =main-pa
        console.log(tim);
        // alert('hello')
        let arr = {recipient:found,accountNUM:ac,amountSend:pa,daet:dat,team:tim}
        name.transfer.push(arr);
        localStorage.setItem('Bankapp', JSON.stringify(trans));
        // bal.innerText = "Your balance is" +name;
        show.innerText = "Transaction Successful!";
    }
    else{
        show.innerText = "Insufficient Balance!";
    }

    searchMe = trans.find((val)=> val.acctNo == acc.value)
    if(searchMe){
        let  ap = parseFloat(amt.value)
        let search = parseFloat(searchMe.balance)
        let dta = new Date().toLocaleDateString();
        let tmi = new Date().toLocaleTimeString();
        searchMe.balance = search+ap
        let rra = {sender:name.firstName,amountSend:ap,daet:dta,team:tmi}
        searchMe.transfer.push(rra)
        localStorage.setItem('Bankapp', JSON.stringify(trans))
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
    var trans = JSON.parse(localStorage.getItem("Bankapp"));
    var local2 = JSON.parse(localStorage.getItem("signIn")); 
    let usher = trans.find((vl) => (vl.Pin == acced.value));
    if(usher){
        let man = parseFloat(usher.balance)
        let  par = parseFloat(amted.value)
        let datr = new Date().toLocaleDateString();
        let tiem = new Date().toLocaleTimeString();
        usher.balance = man+par
        console.log(usher.balance)
        let arra = {amountDepo:par,dar:datr,timee:tiem}
        usher.deposit.push(arra)
        localStorage.setItem('Bankapp', JSON.stringify(trans))
        console.log(trans);
    }
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
    var trans = JSON.parse(localStorage.getItem("Bankapp"));
    var local2 = JSON.parse(localStorage.getItem("signIn")); 
    let usher = trans.find((vl) => (vl.Pin == pined.value));
    if(usher){
        let man = parseFloat(usher.balance)
        let  parl = parseFloat(amted.value)
        let dart = new Date().toLocaleDateString();
        let tmie = new Date().toLocaleTimeString();
        usher.balance = man-parl
        console.log(usher.balance)
        let arra = {amountwith:parl,dal:dart,teame:tmie}
        usher.withdraw.push(arra)
        localStorage.setItem('Bankapp', JSON.stringify(trans))
        console.log(trans);
    }
}
function logout(){
    if(confirm('Are You Sure You Want To Logout')){
    location.href ="welcome.html"
    }
}
function history(){
    location.href = "history.html"
}
function credit(){
   let save = JSON.parse(localStorage.getItem('Bankapp'))
   let hrr = JSON.parse(localStorage.getItem('signIn'))
   let put = save.find((val)=>val.email == hrr.email)
   if(put){
       let text = '<table class="table table-responsive"><thead>'
            text +='<th>S/N</th><th>NAME</th><th>ACCOUNT NUMBER</th><th>AMOUNT</th><th>DATE</th><th>TIME</th></thead>'
            text +='<tbody><tr>'
       for(i=0; i<put.transfer.length; i++){
           let sn = i+1
            text += `<td>${sn}</td>`
            text += `<td>${put.transfer[i].recipient}</td>`
            text += `<td>${put.transfer[i].accountNUM}</td>`
            text += `<td>${put.transfer[i].amountSend}</td>`
            text += `<td>${put.transfer[i].daet}</td>`
            text += `<td>${put.transfer[i].team}</td></tr>`
       }
       document.getElementById('heree').innerHTML=text
   }
}
function depo(){
    let share = JSON.parse(localStorage.getItem('Bankapp'))
    let rate = JSON.parse(localStorage.getItem('signIn'))
    let place = share.find((val)=>val.email == rate.email)
    if(place){
        let took = '<table class="table table-responsive"><thead>'
             took +='<th>S/N</th><th>AMOUNT</th><th>DATE</th><th>TIME</th></thead>'
             took +='<tbody><tr>'
        for(i=0; i<place.transfer.length; i++){
            let sn = i+1
             took += `<td>${sn}</td>`
             took += `<td>${place.deposit[i].amountDepo}</td>`
             took += `<td>${place.deposit[i].dar}</td>`
             took += `<td>${place.deposit[i].timee}</td></tr>`
        }
        document.getElementById('her').innerHTML=took
    }

}
function withh(){
    let share = JSON.parse(localStorage.getItem('Bankapp'))
    let rate = JSON.parse(localStorage.getItem('signIn'))
    let place = share.find((val)=>val.email == rate.email)
    if(place){
        let take = '<table class="table table-responsive"><thead>'
             take +='<th>S/N</th><th>AMOUNT</th><th>DATE</th><th>TIME</th></thead>'
             take +='<tbody><tr>'
        for(i=0; i<place.transfer.length; i++){
            let sn = i+1
             take += `<td>${sn}</td>`
             take += `<td>${place.withdraw[i].amountwith}</td>`
             take += `<td>${place.withdraw[i].dal}</td>`
             take += `<td>${place.withdraw[i].teame}</td></tr>`
        }
        document.getElementById('heee').innerHTML = take
    }
    else{
        heee.innerHTML =('No transaction yet')
    }
}
// {amountwith:parl,dal:dart,teame:tmie}