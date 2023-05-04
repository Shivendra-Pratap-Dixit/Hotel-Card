let userPassword = document.querySelector("#userPassword")
let userEmail = document.querySelector("#userEmail")
let userlogin = document.querySelector("#login-btn")
let body = document.querySelector("body")

userlogin.addEventListener("click",function(e){
    e.preventDefault()
    if(userEmail.value=="hidfood"&&userPassword.value=="hidfood"){
        alert("NIce")
    }
    // }else{
    //     body.append(<div class="alert alert-danger alert-dismissible fade show">
    //     <h4 class="alert-heading"><i class="bi-exclamation-octagon-fill"></i> Oops! Something went wrong.</h4>
    //     <p>Please enter a valid value in all the required fields before proceeding. If you need any help just place the mouse pointer above info icon next to the form field.</p>
    //     <hr>
    //     <p class="mb-0">Once you have filled all the details, click on the 'Next' button to continue.</p>
    //     <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    // </div>)
    // }
})