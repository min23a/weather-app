function getCityName() {
    let cityName = document.getElementById("city_name").value;
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=61aed59fcb99d7ea22aa848f4b31a033')
        .then(res => res.json())
        .then(data =>{
            document.getElementById("area_temp").innerText = "" +parseInt(data.main.temp -273);
            document.getElementById("area_status").innerText = data.weather[0].description;
            document.getElementById("icon").setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`) ;
        }
        );
    document.getElementById("area_name").innerText = cityName;
}