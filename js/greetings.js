const loginForm=document.querySelector("#login-form");
//loginForm 변수생성... Id = Login-form
const loginInput=document.querySelector("#login-form input");
//loginInput 변수생성... Id = Login-form 내부의 <input>
const greeting = document.querySelector("h1#greeting");
//greeting 변수생성... Id = <h1>태그속코드의 >>> id = greeting
  
const HIDDEN_CLASSNAME = "hidden";
//HIDDEN_CLASSNAME변수 생성 하단함수의 hidden값 이라는 값
const USERNAME_KEY ="username";
//USERNAME_KEY 변수 생성 

function onLogInSubmit(event){
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    painGreetings(username);
    }

function painGreetings(){
  const username =localStorage.getItem(USERNAME_KEY);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `안녕하세요 ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLogInSubmit);
  }else{
   painGreetings(savedUsername);
  }