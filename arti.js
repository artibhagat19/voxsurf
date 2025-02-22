function startListening() {
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-GB";

    recognition.onresult = function (event) {
        var speechText = event.results[0][0].transcript.toLowerCase();
        document.getElementById("status").innerText = "You said: " + speechText;
        openApp(speechText);
    };

    recognition.onerror = function (event) {
        console.error("Speech Recognition Error:", event.error);
    };

    recognition.start();
}




function openApp(appName) {
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

    if (appLinks[appName]) {
        // window.location.href = appLinks[appName];
        window.open(appLinks[appName])
    } else {
        alert("App not found. Try saying 'YouTube', 'WhatsApp', 'Instagram', etc.");
    }
}