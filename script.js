const currentTimeUTCElement = document.getElementById("currentTimeUTC");
function updateCurrentTimeUTC() {const currentTime = newDate().toUTCString();
    currentTimeUTCElement.innerText = 'current Time (UTC): $ {currentTime}';
}

updateCurrentTimeUTC();
setInterval(updateCurrentTimeUTC, 1000)
