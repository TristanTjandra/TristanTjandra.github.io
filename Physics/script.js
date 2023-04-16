var pos = 0;
var speed = 1;
var counter = 0
var interval;

//HYPER LINKS
function back(){
    window.location.href = "../MainMenu/main.html";
}
function reset(){
    location.reload()
}

//COUNTER
function updateCounter(){
    counter++;
    document.getElementById("counter").innerHTML = counter;
}
function startCounter(){
    clearInterval(interval);
    if(speed > 0){
        interval = setInterval(updateCounter, 1000/(speed*10));
    }
}
startCounter();

//SPEED BUTTON
function speedUp(){
    if(speed < 4){
        speed += 1;
        document.getElementById('background').style.backgroundPosition = "0px " + pos + "px";
        window.requestAnimationFrame(moveBackground);
        startCounter();
    }
    else{
        speed = 4
        startCounter();
    }
}

function speedDown(){
    if(speed > 1){
        speed -= 1;
        document.getElementById('background').style.backgroundPosition = "0px " + pos + "px";
        window.requestAnimationFrame(moveBackground);
        startCounter();
    }
    else{
        speed = 1;
        startCounter();
    }
}

//START ANIMATION
function moveBackground() {
    if(speed > 0 && speed < 5){
        pos += speed
        document.getElementById('background').style.backgroundPosition = "0px " + pos + "px";
        window.requestAnimationFrame(moveBackground);
    }
}
window.requestAnimationFrame(moveBackground);



