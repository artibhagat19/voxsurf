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
        "facebook": "https://www.facebook.com/",
        "twitter": "https://twitter.com/",
        "instagram": "https://www.instagram.com/",
        "linkedin": "https://www.linkedin.com/",
        "wikipedia": "https://www.wikipedia.org/",
        "reddit": "https://www.reddit.com/",
        "netflix": "https://www.netflix.com/",
        "github": "https://www.github.com/",
        "stackoverflow": "https://stackoverflow.com/",
        "microsoft": "https://www.microsoft.com/",
        "apple": "https://www.apple.com/",
        "yahoo": "https://www.yahoo.com/",
        "bing": "https://www.bing.com/",
        "ebay": "https://www.ebay.com/",
        "twitch": "https://www.twitch.tv/",
        "paypal": "https://www.paypal.com/",
        "quora": "https://www.quora.com/",
        "duckduckgo": "https://www.duckduckgo.com/",
        "zoom": "https://zoom.us/",
        "slack": "https://slack.com/",
        "discord": "https://discord.com/",
        "whatsapp": "https://www.whatsapp.com/",
        "telegram": "https://telegram.org/",
        "snapchat": "https://www.snapchat.com/",
        "tiktok": "https://www.tiktok.com/",
        "pinterest": "https://www.pinterest.com/",
        "canva": "https://www.canva.com/",
        "dropbox": "https://www.dropbox.com/",
        "adobe": "https://www.adobe.com/",
        "walmart": "https://www.walmart.com/",
        "target": "https://www.target.com/",
        "bbc": "https://www.bbc.com/",
        "cnn": "https://www.cnn.com/",
        "nytimes": "https://www.nytimes.com/",
        "forbes": "https://www.forbes.com/",
        "cnbc": "https://www.cnbc.com/",
        "hulu": "https://www.hulu.com/",
        "disneyplus": "https://www.disneyplus.com/",
        "primevideo": "https://www.primevideo.com/",
        "spotify": "https://www.spotify.com/",
        "soundcloud": "https://soundcloud.com/",
        "bandcamp": "https://bandcamp.com/",
        "imdb": "https://www.imdb.com/",
        "rottenTomatoes": "https://www.rottentomatoes.com/",
        "goodreads": "https://www.goodreads.com/",
        "airbnb": "https://www.airbnb.com/",
        "tripadvisor": "https://www.tripadvisor.com/",
        "expedia": "https://www.expedia.com/",
        "booking": "https://www.booking.com/",
        "skyscanner": "https://www.skyscanner.com/",
        "khanacademy": "https://www.khanacademy.org/",
        "coursera": "https://www.coursera.org/",
        "udemy": "https://www.udemy.com/",
        "edx": "https://www.edx.org/",
        "duolingo": "https://www.duolingo.com/",
        "freecodecamp": "https://www.freecodecamp.org/",
        "hackerrank": "https://www.hackerrank.com/",
        "leetcode": "https://leetcode.com/",
        "angular": "https://angular.io/",
        "reactjs": "https://react.dev/",
        "vuejs": "https://vuejs.org/",
        "npm": "https://www.npmjs.com/",
        "python": "https://www.python.org/",
        "mozilla": "https://www.mozilla.org/",
        "w3schools": "https://www.w3schools.com/",
        "developerMozilla": "https://developer.mozilla.org/",
        "unsplash": "https://unsplash.com/",
        "pexels": "https://www.pexels.com/",
        "pixabay": "https://www.pixabay.com/",
        "shutterstock": "https://www.shutterstock.com/",
        "behance": "https://www.behance.net/",
        "dribbble": "https://www.dribbble.com/",
        "fiverr": "https://www.fiverr.com/",
        "upwork": "https://www.upwork.com/",
        "freelancer": "https://www.freelancer.com/",
        "medium": "https://www.medium.com/",
        "blogger": "https://www.blogger.com/",
        "wordpress": "https://www.wordpress.com/",
        "weebly": "https://www.weebly.com/",
        "wix": "https://www.wix.com/",
        "godaddy": "https://www.godaddy.com/",
        "namecheap": "https://www.namecheap.com/",
        "cloudflare": "https://www.cloudflare.com/",
        "digitalocean": "https://www.digitalocean.com/",
        "aws": "https://aws.amazon.com/",
        "azure": "https://azure.microsoft.com/",
        "googlecloud": "https://cloud.google.com/",
        "heroku": "https://www.heroku.com/",
        "gitlab": "https://gitlab.com/",
        "bitbucket": "https://bitbucket.org/",
        "notion": "https://www.notion.so/",
        "evernote": "https://www.evernote.com/",
        "trello": "https://trello.com/",
        "asana": "https://asana.com/",
        "monday": "https://monday.com/",
        "clickup": "https://clickup.com/",
        "zoho": "https://www.zoho.com/"
      }
      

if (appLinks[appName]) {
    speakText("Opening " + appName); 
    window.open(appLinks[appName]);
} else {
    speakText("App not found. Try saying YouTube, WhatsApp, or Instagram.");
    alert("App not found. Try saying 'YouTube', 'WhatsApp', 'Instagram', etc.");
}
}

function speakText(text) {
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = "en-GB";
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}
document.getElementById("openAppBtn").addEventListener("click", function () {
    var textInput = document.getElementById("appInput").value.toLowerCase();
    speakText("Opening " + textInput);
    openApp(textInput);
});