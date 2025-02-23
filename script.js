let input = document.querySelector(".inp");
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

input.addEventListener("input", (e) => {
    const value = e.target.value.trim().toLowerCase(); 
    
    if (appLinks[value]) {
        console.log("Redirecting to:", appLinks[value]);
        window.location.href = appLinks[value]; 
    }
});
