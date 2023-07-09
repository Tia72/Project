Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("webcam");

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(stored_picture){
        document.getElementById("result").innerHTML = '<img id="display_image" src="' + stored_picture + '">';
    })
}

console.log("ml5 version - ", ml5.version);

var link = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/TuCX2PXD8/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}