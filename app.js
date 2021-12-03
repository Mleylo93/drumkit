//Sounds
const playBoomAudio= document.getElementById("boomAudio");
const playClapAudio= document.getElementById("clapAudio");
const playHihatAudio= document.getElementById("hihatAudio");
const playKickAudio= document.getElementById("kickAudio");
const playOpenhatAudio= document.getElementById("openhatAudio");
const playRideAudio = document.getElementById("rideAudio");
const playSnareAudio= document.getElementById("snareAudio");
const playTinkAudio = document.getElementById("tinkAudio");
const playTomAudio= document.getElementById("tomAudio");

//Text for each noise
const showBoomText= document.getElementById("boomText");
const showClapText= document.getElementById("clapText");
const showHihatText= document.getElementById("hihatText");
const showKickText= document.getElementById("kickText");
const showOpenhatText= document.getElementById("openhatText");
const showRideText= document.getElementById("rideText");
const showSnareText=document.getElementById("snareText");
const showTinkText=document.getElementById("tinkText")
const showTomText=document.getElementById("tomText");


//Key press function

document.addEventListener('keypress', (event)=>{

if(event.key=='a'){
playBoomAudio.pause()
playBoomAudio.currentTime=0
playBoomAudio.play();

showBoomText.style.display="block";
showClapText.style.display="none";
showHihatText.style.display="none";
showKickText.style.display="none";
showOpenhatText.style.display="none";
showRideText.style.display="none";
showSnareText.style.display="none";
showTinkText.style.display="none";
showTomText.style.display="none";


} else if(event.key=='s'){
    playClapAudio.pause()
    playClapAudio.currentTime=0
    playClapAudio.play();

showBoomText.style.display="none";
showClapText.style.display="block";
showHihatText.style.display="none";
showKickText.style.display="none";
showOpenhatText.style.display="none";
showRideText.style.display="none";
showSnareText.style.display="none";
showTinkText.style.display="none";
showTomText.style.display="none";

} else if(event.key=='d'){
    playHihatAudio.pause()
    playHihatAudio.currentTime=0
    playHihatAudio.play();

    showBoomText.style.display="none";
    showClapText.style.display="none";
    showHihatText.style.display="block";
    showKickText.style.display="none";
    showOpenhatText.style.display="none";
    showRideText.style.display="none";
    showSnareText.style.display="none";
    showTinkText.style.display="none";
    showTomText.style.display="none";


} else if(event.key=='f'){
    playKickAudio.pause()
    playKickAudio.currentTime=0
    playKickAudio.play();

    showBoomText.style.display="none";
    showClapText.style.display="none";
    showHihatText.style.display="none";
    showKickText.style.display="block";
    showOpenhatText.style.display="none";
    showRideText.style.display="none";
    showSnareText.style.display="none";
    showTinkText.style.display="none";
    showTomText.style.display="none";


} else if(event.key=='g'){
    playOpenhatAudio.pause()
    playOpenhatAudio.currentTime=0
    playOpenhatAudio.play();

    showBoomText.style.display="none";
    showClapText.style.display="none";
    showHihatText.style.display="none";
    showKickText.style.display="none";
    showOpenhatText.style.display="block";
    showRideText.style.display="none";
    showSnareText.style.display="none";
    showTinkText.style.display="none";
    showTomText.style.display="none";

} else if(event.key=='h'){
    playRideAudio.pause()
    playRideAudio.currentTime=0
    playRideAudio.play();
    
    showBoomText.style.display="none";
    showClapText.style.display="none";
    showHihatText.style.display="none";
    showKickText.style.display="none";
    showOpenhatText.style.display="none";
    showRideText.style.display="block";
    showSnareText.style.display="none";
    showTinkText.style.display="none";
    showTomText.style.display="none";


    
} else if(event.key=='j'){
    playSnareAudio.pause()
    playSnareAudio.currentTime=0
    playSnareAudio.play();

    showBoomText.style.display="none";
    showClapText.style.display="none";
    showHihatText.style.display="none";
    showKickText.style.display="none";
    showOpenhatText.style.display="none";
    showRideText.style.display="none";
    showSnareText.style.display="block";
    showTinkText.style.display="none";
    showTomText.style.display="none";


}else if(event.key=='k'){
    playTinkAudio.pause()
    playTinkAudio.currentTime=0
    playTinkAudio.play();
    
    showBoomText.style.display="none";
    showClapText.style.display="none";
    showHihatText.style.display="none";
    showKickText.style.display="none";
    showOpenhatText.style.display="none";
    showRideText.style.display="none";
    showSnareText.style.display="none";
    showTinkText.style.display="block";
    showTomText.style.display="none";


} else if (event.key=='l'){
    playTomAudio.pause()
    playTomAudio.currentTime=0
    playTomAudio.play();

    showBoomText.style.display="none";
    showClapText.style.display="none";
    showHihatText.style.display="none";
    showKickText.style.display="none";
    showOpenhatText.style.display="none";
    showRideText.style.display="none";
    showSnareText.style.display="none";
    showTinkText.style.display="none";
    showTomText.style.display="block";
}


})

