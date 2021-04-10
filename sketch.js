const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg; 
var bg,backgroundImg ;
var response,rJSON,dt,hour;


function preload() { 
    getBackgroundImg() ;
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    
}

function draw(){

    // add condition to check if any background image is there to add
   if (bg){
    background(bg)
   }

    Engine.update(engine);

    if(hour<=11){
        textSize(25)
        fill ("white")
        text (hour+" AM",100,100)
    }
    
    if(hour>=13){
        textSize(25)
        fill ("white")
        text (hour-12+" PM",100,100)  
    }

        if(hour==12){
            textSize(25)
            fill ("white")
            text (hour+" PM",100,100) 
        }

        if(hour==0){
            textSize(25)
            fill ("white")
            text (hour+" AM",100,100) 
        }
    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
     response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
     rJSON=await response.json();
    // write code slice the datetime
     dt=await rJSON.datetime;
     hour=dt.slice(11,13)
    console.log(hour)
    // add conditions to change the background images from sunrise to sunset
    if (hour>=04 && hour<=06){
        bg=loadImage("sunrise1.png")
    }
    else if (hour>=06 && hour<=08){
        bg=loadImage("sunrise2.png");
    }
    else if (hour>=08 && hour<=10){
        bg=loadImage("sunrise3.png");
    }
    else if (hour>=10 && hour<=12){
        bg=loadImage("sunrise4.png");
    }
    else if (hour>=12 && hour<=14){
        bg=loadImage("sunrise5.png");
    }
    else if (hour>=14 && hour<=16){
        bg=loadImage("sunrise62.png");
    }
    else if (hour>=16 && hour<=18){
        bg=loadImage("sunset7.png");
    }
    else if (hour>=18 && hour<=20){
        bg=loadImage("sunset8.png");
    }
    else if (hour>=20 && hour<=23){
        bg=loadImage("sunset9.png");
    }
    else if (hour>=23 && hour==0){
        bg=loadImage("sunset10.png");
    }
    else if(hour==0 && hour<=03){
        bg=loadImage("sunset11.png");
    }
    else{
        bg=loadImage("sunset12.png");
    }

    
    //load the image in backgroundImg variable here
    //backgroundImg=loadImage(bg)
    
}
