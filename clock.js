let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();


    //Getting hour, min, sec
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();


    let hRotation = 30 * hh + mm/2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    console.log(sRotation);
    

    hour.style.transform = `rotate(${sRotation}deg)`;
    min.style.transform = `rotate(${sRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
    

    hour.style.webkittransform = `rotate(${hRotation}deg)`;
    min.style.webkittransform = `rotate(${mRotation}deg)`;
    sec.style.webkittransform = `rotate(${sRotation}deg)`;
    sec.style.webkittransform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 100);
