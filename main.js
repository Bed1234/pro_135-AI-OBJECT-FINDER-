status = "";

text_input_value = "";
function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480,380);
    video.hide();
    
}
function draw() {
    image (video,0,0,480,380);
}
function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: Detecting object";
    text_input_value = document.getElementById("search").value;

}
function modelLoaded() {
    console.log("Model Loaded");
    status = true;
    
}
