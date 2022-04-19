allBank =[];
log = {};
function signIn()
	{
		let mean = JSON.parse(localStorage.getItem('Bankapp'))
		let bank = mean.find(vl=>vl.email == em.value && vl.password == pw.value)
		// console.log(bank)
		if(bank){
			indexOfUser = mean.indexOf(bank)
			var user = mean[indexOfUser]
			console.log(user)
			log.firstName = user.firstName
			log.accountNum = user.accountNum
			log.secondName = user.secondName
			log.email = em.value
			log.balance = user.balance
			log.password = pw.value
			localStorage.setItem("signin",JSON.stringify(log))
			
			// alert("welcome")
			location.href="dashboard.html"
			// window.open('../dashboard.html')
		}
    }