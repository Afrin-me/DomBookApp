import { baseUrl } from "./baseurl.js";

let admindata = JSON.parse(localStorage.getItem("loginData"));
if(admindata!=""){
    alert("login data Retrieve ");
}else{
  alert(" Admin Not Logged In");
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

    fetch(`${baseUrl}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then(() => {
        alert("Book Added Successfully");
      })
      .catch((err) => {
        alert("No Book Added");
      });


})

function getdata(bookObj) {
  fetch("https://pewter-trusting-agreement.glitch.me/books")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      alert("something went wrong in getting data");
    });
}
displaydatain=[]
window.onload = ()=>{
     let data = getdata();
     displaydatain = [...data]
    displaydata(displaydatain);

}






function displaydata(arr){

    arr.map((el)=>{

        let cont = document.getElementById('cont')
        cont.innerHTML = "";

        let card = document.createElement('div')

        let title= document.createElement('h4')
        title.innerText = `Title: ${el.tilte}`

        let author = document.createElement("h4")
        author.innerText = `Title: ${el.author}`

        let select = document.createElement("h4")
        select.innerText = `Title: ${el.select}`

        let verifyBook = document.createElement('button')
        verifyBook.addEventListener('click',function(){
            verifyBookfun()
        })

        let deleteBook = document.createElement("button");
        deleteBook.addEventListener("click", function () {
          deleteBookfun();
        });

        card.append(title, author, author, verifyBook, deleteBook);

        cont.append(card)
    })

}

 function verifyBookfun(){
     fetch(`${baseUrl}/books`, {
       method: "PATCH",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(bookObj),
     })
       .then(() => {
        prompt("Are you sure to Verify..?");
       })
       .catch((err) => {
         alert("error occur");
       });
 }

 function deleteBookfun() {
    fetch(`${baseUrl}/books`, {
      method: "DELETE",
      
    })
      .then(() => {
        alert("Book Added Successfully");
      })
      .catch((err) => {
        alert("No Book Added");
      });
 }

 