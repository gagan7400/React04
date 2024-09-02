let audio = document.getElementById("audio");
let Singers = document.getElementById("Singers");
let songimg = document.getElementById("songImg");
let songbox = document.getElementById("songbox");
let songname = document.getElementById("songname");
let playpausebtn = document.getElementById("playpausebtn");
let inputplaylist = document.getElementById("inputplaylist");
let showplaylist = document.getElementById("showplaylist");
let addnewplaylist = document.getElementById("addnewplaylist");
let currentplaylistsongs = document.getElementById("currentplaylistsongs");
let currentplaylistname = document.getElementById("currentplaylistname");
let singername;
let songcount = 0;
let playlist = [];
let songdata = [{
    arjit: [
        { songname: "Leke-Prabhu-Ka-Naam", songImg: "./images/Leke-Prabhu-Ka-Naam.jpeg", songAddress: "./music/arjit/Leke-Prabhu-Ka-Naam.mp3" },
        { songname: "Ruaan", songImg: "./images/Ruaan.jpeg", songAddress: "./music/arjit/Ruaan.mp3" },
        { songname: "Satranga", songImg: "./images/Satranga.jpeg", songAddress: "./music/arjit/Satranga.mp3" },
        { songname: "Tere-Pyaar-Mein-Pritam", songImg: "./images/Tere-Pyaar-Mein-Pritam.jpeg", songAddress: "./music/arjit/Tere-Pyaar-Mein-Pritam.mp3" },
    ],
    sonu: [
        { songname: "Annamika-Nayeeka", songImg: "./images/Annamika-Nayeeka.jpeg", songAddress: "./music/sonu/Annamika-Nayeeka.mp3" },
        { songname: "Bol-Sajni-Meri-Boli", songImg: "./images/Bol-Sajni-Meri-Boli.jpeg", songAddress: "./music/sonu/Bol-Sajni-Meri-Boli.mp3" },
        { songname: "Phir-Mujhe-Dil", songImg: "./images/Phir-Mujhe-Dil.jpeg", songAddress: "./music/sonu/Phir-Mujhe-Dil.mp3" },
        { songname: "Usire-Usire", songImg: "./images/Usire-Usire.jpeg", songAddress: "./music/sonu/Usire-Usire.mp3" },
    ],
    neha: [
        { songname: "Dholida", songImg: "./images/Dholida.jpeg", songAddress: "./music/neha/Dholida.mp3" },
        { songname: "Do-Gallan", songImg: "./images/Do-Gallan.jpeg", songAddress: "./music/neha/Do-Gallan.mp3" },
        { songname: "Maahi-Ve", songImg: "./images/Maahi-Ve.jpeg", songAddress: "./music/neha/Maahi-Ve.mp3" },
        { songname: "Teri-Yaad", songImg: "./images/Teri-Yaad.jpeg", songAddress: "./music/neha/Teri-Yaad.mp3" },
    ],
    sidhu: [
        { songname: "Built", songImg: "./images/Built.jpeg", songAddress: "./music/sidhu/Built.mp3" },
        { songname: "Drippy", songImg: "./images/Drippy.jpeg", songAddress: "./music/sidhu/Drippy.mp3" },
        { songname: "Invincible", songImg: "./images/Invincible.jpeg", songAddress: "./music/sidhu/Invincible.mp3" },
        { songname: "Regret", songImg: "./images/Regret.jpeg", songAddress: "./music/sidhu/Regret.mp3" },
    ]
}
]
songdata[0].all = [...songdata[0].arjit, ...songdata[0].sonu, ...songdata[0].neha, ...songdata[0].sidhu]
console.log("hello world")
// change the 
let changeBySinger = (getselect) => {
    singername = getselect.value;
    songbox.innerHTML = ""
    for (let i in songdata[0]) {
        if (i === singername) {
            songcount = 0;
            songdata[0][i].forEach((element) => {
                let songs = document.createElement("div");
                songs.setAttribute("class", "songs");
                songs.innerHTML = element.songname;
                songbox.appendChild(songs);
                songs.addEventListener("click", () => {
                    songcount = songdata[0][i].indexOf(element);
                    audio.src = element.songAddress;
                    songimg.src = element.songImg;
                    songname.innerHTML = element.songname;
                    playpause(playpausebtn)
                })
            });
        }
    }
    audio.src = songdata[0][singername][0].songAddress;
    songimg.src = songdata[0][singername][0].songImg;
    songname.innerHTML = songdata[0][singername][0].songname;
}
let select = document.getElementById("Singers")
changeBySinger(select);

