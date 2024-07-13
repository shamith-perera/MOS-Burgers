function updateDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    document.getElementById('date').innerText = formattedDate;
    document.getElementById('time').innerText = formattedTime; 
}

function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return 'th'; 
    switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}

function updateDateTime() {
    const now = new Date();
    const day = now.getDate();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const formattedDate = `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
    const formattedTime = `${hours}.${minutes}.${seconds}`;
    document.getElementById('date-time').innerHTML = `${formattedDate}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${formattedTime}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();
