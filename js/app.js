
const songs = [
    {
    name: 'agoraphobic',
    artist: 'corpse',
    songID: '6ATqL4f1nFWwASrWi8nF6e'
},
{
    name: 'corso',
    artist: 'tyler the creator',
    songID: '46oHvXwpEZOFX518we1nJD'
},
{
    name: 'alien blues',
    artist: 'vundabar',
    songID: '6UjeFOCGYgMpBUtqKg1Je3'
},
{
    name: 'no children',
    artist: 'the mountain goats',
    songID: '5cxnSTLzGD1t9xcdmJYFVB'
}
]
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

shuffle(songs);
console.log(songs);

let songChoice = songs[0];
let choiceID = songChoice.songID;
let choiceName = songChoice.name;
let choiceArtist = songChoice.artist;

let score = 0;
document.getElementById('score').innerText = `Score:${score}`;

document.getElementById('music').innerHTML += `<iframe id="song" style="border-radius:75px" src="https://open.spotify.com/embed/track/${choiceID}?utm_source=generator" width="4%" height="80" frameBorder="0" allowfullscreen="" autoplay="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
// while(true){
// let songGuess = document.getElementById('name').value;
// let artistGuess = document.getElementById('artist').value;


// if (songGuess == choiceName && artistGuess == choiceArtist){
//     console.log('correct');
//     score = score + 1;
//     songs.shift;
// }
// }


// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }

// function playSong(){
//     let currentSong = document.getElementById('song'); 
//     currentSong.remove();
//     let songInt = getRandomInt(songs.length);
//     let songChoice = songs[songInt];
//     let choiceID = songChoice.songID;
//     document.getElementById('music').innerHTML += `<iframe id="song" style="border-radius:75px" src="https://open.spotify.com/embed/track/${choiceID}?utm_source=generator" width="4%" height="80" frameBorder="0" allowfullscreen="" autoplay="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
//     return songChoice;

// }

    currentSong = document.getElementById('song');
    // let songGuess = document.getElementById('name').value;
    // let artistGuess = document.getElementById('artist').value;
    // if (songGuess.length>0 && artistGuess.length>0 && songGuess.toLowerCase() === songName && artistGuess.toLowerCase() === artistName){
    //     score = score + 1;
    //     playSong();
    // }
    // console.log(songGuess);