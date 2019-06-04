var area = document.getElementById('trombi');
var stone = document.getElementById('time');
var l = 26 // nombre de photos
for (let i = 1; i <= l; i++) {
    area.innerHTML += '<img class ="trombis" id = "trombi' + i + '" src="img/' + i + '.jpg" alt=""></img>';
}
var tirage = function () {
    if ($('#snap1').hasClass('hide1')) {
        $('#snap1').removeClass('hide1');
        $('#snap2').addClass('hide1');
    } else {
        $('#snap1').addClass('hide1');
        $('#snap2').removeClass('hide1');
        for (let i = 0; i < 13; i++) {
            alea();
        }
        var song = new Audio('./data/Finger-snap.mp3')
        song.play();
    }

}
var snaparea = document.getElementById('snap1');
var snaparea2 = document.getElementById('snap2');
var alea = function () {
    var rand = Math.ceil(Math.random() * l);
    var trombirandom = document.getElementById('trombi' + rand);
    $(trombirandom).fadeOut(1000);
    var backTime = function () {
        var trombis = document.getElementsByClassName('trombis');
        $(trombirandom).fadeIn(1000);
        $('#snap1').removeClass('hide1');
        $('#snap2').addClass('hide1');

    }

    stone.addEventListener("click", backTime);
}
snaparea2.addEventListener("click", tirage);
snaparea.addEventListener("click", tirage);