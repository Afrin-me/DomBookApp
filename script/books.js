

let userdata = JSON.parse(localStorage.getItem("loginData"));
if (userdata != "") {
  alert("login data Retrieve ");
} else {
  alert(" user Not Logged In");
  window.location.href = "index.html";
}


