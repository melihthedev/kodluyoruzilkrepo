let nameSpace = document.getElementById("myName")
let clock = document.getElementById("myClock")

nameSpace.textContent = prompt("Adınız nedir?")

function showTime() {
    const today = new Date();
    let d = today.getDay();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m)
    s = checkTime(s)
    d = checkDay(d)
    clock.innerHTML = h + ":" + m + ":" + s + " " + d
    setTimeout(showTime, 1000);
}

function checkTime(n){
    if (n < 10) n = "0" + n;
    return n;
}

function checkDay(str) {
    switch (str) {
        case 1:
            str = "Pazartesi"
            break;
        case 3:
            str = "Salı"
            break;
        case 3:
            str = "Çarşamba"
            break;
        case 4:
            str = "Perşembe"
            break;
        case 5:
            str = "Cuma"
            break;
        case 6:
            str = "Cumartesi"
            break;
        case 7:
            str = "Pazar"
            break;   
        default:
            break;
    }
    return str;
}

showTime()