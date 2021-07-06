status = "";
Img = "";

function preload(){
    Img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();

    ObjectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    ObjectDetector.detect(Img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results)
    }
}

function draw(){
    image(Img,0,0,640,420);
    fill('black')
    noStroke();
    textSize(25)
    text("Dog",45 ,85);
    noFill();
    strokeWeight(4)
    stroke("#68bccf")
    rect(30,60,450,350);

    fill('black')
    noStroke();
    textSize(25)
    text("Cat",340,100);
    noFill();
    strokeWeight(4)
    stroke("#68bccf")
    rect(300,70,270,330);
}
