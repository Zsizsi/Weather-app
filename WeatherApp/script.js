//const urlBudapest = "https://api.openweathermap.org/data/2.5/forecast?id=7284840&appid=d02a07a308b4870df75f20758b3ee705&units=metric";

const apiSetup = () => {

    let api = "https://api.openweathermap.org/data/2.5/forecast?q=";
    let city = document.querySelector("#cityInput").value;
    let apiKey = "&appid=d02a07a308b4870df75f20758b3ee705";
    let units = "&units=metric";
    let url = api + city + apiKey + units;

    fetch(url).then(response => {
        return response.json();
    }).then(myJson => {
        console.log(myJson);
        data = myJson;
    }).catch(err => {
        err.log("Error occured");
    });

    setTimeout(function () {
        printData(data);
    }, 500);
}

//=============print detals ===============================================

const printData = (data) => {
    const divWeather = document.querySelector("#display");
    divWeather.innerHTML = "";

    const spanCity = document.createElement("span");
    spanCity.id = "citySpan";
    const pCity = document.createElement("span");
    pCity.id = "cityP";
    spanCity.textContent = "City:";
    pCity.textContent = data.city.name;
    divWeather.appendChild(spanCity);
    divWeather.appendChild(pCity);

    const spanRain = document.createElement("span");
    spanRain.id = "rainSpan";
    const pRain = document.createElement("span");
    pRain.id = "rainP";
    spanRain.textContent = "Rain:";
    pRain.textContent = data.list[0].weather[0].description;
    divWeather.appendChild(spanRain);
    divWeather.appendChild(pRain);

    const spanWind = document.createElement("span");
    spanWind.id = "windSpan";
    const pWind = document.createElement("span");
    pWind.id = "windP";
    spanWind.textContent = "Speed of wind:"
    pWind.textContent = data.list[0].wind.speed + " km/h";
    divWeather.appendChild(spanWind);
    divWeather.appendChild(pWind);

    const spanTempMin = document.createElement("span");
    spanTempMin.id = "tMinSpan";
    const pTempMin = document.createElement("span");
    pTempMin.id = "tMinP";
    spanTempMin.textContent = "Minimum temperatue:"
    pTempMin.textContent = data.list[0].main.temp_min + " Celsius";
    divWeather.appendChild(spanTempMin);
    divWeather.appendChild(pTempMin);

    const spanTempMax = document.createElement("span");
    spanTempMax.id = "tMaxSpan";
    const pTempMax = document.createElement("span");
    pTempMax.id = "tMaxP";
    spanTempMax.textContent = "Maximum temperature:";
    pTempMax.textContent = data.list[0].main.temp_max + " Celsius";
    divWeather.appendChild(spanTempMax);
    divWeather.appendChild(pTempMax);

    const spanTime = document.createElement("span");
    spanTime.id = "timeSpan";
    const pTime = document.createElement("span");
    pTime.id = "timeP";
    spanTime.textContent = "Time:";
    pTime.textContent = data.list[0].dt_txt;
    divWeather.appendChild(spanTime);
    divWeather.appendChild(pTime);
}

const setupEventListener = (apiSetup) => {
    const btnID = document.querySelector("#btnSearch");
    btnID.addEventListener("click", apiSetup);
}

setupEventListener(() => apiSetup());