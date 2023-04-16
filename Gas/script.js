function next(){
    document.location.href = "../Chemistry/main.html";
}

var activeImageId = 1;
var nextImageId = 1;

setInterval(function(){
    nextImageId += 1;
    if(nextImageId < 4){
        document.getElementById('img' + activeImageId).classList.replace('visible', 'hidden');
        document.getElementById('img' + nextImageId).classList.replace('hidden', 'visible');
        activeImageId = nextImageId;
    }else{
        document.getElementById('img' + activeImageId).classList.replace('visible', 'hidden');
        document.getElementById('img' + nextImageId).classList.replace('hidden', 'visible');
        activeImageId = 4;
        nextImageId = 0;
    }
    
}, 100)