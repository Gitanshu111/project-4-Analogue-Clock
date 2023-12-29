let hr = document.getElementById('hour')
let min = document.getElementById('min')
let sec = document.getElementById('sec')

function displayTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hro = 30*hh +mm/2;
    let mro = 6*mm;
    let sr = 6*ss;
    hr.style.transform = `rotate(${hro}deg)`;
    min.style.transform = `rotate(${mro}deg)`;
    sec.style.transform = `rotate(${sr}deg)`;
}
setInterval(displayTime,1000);
document.getElementById('imageUpload').addEventListener('change', function(event) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function(e) {
            var clockElement = document.querySelector('.clock');
            clockElement.style.backgroundImage = `url(${e.target.result})`;
            clockElement.style.backgroundSize = 'cover';
            clockElement.style.backgroundPosition = 'center';
        };

        reader.readAsDataURL(event.target.files[0]);
    }
});
document.getElementById('numberColor').addEventListener('change', function(event) {
    var newColor = event.target.value;
    var numbers = document.querySelectorAll('.clock span b');

    numbers.forEach(function(number) {
        number.style.color = newColor;
    });
});
document.getElementById('hourHandColor').addEventListener('input', function(e) {
    document.getElementById('hour').style.setProperty('--clr', e.target.value);
});

document.getElementById('minuteHandColor').addEventListener('input', function(e) {
    document.getElementById('min').style.setProperty('--clr', e.target.value);
});

document.getElementById('secondHandColor').addEventListener('input', function(e) {
    document.getElementById('sec').style.setProperty('--clr', e.target.value);
});
