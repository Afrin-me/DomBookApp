import { baseUrl } from "./baseurl.js";

let userdata = JSON.parse(localStorage.getItem("loginData"));
if (userdata != "") {
  alert("login data Retrieve ");
} else {
  alert(" user Not Logged In");
  window.location.href = "index.html";
}


let form= document.getElementById('form')
form.addEventListener('submit',function(event){
 event.preventDefault()
    let title = form.title.value

    let author = form.author.value

    let select = form.select.value

    let bookObj ={title,author,select};
    console.log(bookObj)
})

fetch(`${baseUrl}/books`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(bookObj),
})
  .then(() => {
   alert("available books...")
  })
  .catch((err) => {
    alert("");
  });


