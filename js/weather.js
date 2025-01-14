const API_KEY = "57a63879b3ee885d27718abda1281504"

function onGeoOk(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            weather.innerText = `${data.weather[0].main}/${data.main.temp}"도 입니다"`;
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
    });
}
function oNGeoError(){
    alert("위치를 찾을수없습니다. 날씨를 표기할수 없습니다");
}

navigator.geolocation.getCurrentPosition(onGeoOk,oNGeoError);
