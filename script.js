// write js code here if required
function updateTimer() {
    const timerElement = document.getElementById('timer');
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Adding 1 since months are zero-based
    const year = currentDate.getFullYear();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const formattedTimer = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

    timerElement.textContent = formattedTimer;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial update
updateTimer();

