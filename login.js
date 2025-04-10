let usernames = [];
let passwords = [];
function sleep(ms) { //sleep setup
    return new Promise(resolve => setTimeout(resolve, ms));
}
let currentUserID = 0; //used to show the username that had been signed in to

export function login(){ //basic login
  const use = document.getElementById("username").value;
  const pas = document.getElementById("password").value;
    for(let i = 0;i<usernames.length;i++){
      if((usernames[i]===use)&&(passwords[i]===pas)){
        currentUserID = i;
        return true;
      }
    }
  return false
}

export async function success(){ //if login is success, shows doctor panel (doctorView)
  document.getElementById("extra").innerHTML = "Logging in.";
  await sleep(1000);
  document.getElementById("extra").innerHTML = "Logging in..";
  await sleep(1000);
  document.getElementById("extra").innerHTML = "Logging in...";
  await sleep(1000);
  document.getElementById("extra").innerHTML = `Logged In <br> Welcome ${usernames[currentUserID]}`;
  await sleep(2000);
  document.getElementById("extra").innerHTML = "";
  document.getElementsByClassName("doctorView")[0].style.visibility = "visible";
  return 1;
}

export function signUp(){ 
  const use = document.getElementById("username").value;
  const pas = document.getElementById("password").value;
  if(use.length < 4){ //username length must be over 4
      document.getElementById("username").value = "";
      return "Username is too short, it must be at least 4 characters";
  }
  if(pas.length < 8){ //password length must be over 8
      document.getElementById("password").value = "";
      return "Password is too short, it must be at least 8 characters";
  }
  for(let i = 0;i<usernames.length;i++){ //if username is already taken
      if((usernames[i]===use)){
        document.getElementById("username").value = "";
        return "Username is taken, try again";
      }
    }
  if(use === document.getElementById("username1").value){
    document.getElementById("password").value = "";
    document.getElementById("username").value = "";
    usernames.push(use);
    passwords.push(pas);
    return true;
  }else{
    return "usernames must match (case sensitive)";
  }
  
}
