let getForm = document.forms;
console.log(getForm[0]);

// Retrieve the inputs by their id
let getInputbyId1 = getForm[0].elements.fname;
let getInputbyId2 = getForm[0].elements.lname;
console.log(getInputbyId1);
console.log(getInputbyId2);


let btn = document.getElementById("submit");
let User = document.querySelector(".usersAnswer");
btn.addEventListener("click", userAnswer);

function userAnswer(e) {
    e.preventDefault()

  let name1 = getInputbyId1.value;
  let name2 = getInputbyId2.value;
  if (name1 == "" || name2 == "") {
    alert("Remplir tous les champs");
  }else{
    let liLname = document.createElement("li");
    liLname.innerHTML = "last name of the user is"+" "+ name2;
    let liFname = document.createElement("li");
    liFname.innerHTML ="first name of the user is"+" "+ name1;
    User.appendChild(liFname);
    User.appendChild(liLname);
  }

}