// Button press variable assignment

const boomButt = document.getElementById("boomButt");
const clapButt = document.getElementById("clapButt");
const hihatButt = document.getElementById("hihatButt");
const kickButt= document.getElementById("kickButt");
const openhatButt= document.getElementById("openhatButt");
const rideButt= document.getElementById("rideButt");
const snareButt=document.getElementById("snareButt");
const tinkButt=document.getElementById("tinkButt");
const tomButt=document.getElementById("tomButt");



boomButt.addEventListener("click", ()=>{

    playBoomAudio.pause()
    playBoomAudio.currentTime=0
    playBoomAudio.play();

    showBoomText.style.display="block";
    showClapText.style.display="none";
    showHihatText.style.display="none";
    showKickText.style.display="none";
    showOpenhatText.style.display="none";
    showRideText.style.display="none";
    showSnareText.style.display="none";
    showTinkText.style.display="none";
    showTomText.style.display="none";
})

clapButt.addEventListener("click", ()=>{

    playClapAudio.pause()
    playClapAudio.currentTime=0
    playClapAudio.play();

    showBoomText.style.display="none";
    showClapText.style.display="block";
    showHihatText.style.display="none";
    showKickText.style.display="none";
    showOpenhatText.style.display="none";
    showRideText.style.display="none";
    showSnareText.style.display="none";
    showTinkText.style.display="none";
    showTomText.style.display="none";
})


hihatButt.addEventListener("click", ()=>{

    playHihatAudio.pause()
    playHihatAudio.currentTime=0
    playHihatAudio.play();

    showBoomText.style.display="none";
    showClapText.style.display="none";
    showHihatText.style.display="block";
    showKickText.style.display="none";
    showOpenhatText.style.display="none";
    showRideText.style.display="none";
    showSnareText.style.display="none";
    showTinkText.style.display="none";
    showTomText.style.display="none";
})


kickButt.addEventListener("click", ()=>{

    playKickAudio.pause()
    playKickAudio.currentTime=0
    playKickAudio.play();

    showBoomText.style.display="none";
    showClapText.style.display="none";
    showHihatText.style.display="none";
    showKickText.style.display="block";
    showOpenhatText.style.display="none";
    showRideText.style.display="none";
    showSnareText.style.display="none";
    showTinkText.style.display="none";
    showTomText.style.display="none";
})


openhatButt.addEventListener("click", ()=>{

    playOpenhatAudio.pause()
    playOpenhatAudio.currentTime=0
    playOpenhatAudio.play();

    showBoomText.style.display="none";
    showClapText.style.display="none";
    showHihatText.style.display="none";
    showKickText.style.display="none";
    showOpenhatText.style.display="block";
    showRideText.style.display="none";
    showSnareText.style.display="none";
    showTinkText.style.display="none";
    showTomText.style.display="none";
})


rideButt.addEventListener("click", ()=>{

    playRideAudio.pause()
    playRideAudio.currentTime=0
    playRideAudio.play();

    showBoomText.style.display="none";
    showClapText.style.display="none";
    showHihatText.style.display="none";
    showKickText.style.display="none";
    showOpenhatText.style.display="none";
    showRideText.style.display="block";
    showSnareText.style.display="none";
    showTinkText.style.display="none";
    showTomText.style.display="none";
})

snareButt.addEventListener("click", ()=>{

    playSnareAudio.pause()
    playSnareAudio.currentTime=0
    playSnareAudio.play();

    showBoomText.style.display="none";
    showClapText.style.display="none";
    showHihatText.style.display="none";
    showKickText.style.display="none";
    showOpenhatText.style.display="none";
    showRideText.style.display="none";
    showSnareText.style.display="block";
    showTinkText.style.display="none";
    showTomText.style.display="none";
})

tinkButt.addEventListener("click", ()=>{

    playTinkAudio.pause()
    playTinkAudio.currentTime=0
    playTinkAudio.play();

    showBoomText.style.display="none";
    showClapText.style.display="none";
    showHihatText.style.display="none";
    showKickText.style.display="none";
    showOpenhatText.style.display="none";
    showRideText.style.display="none";
    showSnareText.style.display="none";
    showTinkText.style.display="block";
    showTomText.style.display="none";
})

tomButt.addEventListener("click", ()=>{

    playTomAudio.pause()
    playTomAudio.currentTime=0
    playTomAudio.play();

    showBoomText.style.display="none";
    showClapText.style.display="none";
    showHihatText.style.display="none";
    showKickText.style.display="none";
    showOpenhatText.style.display="none";
    showRideText.style.display="none";
    showSnareText.style.display="none";
    showTinkText.style.display="none";
    showTomText.style.display="block";
})