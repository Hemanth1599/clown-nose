noseX = 0;
noseY = 0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/NG3Q5CqW/clown-nose.png');
}

function setup(){
   canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);

    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    image(clown_nose,noseX-10,noseY-10,20,20);
}

function take_snapshot(){
    save('myfilteredimage.png');
}

function  modelLoaded(){
    console.log('posenet is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}