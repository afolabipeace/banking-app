function signIn()
	{
		currentUser={
			email:em.value
		}
		localStorage.setItem('signIn', JSON.stringify(currentUser))

		let mean = JSON.parse(localStorage.getItem('Bankapp'))
		let bank = mean.find(vl=>vl.email == em.value && vl.password == pw.value)
		// console.log(bank)
		if(bank){
			alert('i m here')
			location.href="dashboard.html"
			// window.open('../dashboard.html')
		}
		else if(em.value=="" && pw.value==""){
			alert('Input your details')
		}
		else if(!bank){
			alert('check your details')
			// focus.em.value
		}
    }