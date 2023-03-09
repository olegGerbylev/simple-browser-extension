let pauseRef = document.getElementById("pause");
let playerRef = document.getElementById("player")
let leftPlayerButtonRef = document.getElementById("playerLeftButton")
let rightPlayerButtonRef = document.getElementById("playerRightButton")
let soundNameRef = document.getElementById("name")
let playerIcon = document.getElementById("playerIcon")
let volumeButton = document.getElementById("playerVolume")
let inputVolume = document.getElementById("inputVolume")

let isShowVolume = false
let isMusicPlay = false
let musicId = 0

let musicList =[
    {name: "After Dark", path: "mr-kitty-after-dark.mp3"},
    {name: "Little Dark Age", path: "MGMT - Little Dark Age .mp3"},
    {name: "Call Me", path: "Call_Me.mp3"},
]


const switchMusic = (number)=>{
    musicId = musicId + number
    if(musicId === 3){
        musicId = 0
    }
    if (musicId === -1){
        musicId = 2
    }
    playerRef.src = musicList[musicId].path
    playerRef.play()
    isMusicPlay = true
    soundNameRef.innerHTML = musicList[musicId].name
}

pauseRef.addEventListener('click', ()=>{
    if (!isMusicPlay){
        playerRef.play()
        playerIcon.innerText = "pause"
    } else {
        playerRef.pause()
        playerIcon.innerText = "play_arrow"
    }
    isMusicPlay = !isMusicPlay
    console.log(isMusicPlay)
})

volumeButton.addEventListener("click",()=>{
    if (!isShowVolume){
        inputVolume.classList.remove("hide");
    }else{
        inputVolume.classList.add("hide")
    }
    isShowVolume = !isShowVolume
})

leftPlayerButtonRef.addEventListener('click', ()=>{
    switchMusic(-1)
})

rightPlayerButtonRef.addEventListener('click', ()=>{
    switchMusic(1)
})

inputVolume.addEventListener('change',()=>{
    playerRef.volume = inputVolume.value/100
})