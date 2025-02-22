let input = document.querySelector(".inp");
let icon = document.getElementById('.icon')


var appLinks = {
    "youtube": "https://www.youtube.com/",
    "google": "https://www.google.com/",
    "github": "https://github.com/",
    "unsplashAPI": "https://api.unsplash.com/",
    "openWeatherAPI": "https://api.openweathermap.org/data/2.5/",
    "mapboxAPI": "https://api.mapbox.com/geocoding/v5/mapbox.places/",
    "newsAPI": "https://newsapi.org/v2/",
    "jsonPlaceholder": "https://jsonplaceholder.typicode.com/",
    "linkedin": "https://www.linkedin.com/",
    "twitter": "https://twitter.com/"
};

let users = [];

input.addEventListener("input", e =>{
    const value = e.target.trim();
    console.log(value);
})

fetch("appLinks")
.then(response => response.json())
.then(data =>{
    data.forEach(user => {
        const inputBox = document.createElement("input");
        inputBox.value = user.appLinks;
        document.body.appendChild(inputBox);
    })
})