let box = [
    { name: "zolfi", img: "194 music img prj/2FB_IMG_1731349665374.jpg", audio: "194 music img prj/Zulfe_de_maran_de_Shakoor_sagar_New_Pashto_Song(128k).mp3" },
    { name: "saze in saze", img: "194 music img prj/1FB_IMG_1731349663033.jpg", audio: "194 music img prj/Амели (Swerodo Remix)@Xz_Mussic.mp3" },
    { name: "USA music", img: "194 music img prj/3FB_IMG_1731936482154.jpg", audio: "194 music img prj/Гио_Пика_-_Фонтанчик_с_дельфином_(Adam_Maniac_&_Imanbek_Remix)(128k).m4a" }
]


let music = document.querySelector(".music")
let title = document.querySelector(".title");
let img1 = document.querySelector(".img");
let rang = document.querySelector(".musicLenght");
let totleTime = document.querySelector(".totleTime");
let currentTime = document.querySelector(".currentTime");

let back = document.querySelector("#back");
let play = document.querySelector("#play");
let pause = document.querySelector("#pause");
let next = document.querySelector("#next");





let curentMusic = 2;

console.log(box[curentMusic]);


let audio = new Audio(box[curentMusic].audio);


function musicInfo() {
    title.innerHTML = box[curentMusic].name;
    img1.src = box[curentMusic].img;
    audio.src = box[curentMusic].audio;
}



audio.addEventListener("canplay", function () {
    rang.max = audio.duration;
})

audio.addEventListener("timeupdate", function () {
    rang.value = audio.currentTime;
})

rang.addEventListener("input", function () {
    audio.currentTime = rang.value;
})

let red, green, blue;

play.addEventListener("click", () => {
    if (audio.pause) {
        audio.play()
        play.style.backgroundColor = "gold"
        pause.style.backgroundColor = "black"
    }

    img1.style.animationPlayState = "running"


    setInterval(function () {
        red = Math.floor(Math.random() * 255)
        blue = Math.floor(Math.random() * 255)
        green = Math.floor(Math.random() * 255)

        img1.style.boxShadow = "0 0 380px 200px rgb(" + red + " , " + blue + " , " + green + ""

    }, 100);




})

pause.addEventListener("click", () => {
    if (audio.play) {
        audio.pause()
        pause.style.backgroundColor = "gold"
        play.style.backgroundColor = "black"
    }

    img1.style.animationPlayState = "paused"

})


back.addEventListener("click", function () {
    curentMusic--;

    if (curentMusic < 0) {
        curentMusic = box.length - 1;
    }

    img1.style.animationPlayState = "running"

    audio.play()

    change()
})

next.addEventListener("click", function () {
    curentMusic++;
    if (curentMusic > 2) {
        curentMusic = box.length - 1;
    }

    img1.style.animationPlayState = "running"
    audio.play()

    change()
})

function change() {
    audio.pause()
    musicInfo()
    audio.play()

}








































// // let array = [
// //     "194 music img prj/Zulfe_de_maran_de_Shakoor_sagar_New_Pashto_Song(128k).mp3",
// //     "194 music img prj/Амели (Swerodo Remix)@Xz_Mussic.mp3",
// //     "194 music img prj/Гио_Пика_-_Фонтанчик_с_дельфином_(Adam_Maniac_&_Imanbek_Remix)(128k).m4a"
// // ]


// // let arrayBtn = 0;


// play.addEventListener("click", () => {
//     music.play();

//     currentTime.innerHTML = Math.floor(music.duration)
//     setInterval(() => {
//         totleTime.innerHTML = Math.floor(music.currentTime)
//     }, 1000);
// })

// pause.addEventListener("click", () => {
//     music.pause()
// })

// back.addEventListener("click", () => {
//     arrayBtn--;

//     if (arrayBtn < 0) {
//         arrayBtn = 2;
//     }

//     music.setAttribute("src", array[arrayBtn])
//     music.play();
// })


// next.addEventListener("click", () => {
//     arrayBtn++;

//     if (arrayBtn > 2) {
//         arrayBtn = 0;
//     }

//     music.setAttribute("src", array[arrayBtn])
//     music.play();
// })