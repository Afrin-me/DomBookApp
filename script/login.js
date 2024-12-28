

let login = document.getElementById("loginform");
login.addEventListener('submit',function(event){
      event.preventDefault()
    let email = loginform.email.value;
    let password = loginform.password.value;

    let loginData = {email,password}

    if(email=="admin@empher.com" && password =="empher@123"){
        alert("Logged in as Admin");
        localStorage.setItem("loginData", JSON.stringify(loginData));
        window.location.href = "admin.html"
    }else if(email=="user@empher.com" && password =="user@123"){
        alert("Logged in as user ");
        localStorage.setItem("loginData", JSON.stringify(loginData));
        window.location.href = "books.html";
    }else{
        alert("something went wrong in login")
    }
})
 
