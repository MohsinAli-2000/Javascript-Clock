const clockFnc = () => {
    let date = new Date();
    let data = String(date).split(" ");
    let time = Array.from(data[4].split(":"));
    let day = date.getDay();
    let Day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let hour = document.getElementById("hour");
    let min = document.getElementById("min");
    let sec = document.getElementById("seconds");
    let currDate = document.getElementById("date");
    let currDay = document.getElementById("day");

    hour.innerHTML = time[0];
    min.innerHTML = time[1];
    sec.innerHTML = time[2];
    currDate.innerHTML = data[2] + " " + data[1] + " " + data[3];
    currDay.innerHTML = Day[day];
}

setInterval(clockFnc, 1000);
