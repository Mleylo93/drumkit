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




//Key press function

document.addEventListener('keypress', (event)=>{

if(event.key=='a'){
playBoomAudio.pause()
playBoomAudio.currentTime=0
playBoomAudio.play();




} else if(event.key=='s'){
    playClapAudio.pause()
    playClapAudio.currentTime=0
    playClapAudio.play();



} else if(event.key=='d'){
    playHihatAudio.pause()
    playHihatAudio.currentTime=0
    playHihatAudio.play();

  

} else if(event.key=='f'){
    playKickAudio.pause()
    playKickAudio.currentTime=0
    playKickAudio.play();

  


} else if(event.key=='g'){
    playOpenhatAudio.pause()
    playOpenhatAudio.currentTime=0
    playOpenhatAudio.play();

 

} else if(event.key=='h'){
    playRideAudio.pause()
    playRideAudio.currentTime=0
    playRideAudio.play();
    


    
} else if(event.key=='j'){
    playSnareAudio.pause()
    playSnareAudio.currentTime=0
    playSnareAudio.play();



}else if(event.key=='k'){
    playTinkAudio.pause()
    playTinkAudio.currentTime=0
    playTinkAudio.play();
    
   

} else if (event.key=='l'){
    playTomAudio.pause()
    playTomAudio.currentTime=0
    playTomAudio.play();


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

   
})

clapButt.addEventListener("click", ()=>{

    playClapAudio.pause()
    playClapAudio.currentTime=0
    playClapAudio.play();

 
})


hihatButt.addEventListener("click", ()=>{

    playHihatAudio.pause()
    playHihatAudio.currentTime=0
    playHihatAudio.play();


})


kickButt.addEventListener("click", ()=>{

    playKickAudio.pause()
    playKickAudio.currentTime=0
    playKickAudio.play();

    
})


openhatButt.addEventListener("click", ()=>{

    playOpenhatAudio.pause()
    playOpenhatAudio.currentTime=0
    playOpenhatAudio.play();

   
})


rideButt.addEventListener("click", ()=>{

    playRideAudio.pause()
    playRideAudio.currentTime=0
    playRideAudio.play();

  
})

snareButt.addEventListener("click", ()=>{

    playSnareAudio.pause()
    playSnareAudio.currentTime=0
    playSnareAudio.play();

    
})

tinkButt.addEventListener("click", ()=>{

    playTinkAudio.pause()
    playTinkAudio.currentTime=0
    playTinkAudio.play();

   
})

tomButt.addEventListener("click", ()=>{

    playTomAudio.pause()
    playTomAudio.currentTime=0
    playTomAudio.play();

})