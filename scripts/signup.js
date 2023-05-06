// const input = document.getElementById('myInput');

// input.addEventListener('input', function() {
//   if (this.value.length > 0) {
//     this.classList.add('has-value');
//   } else {
//     this.classList.remove('has-value');
//   }
// // });
const form = document.querySelector('form');

// Get the submit button element
const submitBtn = document.querySelector('#submit-btn');
let main = document.querySelector("#h1")
let main1 = document.querySelector("#h2")
let userPassword = document.querySelector("#userPassword")
let userEmail = document.querySelector("#userEmail")
let userlogin = document.querySelector("#login-btn")


let dataa = JSON.parse(localStorage.getItem("notes")) || []

submitBtn.addEventListener('click', (event) => {
	
	event.preventDefault();


	const firstName = document.querySelector('#second-name').value;
	const listName = document.querySelector('#first-name').value;
	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;
	const confirmPassword = document.querySelector('#confirm-password').value;

  const data = {
		firstName,
		listName,
		email,
		password
	};
	
  if (validateInput(firstName,listName, email, password, confirmPassword)) {
    dataa.push(data)
	 localStorage.setItem("notes",JSON.stringify(dataa))
    main.style.display = "block"
    main.innerText = "Signup Sucessfully"
	console.log(dataa)
	}

	form.reset();
});
userlogin.addEventListener("click",function(e){
	e.preventDefault()
let flag = false
for(let i=0;i<dataa.length;i++){
	console.log(dataa)
	if((userEmail.value==dataa[i].email)&&(userPassword.value==dataa[i].password)){
		flag = true
		break
	}
console.log(userEmail.value,userPassword.value)
}
if(flag){
	window.location.href="#"
	alert("login Sucessfully")
}else{
	main1.style.display = "block"
	main1.innerText="wrongPassword or user name"
}
userEmail.value=""
userPassword.value=""

})
function validateInput(companyName, contactName, email, password, confirmPassword) {
	
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (companyName === '') {
		alert('Please enter a first name');
		return false;
	}

	
	if (contactName === '') {
		alert('Please enter a last name');
		return false;
	}

	
	if (email === '') {
		alert('Please enter an email address');
		return false;
	} else if (!emailRegex.test(email)) {
		alert('Please enter a valid email address');
		return false;
	}

	
	if (password === '') {
		alert('Please enter a password');
		return false;
	} else if (password.length < 8) {
		alert('Password must be at least 8 characters long');
		return false;
	}


	if (confirmPassword !== password) {
		alert('Passwords do not match');
		return false;
	}


	return true;
}
