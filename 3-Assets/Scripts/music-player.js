const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');

const title = document.querySelector('#title');
const artist = document.querySelector('#artist');
const album = document.querySelector('#album');
const duration = document.querySelector('#duration');

const cover = document.querySelector('#cover');
const tracklist = document.querySelector('.playlist');

//Song list
var songlist = {
                "songs": [
                {
                    "name": "Forbidden Zone",
                    "artist": "Oingo Boingo",
                    "album": "Unreleased",
                    "duration": "03:59",
                    "url": "https://files.catbox.moe/khmt08.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/oingo_boingo_unreleased.jpg"
                }, //0 Main site playlist
                {
                    "name": "All The Pieces",
                    "artist": "Oingo Boingo",
                    "album": "Unreleased",
                    "duration": "04:01",
                    "url": "https://files.catbox.moe/ta88kx.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/oingo_boingo_unreleased.jpg"
                }, //1
                {
                    "name": "Game Above My Head",
                    "artist": "Blacnmange",
                    "album": "Mange Tout",
                    "duration": "03:16",
                    "url": "https://files.catbox.moe/ku7gsv.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/mange_tout.jpg"
                }, //2
                {
                    "name": "Go Away",
                    "artist": "Danny Elfman",
                    "album": "So-Lo",
                    "duration": "04:02",
                    "url": "https://files.catbox.moe/6l5wo6.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/so-lo.jpg"
                }, //3
                {
                    "name": "Opus for Four",
                    "artist": "Art of Noise",
                    "album": "In No Sense? Nonsense!",
                    "duration": "03:11",
                    "url": "https://files.catbox.moe/k3ip1u.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/in_no_sense_nonsense.jpg"
                }, //4
                {
                    "name": "Shame on You",
                    "artist": "Nik Kershaw",
                    "album": "Human Racing",
                    "duration": "03:37",
                    "url": "https://files.catbox.moe/t2lq06.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/human_racing.jpg"
                }, //5
                {
                    "name": "Stay",
                    "artist": "Oingo Boingo",
                    "album": "Dead Man's Party",
                    "duration": "03:37",
                    "url": "https://files.catbox.moe/pl1667.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/dead_mans_party.jpg"
                }, //6
                {
                    "name": "Please Please",
                    "artist": "DEVO",
                    "album": "Shout",
                    "duration": "03:04",
                    "url": "https://files.catbox.moe/ugc3ud.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/shout.jpg"
                }, //7
                {
                    "name": "New Toy",
                    "artist": "Lene Lovich",
                    "album": "New Toy",
                    "duration": "03:18",
                    "url": "https://files.catbox.moe/mw16da.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/new_toy.jpg"
                }, //8
                {
                    "name": "Just Another Day",
                    "artist": "Oingo Boingo",
                    "album": "Dead Man's Party",
                    "duration": "05:12",
                    "url": "https://files.catbox.moe/oidsqj.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/dead_mans_party.jpg"
                }, //9
                {
                    "name": "Jurisdiction of Love",
                    "artist": "DEVO",
                    "album": "Shout",
                    "duration": "03:00",
                    "url": "https://files.catbox.moe/vccpnv.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/shout.jpg"
                }, //10
                {
                    "name": "Better Luck Next Time",
                    "artist": "Oingo Boingo",
                    "album": "Unreleased",
                    "duration": "03:30",
                    "url": "https://files.catbox.moe/9pmwms.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/oingo_boingo_unreleased.jpg"
                }, //11
                {
                    "name": "Following",
                    "artist": "The Pheonomenal Handclap Band",
                    "album": "Form & Control",
                    "duration": "03:52",
                    "url": "https://files.catbox.moe/bqtwoq.mp3",
                    "cover_art_url": "/3-Assets/Images/AlbumCovers/form_and_control.jpg"
                } //12
              ]
};

JSON.stringify(songlist);

//Keep track of the songs
let songIndex = 0;

//Initially load song info DOM
loadSong(songIndex)

//Update song details
function loadSong(songIndex) {
    title.innerText = songlist.songs[songIndex].name;
    artist.innerText = songlist.songs[songIndex].artist;
    album.innerText = songlist.songs[songIndex].album;
    duration.innerText = songlist.songs[songIndex].duration;
    
    audio.src = songlist.songs[songIndex].url;
    cover.src = songlist.songs[songIndex].cover_art_url;
    audio.volume = 0.5;
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.innerHTML.replace('<img src="Images/Transparents/orange.png">')
    
    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play')
    
    audio.pause()
}

function prevSong() {
    songIndex--
    
    if(songIndex < 0) {
        songIndex = songlist.songs.length - 1
    }
    
    loadSong(songIndex)
    
    playSong()
}

function nextSong() {
    songIndex++
    
    if(songIndex > songlist.songs.length - 1) {
        songIndex = 0
    }
    
    loadSong(songIndex)
    
    playSong()
}

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth
    console.log(width)
    const clickX = e.offsetX
    const duration = audio.duration
    
    audio.currentTime = (clickX / width) * duration
    console.log(e.srcElement)
}

function setTrack(index) {
    loadSong(index);
    playSong();
    songIndex = index;
    
    //Update the highlighted track
    let tracklistItems = tracklist.getElementsByTagName('li');
    for(i = 0; i < songlist.songs.length; i++) {
        let trackIndex = tracklistItems[i].getAttribute('data-index');
        if(trackIndex == songIndex) {
            tracklistItems[i].className += " activeSong";
        } else {
            tracklistItems[i].className = tracklistItems[i].className.replace(" activeSong", "");
        }
    }
}

function blub() {
    var bubbles = new Audio('https://files.catbox.moe/gcvi71.wav');
    bubbles.volume = 0.2;
    bubbles.play();
}

// Event Listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')
    
    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

//Change song events
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);

//Tracklist
let tracklistItems = tracklist.getElementsByTagName('li');
for(i = 0; i < songlist.songs.length; i++) {
    let trackIndex = tracklistItems[i].getAttribute('data-index');
    
    let tracklistItemTitle = tracklistItems[i].getElementsByClassName('trackTitle');
    let tracklistItemArtist = tracklistItems[i].getElementsByClassName('trackArtist');
    let tracklistItemDuration = tracklistItems[i].getElementsByClassName('trackDuration');
    
    tracklistItemTitle[0].innerHTML = songlist.songs[trackIndex].name;
    tracklistItemArtist[0].innerHTML = songlist.songs[trackIndex].artist;
    tracklistItemDuration[0].innerText = songlist.songs[trackIndex].duration;
    
    if(trackIndex == songIndex) {
        tracklistItems[i].className += " activeSong";
    } else {
        tracklistItems[i].className = tracklistItems[i].className.replace(" activeSong", "");
    }
}

playSong();