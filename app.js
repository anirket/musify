//grab all buttons
const logo = document.querySelectorAll('#logo path');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navlinks = document.querySelectorAll('.nav-links li');
let arjitsongs, edsongs, btssongs, ritvizsongs, allsongs;
const albumsorsongs = document.querySelector(".albumsorsongs");
const albums = document.querySelector(".albums");
const showalbums = document.querySelector(".showalbums");
let selectedartist;
let nametodisplay;
let imgsrc;
let currentsong;
let currentsongvalue;
let selectedlist;
let a = 1; //flap is initially down

//grab all buttons
const playorpause = document.querySelector(".playorpause");
const previoussong = document.querySelector(".previoussong");
const forwardsong = document.querySelector(".forwardsong");
const progressFill = document.querySelector(".progress-fill");
const songname = document.querySelector(".songname");
const flapArtist = document.querySelector(".Artist");
const shuffle = document.querySelector(".shuffle");
const repeat = document.querySelector(".repeat");
const images = document.querySelector(".images")

//default progressfill
progressFill.style.width = `0%`


//to toggle between audio and songs
let albumhtmlcontent = `

<div class="albums">
<div class="albumsection1">
    <div class="albumdiv album1"><img src="./artistimg/ritviz.jpg" alt=""></div>
    <span class="artistname artist1">Ritviz </span>
    <div class="albumdiv album2"><img src="./artistimg/BTS.jpg" alt=""></div>
    <span class="artistname artist2">BTS </span>
</div>
<div class="albumsection2">
    <div class="albumdiv album3"><img src="./artistimg/arjit.jpg" alt=""></div>
    <span class="artistname artist3"> Arjit Singh</span>
    <div class="albumdiv album4"><img src="./artistimg/ed.jpg" alt=""></div>
    <span class="artistname artist4">Ed Sheeran </span>
</div>
</div>
`;


//setup audio

let audio = new Audio;




//stroke animation begins 



//delay given and display made none to the preloading page 
const div = document.querySelector('.music');
setTimeout(function () {
    div.style.display = "none";

}, 4000);

//translate position of flap upwards and downwards in the main class
let flap = document.querySelector('.flap');
const translatebtn = document.querySelector('.translatebtn');
const main = document.querySelector('.main');

translatebtn.addEventListener('click', move)




//toggle flap
function move() {
    translatebtn.style.transition = "all 1.5s";
    flap.style.transition = "all 1.5s";
    images.style.transition = "all 1.5s ease";
    if (a === 0) {
        //going down
        flap.style.transform = 'translateY(420px)';
        translatebtn.style.transform = 'rotate(180deg)';
        images.style.opacity = '0';
        a = 1;
    }
    else {
        //going up
        flap.style.transform = "translateY(0px)";
        translatebtn.style.transform = "rotate(0deg)";
        images.style.opacity = "1";
        a = 0;
    }
}



