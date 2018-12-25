var x = document.getElementById("Leave Like That");
var y = document.getElementById("Obstacles");
var z = document.getElementById("Crosses");
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");
var playhead = document.getElementById("elapsed");
var timeline = document.getElementById("slider");
var timer = document.getElementById("timer");
var duration;
playButton.style.visibility = "hidden";

var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
x.addEventListener("timeupdate", function(){timeUpdate(x)}, false);

function timeUpdate(a) {
	var playPercent = timelineWidth * (a.currentTime / duration);
    playhead.style.width = playPercent + "px";
    duration = a.duration;
	var secondsIn = Math.floor(((a.currentTime / duration)) * 100);
    timer.innerHTML = secondsIn+"% /"+Math.floor(a.duration/60)+":"+Math.floor(a.duration%60);
}

playButton.onclick = function() {
    if(x.currentTime != 0){
        x.play();
    }
    else if(y.currentTime != 0){
        y.play();
    }
    else if(z.currentTime != 0){
        z.play();
    }
    else{
        x.play();
    }
	playButton.style.visibility = "hidden";
	pause.style.visibility = "visible";
}
prevButton.onclick = function() {
    if(x.currentTime != 0){
        x.pause();
        x.currentTime = 0;
        $('#song').text(z.id);
        $('#artist').text(z.getAttribute("artist"));
        $('.cover img').attr('src',z.getAttribute("imagesrc"));
        z.currentTime = 0;
        z.addEventListener("timeupdate", function(){timeUpdate(z)}, false);
        z.play();
    }
    else if(y.currentTime != 0){
        y.pause();
        y.currentTime = 0;
        $('#song').text(x.id);
        $('#artist').text(x.getAttribute("artist"));
        $('.cover img').attr('src',x.getAttribute("imagesrc"));
        x.currentTime = 0;
        x.addEventListener("timeupdate", function(){timeUpdate(x)}, false);
        x.play();
    }
    else if(z.currentTime != 0){
        z.pause();
        z.currentTime = 0;
        $('#song').text(y.id);
        $('#artist').text(y.getAttribute("artist"));
        $('.cover img').attr('src',y.getAttribute("imagesrc"));
        y.currentTime = 0;
        y.addEventListener("timeupdate", function(){timeUpdate(y)}, false);
        y.play();
    }
    else{
        y.pause();
        y.currentTime = 0;
        $('#song').text(x.id);
        $('#artist').text(x.getAttribute("artist"));
        $('.cover img').attr('src',x.getAttribute("imagesrc"));
        x.currentTime = 0;
        x.addEventListener("timeupdate", function(){timeUpdate(x)}, false);
        x.play();
    }
	playButton.style.visibility = "hidden";
	pause.style.visibility = "visible";
}
nextButton.onclick = function() {
    if(x.currentTime != 0){
        x.pause();
        x.currentTime = 0;
        $('#song').text(y.id);
        $('#artist').text(y.getAttribute("artist"));
        $('.cover img').attr('src',y.getAttribute("imagesrc"));
        y.currentTime = 0;
        y.addEventListener("timeupdate", function(){timeUpdate(y)}, false);
        y.play();
    }
    else if(y.currentTime != 0){
        y.pause();
        y.currentTime = 0;
        $('#song').text(z.id);
        $('#artist').text(z.getAttribute("artist"));
        $('.cover img').attr('src',z.getAttribute("imagesrc"));
        z.currentTime = 0;
        z.addEventListener("timeupdate", function(){timeUpdate(z)}, false);
        z.play();
    }
    else if(z.currentTime != 0){
        z.pause();
        z.currentTime = 0;
        $('#song').text(x.id);
        $('#artist').text(x.getAttribute("artist"));
        $('.cover img').attr('src',x.getAttribute("imagesrc"));
        x.currentTime = 0;
        x.addEventListener("timeupdate", function(){timeUpdate(x)}, false);
        x.play();
    }
    else{
        z.pause();
        z.currentTime = 0;
        $('#song').text(x.id);
        $('#artist').text(x.getAttribute("artist"));
        $('.cover img').attr('src',x.getAttribute("imagesrc"));
        x.currentTime = 0;
        x.addEventListener("timeupdate", function(){timeUpdate(x)}, false);
        x.play();
    }
	playButton.style.visibility = "hidden";
	pause.style.visibility = "visible";
}
pauseButton.onclick = function() {
    if(x.currentTime != 0){
        x.pause();
    }
    if(y.currentTime != 0){
        y.pause();
    }
    if(z.currentTime != 0){
        z.pause();
    }
	playButton.style.visibility = "visible";
	pause.style.visibility = "hidden";
}

x.onended = function() {
    x.currentTime = 0;
    $('#song').text(y.id);
    $('#artist').text(y.getAttribute("artist"));
    $('.cover img').attr('src',y.getAttribute("imagesrc"));
    y.currentTime = 0;
    y.addEventListener("timeupdate", function(){timeUpdate(y)}, false);
    y.play();
};
y.onended = function() {
    y.currentTime = 0;
    $('#song').text(z.id);
    $('#artist').text(z.getAttribute("artist"));
    $('.cover img').attr('src',z.getAttribute("imagesrc"));
    z.currentTime = 0;
    z.addEventListener("timeupdate", function(){timeUpdate(z)}, false);
    z.play();
};
z.onended = function(){
    z.currentTime = 0;
    $('#song').text(x.id);
    $('#artist').text(x.getAttribute("artist"));
    $('.cover img').attr('src',x.getAttribute("imagesrc"));
    x.currentTime = 0;
    x.addEventListener("timeupdate", function(){timeUpdate(x)}, false);
    x.play();
};
