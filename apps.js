const button = document.getElementById("btn");
button.addEventListener("click", function () {
    const inputValue = document.getElementById("input");
    const cityName = inputValue.value;
    const APIKey = "c32a3595647cf42cb60dce065f759b0c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIKey}`;
    fetch(url)
        .then(res => res.json())
        .then(data => Display(data))
        .catch(error => DisplayError(error))


})
const Display = (weatherInfo) => {
    const section = document.getElementById("section");
    console.log(weatherInfo);
    const createdDiv =
        `
    <div class="weather-status text-white text-center">
        <img src="https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png" alt="">
        <h1>${weatherInfo.name || "Unknown Location!"}</h1>
        <h3><span>${weatherInfo.main.temp}</span>&deg;C</h3>
        <h1 class="lead">${weatherInfo.weather[0].main}</h1>
    </div>

    `
    section.innerHTML = createdDiv;
    document.getElementById("input").value = "";
}
const DisplayError = error => {
    const h3 = document.getElementById("errorId");
    h3.innerText = "Sorry!!!! This Place is not Found";
}