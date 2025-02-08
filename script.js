document.addEventListener('DOMContentLoaded', (event) => {
    function updateTime() {
        const currentTimeUTC = new Date().toUTCString();
        document.getElementById('currentTimeUTC').textContent = `Current Time: ${currentTimeUTC}`;
    }

    // Update time every second
    setInterval(updateTime, 1000);
    updateTime(); // Initial call to avoid one-second delay
});
