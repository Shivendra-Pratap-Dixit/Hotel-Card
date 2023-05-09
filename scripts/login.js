
let dataa = JSON.parse(localStorage.getItem("notes")) || []
let main1 = document.querySelector("#h2")
let userPassword = document.querySelector("#userPassword")
let userEmail = document.querySelector("#userEmail")
let userlogin = document.querySelector("#login-btn")
let btn = document.querySelector("#create-btn")
let admin = document.querySelector("#admin")
admin.addEventListener("click",function(){
	window.location.href = "admin.html"
})
btn.addEventListener("click",function(){
    window.location.href="signup.html"
})

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
	
	alert("login Sucessfully")
    window.location.href="product.html"
}else{
	main1.style.display = "block"
	main1.innerText="wrongPassword or user name"
}
userEmail.value=""
userPassword.value=""

})
