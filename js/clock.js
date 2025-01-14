const clock = document.querySelector("h3#clock");

function getclock(){
 const date = new Date();
 const hours = String(date.getHours()).padStart(2,"0");
 const minutes = String(date.getMinutes()).padStart(2,"0");
    clock.innerText=(`${hours}:${minutes}`);

}

getclock();
setInterval(getclock,1000);
