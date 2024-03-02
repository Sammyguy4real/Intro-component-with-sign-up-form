let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let firstname = id("fname"),
    lastname = id("lname"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
  
  errorMsg = classes("error"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(firstname, 0, "First Name cannot be blank");
    engine(lastname, 1, "Last Name cannot be blank");
    engine(email, 2, "Looks like this is not an email");
    engine(password, 3, "Password cannot be empty");
});


let engine = (ids, serial, message) => {

    if (ids.value.trim() === "") {
      errorMsg[serial].innerHTML = message;
      ids.style.border = "2px solid red";
      
      // icons
      failureIcon[serial].style.opacity = "1";
    } 
    
    else {
      errorMsg[serial].innerHTML = "";
      id.style.border = "2px solid green";
      
      // icons
      failureIcon[serial].style.opacity = "0";
  
    }
  }