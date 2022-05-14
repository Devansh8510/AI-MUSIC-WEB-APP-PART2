song1="";
song2="";

function preload() {
    song1=loadSound("Bilionera.mp3");
    song2=loadSound("Faded.mp3");
}

function setup(){
    canvas=createCanvas(400,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,400,350);
}