// for play and pause the song 
let playpause = (btn) => {
    if (audio.paused) {
        audio.play();
        btn.innerHTML = `<i class="bi bi-pause"></i>`;
    } else {
        audio.pause();
        btn.innerHTML = `<i class="bi bi-play"></i>`;
    }
}

// backwaerdsong 
let backward = () => {
    for (let i in songdata[0][singername]) {
        if (songdata[0][singername][i].songname.includes(songname.innerHTML.trim())) {
            if (songcount > 0) {
                songcount--;
                audio.src = songdata[0][singername][songcount].songAddress;
                songimg.src = songdata[0][singername][songcount].songImg;
            } else {
                var v = songdata[0][singername].length
                songcount = v - 1;
                audio.src = songdata[0][singername][songcount].songAddress;
                songimg.src = songdata[0][singername][songcount].songImg;
            }
            playpause(playpausebtn)
        }
    }
    songname.innerHTML = songdata[0][singername][songcount].songname;
}

// forward song 
let forward = () => {
    for (let i in songdata[0][singername]) {
        if (songdata[0][singername][i].songname.includes(songname.innerHTML.trim())) {
            if (songcount < songdata[0][singername].length - 1) {
                songcount++;
                audio.src = songdata[0][singername][songcount].songAddress;
                songimg.src = songdata[0][singername][songcount].songImg;
            } else {
                songcount = 0;
                audio.src = songdata[0][singername][songcount].songAddress;
                songimg.src = songdata[0][singername][songcount].songImg;
            }
            playpause(playpausebtn)
        }
    }
    songname.innerHTML = songdata[0][singername][songcount].songname;
}

// add this song to current playlist 
let Addthistoplaylist = () => {
    if (playlist.length == 0) {
        alert("please add new playlist");
    } else {
        for (let i in songdata[0][singername]) {
            if (songdata[0][singername][i].songname.includes(songname.innerHTML.trim())) {
                for (let k in playlist) {
                    for (let name in playlist[k]) {
                        if (name == currentplaylistname.innerText.trim()) {
                            playlist[k][name].push(songdata[0][singername][i]);
                            Displaylist(playlist[k][name]);
                            break;
                        }
                    }
                }
            }
        }
    }
}

// add new playlist 
addnewplaylist.addEventListener("click", () => {
    if (inputplaylist.value) {
        let playlistsong = document.createElement("div");
        playlistsong.setAttribute("class", "songs");
        playlistsong.innerHTML = inputplaylist.value;
        playlistsong.addEventListener("click", (event) => {
            currentplaylistname.innerText = event.target.innerText;
            for (let k in playlist) {
                for (let name in playlist[k]) {
                    if (name == event.target.innerText.trim()) {
                        Displaylist(playlist[k][name]);
                        break;
                    }
                }
            }
        })
        showplaylist.appendChild(playlistsong);
        currentplaylistname.innerText = inputplaylist.value.trim();
        playlist.push({ [inputplaylist.value]: [] });
        for (let k in playlist) {
            for (let name in playlist[k]) {
                if (name == currentplaylistname.innerText.trim()) {
                    Displaylist(playlist[k][name]);
                    break;
                }
            }
        }
        inputplaylist.value = ""
    } else {
        alert("please add any name")
    }
})


// show to playlist name 
let Displaylist = (data) => {
    currentplaylistsongs.innerHTML = data.map((v, i) => {
        return `<div class="songs" onclick="playthisone(${i})">${v.songname} </div>`
    }).join("");
}

// play the playlist song 
let playthisone = (i) => {
    for (let k in playlist) {
        for (let name in playlist[k]) {
            if (name == currentplaylistname.innerText.trim()) {
                audio.src = playlist[k][name][i].songAddress;
                songimg.src = playlist[k][name][i].songImg;
                songname.innerHTML = playlist[k][name][i].songname;
                playpause(playpausebtn);;
            }
        }
    }
}