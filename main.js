Webcam.set({
    width: 460,
    height: 340,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("webcam");

Webcam.attach("#webcam");

function cam(){
    Webcam.snap(function(data_uri){
        document.getElementById("cap").innerHTML = '<img id = "capture" src = ' + data_uri + ' >';
    });
}


console.log("ml5 version: " + ml5.version);

classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/AZGCSEZDX/model.json", modelLoaded);

function modelLoaded(){
    console.log("Image Initialized");
}

function identify(){
    img = document.getElementById("capture")
    classifier.classify(img, gotResult)
}

function gotResult(error, result){
    if(error){
        console.log(error)
    }
    else{
        document.getElementById("result_obj").innerHTML = "Object: " + results[0].label;
        document.getElementById("reult_acc").innerHTML = "Accuracy: " + (results[0].confidence.toFixed(2));
    }
}