//code start
Webcam.attach('#camera');
camera=document.getElementById("camera");
Webcam.set({
    width: 350,
    height: 300,
    image_format:'png',
    png_quality: 90
})
function troll() {
    window.open("https://google.com")
}
function take_snapshot() {
    //window.alert("Yes this is a real function")
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
    });
}
console.log("Ml version,", ml5.version);


classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/uMrxxJh0n/model.json', modelLoaded);

function modelLoaded() {
    console.log("modelLoaded")
}

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}
function gotResult(error, results) {
    if(error) {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3)*100;
    }
}

//code end