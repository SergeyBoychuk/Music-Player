




class Song {
    constructor(title,artist,duration, musicPath) {
        this.title = title;
        this.artist = artist;
        this.duration = duration;
        this.isPlaying = false;
        this.musicPath = musicPath;
        let linkTrue = false;
        let srcPath = '';
        
    }
    playSong() {
        this.isPlaying = true;
        this.linkTrue = true;
        
    }
    stop() {
        this.isPlaying = false;

    }
    toHTML() {
        let htmlString = '<li';
        htmlString += ' ';
        
        if(this.isPlaying) {
            htmlString += 'class="music-artist-name current"';
            let currentLi = document.getElementsByClassName("current"); 
        } 
        
        htmlString += 'src=';
        htmlString += this.musicPath;
        htmlString += '>';
        htmlString += '<span>';
        htmlString += 'Song Name: ' + '"' + this.title + '"';
        htmlString += '</span>';
        htmlString += '<span>';
        htmlString += 'Artist: ' + this.artist;
        htmlString += '</span>';
        htmlString += '<span>';
        htmlString += this.duration;
        htmlString += '</span>';
        htmlString += '</li>';
        
        return htmlString;
        
        
    }
    
}




class PlayList {
    constructor() {
        this.songs = [];
        this.nowPlayingIndex = 0;
        let srcPath;
        let audioPath;
        let playing = false;
    }

    add(song) {
        this.songs.push(song);
    }
    playSong() {
        let currentSong = this.songs[this.nowPlayingIndex];
        currentSong.playSong();
        var x = document.getElementsByTagName("LI")[this.nowPlayingIndex].getAttribute('src');
        this.srcPath  =  new Audio(x);
         
        if(!playing) {
            this.srcPath.play();
        }
        
    }
    stop() {
        let currentSong = this.songs[this.nowPlayingIndex];
        currentSong.stop();
        this.srcPath.pause();
        this.playing = false;
    }
    next() {
        this.stop();
        this.nowPlayingIndex ++;
        if(this.nowPlayingIndex === this.songs.length) {
            this.nowPlayingIndex = 0;
        }
        this.playSong();
    }
    renderInElement(list) {
        list.innerHTML = "";
        for(let i = 0; i < this.songs.length; i++) {
            list.innerHTML += this.songs[i].toHTML();
        }
    }
    

}




let playlist = new PlayList();
let letyougo = new Song('Let you go', 'MGK', '3:05', 'css/audio/LetYouGo.mp3');
let atmybest = new Song('At my best', 'MGK', '3:21', 'css/audio/AtMyBest.mp3');
let despacito = new Song('Despacito', 'Luis Fonsi', '4:42', 'css/audio/Despacito.mp3');
let americandreams = new Song('American Dreams', 'Papa Roach', '3:23', 'css/audio/AmericanDreams.mp3');
let faded = new Song('Faded', 'Alan Walker', '3:33', 'css/audio/faded.mp3');

playlist.add(letyougo);
playlist.add(atmybest);
playlist.add(despacito);
playlist.add(americandreams);
playlist.add(faded);

var playlistElement = document.getElementById('playlist')

playlist.renderInElement(playlistElement);

let clicked = false;
let playButton = document.getElementById('play');
playButton.onclick = (playing) => {
    this.playing = false;
    if(!this.clicked && !this.playing) {
        playlist.playSong();
        this.clicked = true;
    }
    playlist.renderInElement(playlistElement);
    
}
let nextButton = document.getElementById('next');
nextButton.onclick = (playing) => {
    this.playing = false;
    playlist.next();
    playlist.renderInElement(playlistElement);
}
let stopButton = document.getElementById('stop');
stopButton.onclick = (playing) => {
    this.clicked = false;
    playlist.stop();
    this.playing = false;
    playlist.renderInElement(playlistElement);
    console.log(this.clicked);
};









































































// function Playlist() {
//   this.songs = [];
//   this.nowPlayingIndex = 0;
//   this.audio = new Audio('css/audio/LetYouGo.mp3');
  
// }



// Playlist.prototype.add = function(song) {
//   this.songs.push(song);
// };

// Playlist.prototype.play = function() {
//   var currentSong = this.songs[this.nowPlayingIndex];
//   var currentSongPath = this.songs.sourcePath;
//   console.log(currentSongPath);
//   currentSong.play();
//   this.audio.play();
  
  
// };

// Playlist.prototype.stop = function(){
//   var currentSong = this.songs[this.nowPlayingIndex];
//   currentSong.stop();
//   this.audio.pause();
// };

// Playlist.prototype.next = function() {
//   this.stop();
//   this.nowPlayingIndex++;
//   if(this.nowPlayingIndex === this.songs.length) {
//     this.nowPlayingIndex = 0;
//   }
//   this.play();
// };

// Playlist.prototype.renderInElement = function(list) {
//     list.innerHTML = '';
//     for(var i = 0; i < this.songs.length; i++ ) {
//         list.innerHTML += this.songs[i].toHTML();
//     }
// };

// function Song(title, duration, sourcePath) {
//   this.title = title;
//   this.duration = duration;
//   this.sourcePath = sourcePath;
//   this.isPlaying = false;
// }

// Song.prototype.play = function() {
//   this.isPlaying = true;
// };

// Song.prototype.stop = function() {
//   this.isPlaying = false;
// };

// Song.prototype.toHTML = function() {
//     var htmlString = '<li';
//     htmlString += ' ';
//     if(this.isPlaying) {
//         htmlString += 'class="music-artist-name current"';
//     }
//     htmlString += '>';
//     htmlString += '<span>';
//     htmlString += this.title;
//     htmlString += '</span>';
//     htmlString += '<span>';
//     htmlString += this.duration;
//     htmlString += '</span>';
//     htmlString += '</li>';
//     return htmlString;
// };

// var playlist = new Playlist();

// var letYouGo = new Song("Let You Go", "2:43", 'css/audio/LetYouGo.mp3');
// var atMyBest = new Song("At My Best", "3:19", 'css/audio/AtMyBest.mp3');




// playlist.add(letYouGo);
// playlist.add(atMyBest);


// Song.prototype.playSong = function() {
//     var songToPlay = this.sourcePath;
//     songToPlay.play()
// }
// var atMyBestURL = new Audio(atMyBest.sourcePath);



// var playlistElement = document.getElementById("playlist");

// playlist.renderInElement(playlistElement);

// var playButton = document.getElementById('play');
// playButton.onclick = function() {
//     playlist.play();
//     // atMyBestURL.play();
//     playlist.renderInElement(playlistElement);
// }

// var nextButton = document.getElementById('next');
// nextButton.onclick = function() {
//     playlist.next();
//     playlist.renderInElement(playlistElement);
// }

// var stopButton = document.getElementById('stop');
// stopButton.onclick = function() {
//     playlist.stop();
//     // atMyBestURL.pause();
//     // atMyBestURL.currentTime = 0;
//     playlist.renderInElement(playlistElement);
// }


// // function Dice(sides) {
// //     this.sides = sides;
// //     this.roll = function() {
// //         let rolledNumber = Math.floor(Math.random() * this.sides) + 1;
// //         return rolledNumber;
// //     }
// // }

// // let sixSideDice = new Dice(6);

// // console.log(sixSideDice.roll());

// function Dice(sides) {
//     this.sides = sides;
// }

// Dice.prototype.roll = function() {
//     let rolledNumber = Math.floor(Math.random() * this.sides) + 1;
//     return rolledNumber;
// }

// let sixSideDice = new Dice(6);

// console.log(sixSideDice.roll())