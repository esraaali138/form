let Username = document.querySelector("#username");
let Password = document.querySelector("#password");
let Btn = document.querySelector("#submit");
let TagP = document.querySelector("#pp")

Btn.addEventListener("click" , (e)=>{
  let message = [];


if(Username.value.trim() ===""){
    message.push ("username requried");
  } if(Password.value===""){
    message.push("password required")
  }

  if(Password.value.length <= 7){
    message.push ("password must be at leaset 8 characters")
  }if(Password.value.length >= 12){
    message.push ("password must be 12 characters")
  }

  if(message.length > 0){
    e.preventDefault();
    TagP.toggleAttribute ("hidden")
    TagP.innerHTML = message
  }
  
})

























































