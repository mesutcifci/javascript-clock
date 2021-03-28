let name = document.getElementById("myName");
let text2 = document.getElementById("text2");
let dateField = document.getElementById("date-field")

name.textContent = prompt("Lütfen Adınızı Giriniz", "Guest");
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timezone: 'UTC' };

function showTime() {

    setInterval(function () {
        let date = new Date().toLocaleTimeString('en-EN', options);
        date = date.split(" ");
    
        let time = date[4].trim();
        let timeLength = time.length;
        Number(time[0]) < 10 ? time = time.padStart(timeLength + 1, "0") : false;
    
        date.splice(4, 1, time);
        date = date.join(" ");
    
        dateField.textContent = date;
    
    }, 1000)
    
}

showTime();

