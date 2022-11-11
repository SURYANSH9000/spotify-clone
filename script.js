console.log("Welconme to Spotify");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = document.getElementsByClassName("songItem");
let songs = [
    {songName:"Excuses", filePath: "1.mp3",coverPath: "cover1.jpg"},
    {songName:"Excuses", filePath: "2.mp3",coverPath: "cover1.jpg"},
    {songName:"Excuses", filePath: "3.mp3",coverPath: "cover1.jpg"},
    {songName:"Excuses", filePath: "4.mp3",coverPath: "cover1.jpg"},
    {songName:"Excuses", filePath: "5.mp3",coverPath: "cover1.jpg"},
    {songName:"Excuses", filePath: "6.mp3",coverPath: "cover1.jpg"},
    {songName:"Excuses", filePath: "7.mp3",coverPath: "cover1.jpg"},
    {songName:"Excuses", filePath: "8.mp3",coverPath: "cover1.jpg"},
    {songName:"Excuses", filePath: "9.mp3",coverPath: "cover1.jpg"},
]


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    prog = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(prog);
    myProgressBar.value = prog;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})