//navbar
const navslide = () => {

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //toggle nav links 

        //animate lnks
        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navlinkfade 0.3s ease forwards ${index / 7 + 1}s`;
            }
        });

        //burger animation 
        burger.classList.toggle('toggle');


    });

}
//function invoked 
navslide();

//grab all json file
fetch("./JSON/arjit.json")
    .then((data) => data.json())
    .then((data) => {
        arjitsongs = data;
    })
fetch("./JSON/bts.json")
    .then((data) => data.json())
    .then((data) => {
        btssongs = data;
    })
fetch("./JSON/ed.json")
    .then((data) => data.json())
    .then((data) => {
        edsongs = data;
    })
fetch("./JSON/ritviz.json")
    .then((data) => data.json())
    .then((data) => {
        ritvizsongs = data;
    })
fetch("./JSON/allsongs.json")
    .then((data) => data.json())
    .then((data) => {
        allsongs = data;
    })


//when clicked on album show songs or when clicked on song play song
albumsorsongs.addEventListener("click", (e) => {
    // console.log(e.target.parentElement);

    if (e.target.parentElement.classList.contains("albumdiv")) {
        if (e.target.parentElement.classList.contains("album1")) {
            imgsrc = `./artistimg/ritviz.jpg`;
            nametodisplay = "Ritviz"
            selectedartist = ritvizsongs.songs;
            albumsorsongs.innerHTML = `

        <div class="songs">
        <img src="${imgsrc}" alt="">
        <div class="artistnamedisplay">${nametodisplay}</div>
        <ul class="songlist">
        
        </ul>
        </div>"
        
        `;
            const songlist = document.querySelector(".songlist")
            selectedartist.forEach((song) => {
                let li = document.createElement("li");
                li.classList.add("songselect");
                li.innerHTML = `${song.name}<i class="fas fa-music"></i>`;
                songlist.appendChild(li);
            })

        }
        else if (e.target.parentElement.classList.contains("album2")) {
            imgsrc = `./artistimg/BTS.jpg`
            nametodisplay = "BTS";
            selectedartist = btssongs.songs;
            albumsorsongs.innerHTML = `

        <div class="songs">
        <img src="${imgsrc}" alt="">
        <div class="artistnamedisplay">${nametodisplay}</div>
        <ul class="songlist">
        
        </ul>
        </div>"
        
        `;
            const songlist = document.querySelector(".songlist")
            selectedartist.forEach((song) => {
                let li = document.createElement("li");
                li.classList.add("songselect");
                li.innerHTML = `${song.name}<i class="fas fa-music"></i>`;
                songlist.appendChild(li);
            })
        }
        else if (e.target.parentElement.classList.contains("album3")) {
            imgsrc = `./artistimg/arjit.jpg`
            selectedartist = arjitsongs.songs;
            nametodisplay = "Arjit Singh"
            albumsorsongs.innerHTML = `
        <div class="songs">
        <img src="${imgsrc}" alt="">
        <div class="artistnamedisplay">${nametodisplay}</div>
        <ul class="songlist">
        
        </ul>
        </div>"
        
        `;
            const songlist = document.querySelector(".songlist")
            selectedartist.forEach((song) => {
                let li = document.createElement("li");
                li.classList.add("songselect");
                li.innerHTML = `${song.name}<i class="fas fa-music"></i>`;
                songlist.appendChild(li);
            })

        }
        else {
            imgsrc = `./artistimg/ed.jpg`;
            nametodisplay = "Ed Sheeran"
            selectedartist = edsongs.songs;
            albumsorsongs.innerHTML = `

        <div class="songs">
        <img src="${imgsrc}" alt="">
        <div class="artistnamedisplay">${nametodisplay}</div>
        <ul class="songlist">
        
        </ul>
        </div>"
        
        `;
            const songlist = document.querySelector(".songlist")
            selectedartist.forEach((song) => {
                let li = document.createElement("li");
                li.classList.add("songselect");
                li.innerHTML = `${song.name}<i class="fas fa-music"> </i>`;
                songlist.appendChild(li);
            })
        }
    }

    else if (e.target.classList.contains("songselect")) {
        //all further 
        audio.currentTime = 0;

        selectedartist.forEach((song, index) => {

            if (e.target.innerText === song.name) {

                selectedlist = e.target;
                console.log(song);
                audio.src = song.src;
                currentsong = song;
                currentsongvalue = index;
                playorpause.innerHTML = `<i class="fas fa-pause"></i>`;

                audio.play();
                flapupdate();
            }
        })
    }

})

//showalbums in nav slide
showalbums.addEventListener("click", () => {
    albumsorsongs.innerHTML = albumhtmlcontent;

    // nav.classList.remove('nav-active');
    if (a === 0) {
        //going down
        flap.style.transform = 'translateY(420px)';
        translatebtn.style.transform = 'rotate(180deg)';
        images.style.opacity = '0';
        a = 1;
    }

    nav.classList.toggle('nav-active');
    //toggle nav links 

    //animate lnks
    navlinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        }
        else {
            link.style.animation = `navlinkfade 0.3s ease forwards ${index / 7 + 1}s`;
        }
    });

    //burger animation 
    burger.classList.toggle('toggle');

})


//play pause toggle
playorpause.addEventListener("click", () => {
    if (audio.paused) {
        console.log("here");
        audio.play();

        playorpause.innerHTML = `<i class="fas fa-pause"></i>`;
    }
    else {
        console.log("should be here");
        audio.pause();
        playorpause.innerHTML = `<i class="fas fa-play"></i>`;
    }

})

//progress bar
audio.addEventListener("timeupdate", () => {
    let currenttime = audio.currentTime;
    let duration = audio.duration;
    let progressvalue = audio.currentTime / audio.duration;

    progressFill.style.width = `${progressvalue * 100}%`
    // console.log(progressvalue);
})

//backward song
previoussong.addEventListener("click", () => {
    audio.currentTime = 0;
    if (currentsongvalue === 0) {
        currentsongvalue = selectedartist.length - 1;
    }
    else {
        currentsongvalue--;
    }
    audio.src = selectedartist[currentsongvalue].src;
    playorpause.innerHTML = `<i class="fas fa-pause"></i>`;
    flapupdate();
    audio.play();
})

//forward song
forwardsong.addEventListener("click", () => {
    audio.currentTime = 0;
    if (currentsongvalue === selectedartist.length - 1) {
        currentsongvalue = 0;
    }
    else {
        currentsongvalue++;
    }
    audio.src = selectedartist[currentsongvalue].src;
    playorpause.innerHTML = `<i class="fas fa-pause"></i>`;
    flapupdate();
    audio.play();
})

//update flap
const flapupdate = () => {

    images.src = selectedartist[currentsongvalue].pic;
    flapArtist.textContent = selectedartist[currentsongvalue].artist;
    songname.textContent = selectedartist[currentsongvalue].name;
}


//replay
repeat.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();


})




//shuffle button
shuffle.addEventListener("click", () => {

    let randomsong = (Math.floor(Math.random() * selectedartist.length));
    console.log(randomsong);
    audio.src = selectedartist[randomsong].src;
    currentsongvalue = randomsong;
    audio.currentTime = 0;
    audio.play();
    flapupdate();

})






