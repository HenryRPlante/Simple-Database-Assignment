console.log("main.js loaded");
import { showDoctors,searchDoctor,addDoctor,start2 } from './doctors.js';
import { showPatients,searchPatient,addPatient,start1 } from './patients.js';
import { login,signUp,success } from './login.js';
import { updateDoc } from './sort.js';


let clicked1 = false;
let clicked2 = false;
let clicked3 = false;

start1();
start2();
setInterval(updateDoc,1000);

//add patients
document.getElementById("patAButton").addEventListener("click",function(){
  addPatient();
});
//add doctors
document.getElementById("docAButton").addEventListener("click",function(){
  addDoctor();
});



//show doctors
document.getElementById("docButton").addEventListener("click", function () {
    if(clicked1){
      clicked1 = false;
      showDoctors(false);
    }else{
      clicked1 = true;
      showDoctors(true);
    }
});

//show patients
document.getElementById("patButton").addEventListener("click", function () {
  if(clicked2){
    clicked2 = false;
    showPatients(false);
  }else{
    clicked2 = true;
    showPatients(true);
  }
});

//search doctors
document.getElementById("docSButton").addEventListener("click", function(){
  document.getElementById("docSearchOutput").innerHTML = searchDoctor();
});

//search patients
document.getElementById("patSButton").addEventListener("click", function(){
  document.getElementById("patSearchOutput").innerHTML = searchPatient();
});

//login
document.getElementById("logButton").addEventListener("click",function(event){
    event.preventDefault()
    if(clicked3){
      document.getElementById("extra").innerHTML = "";
      document.getElementById("username1").style.visibility = "hidden";
      clicked3 = false;
    }else{
      if(login()){
        document.getElementById("login").style.display = "none";
        success();
      }else{
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        alert("Username or password is incorrect, try again");
      }
    }
  
});


//sign up
document.getElementById("createAccount").addEventListener("click",function(event){
    event.preventDefault()
    if(!clicked3){
      document.getElementById("extra").innerHTML = "Create a username and password, the username must be unique and at least 4 characters <br>the password must be at least 8 characters";
      document.getElementById("username1").style.visibility = "visible";
      clicked3 = true;
    }else{
      if(signUp() === true){
        document.getElementById("extra").innerHTML = "";
        document.getElementById("username1").style.visibility = "hidden";
        clicked3 = false;
      }else{
        alert(signUp());
      }
      
    }
  
});

//showpassword
document.getElementById("psCheckbox").addEventListener("click",function(){
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
});
  
