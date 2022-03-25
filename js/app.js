//create array of songs
const songs = [
  {
    name: 'agoraphobic',
    artist: 'corpse',
    songID: '6ATqL4f1nFWwASrWi8nF6e',
  },
  {
    name: 'corso',
    artist: 'tyler the creator',
    songID: '46oHvXwpEZOFX518we1nJD',
  },
  {
    name: 'alien blues',
    artist: 'vundabar',
    songID: '6UjeFOCGYgMpBUtqKg1Je3',
  },
  {
    name: 'no children',
    artist: 'the mountain goats',
    songID: '5cxnSTLzGD1t9xcdmJYFVB',
  },
  {
    name: 'say so',
    artist: 'doja cat',
    songID: '3Dv1eDb0MEgF93GpLXlucZ',
  },
  {
    name: 'thats what i want',
    artist: 'lil nas x',
    songID: '0e8nrvls4Qqv5Rfa2UhqmO',
  },
  {
    name: 'hayloft',
    artist: 'mother mother',
    songID: '2kS6td1yvmpNgZTt1q5pQq',
  },
  {
    name: 'venom',
    artist: 'little simz',
    songID: '3A0ITFj6kbb9CggwtPe55f',
  },
  {
    name: 'buttercup',
    artist: 'jack stauber',
    songID: '2mlGPkAx4kwF8Df0GlScsC',
  },
  {
    name: 'soap',
    artist: 'melanie martinez',
    songID: '03f7xZmt2wHCIDJBFPK8G4',
  },
  {
    name: 'be nice to me',
    artist: 'the front bottoms',
    songID: '2mQqKFxQ6PDSKyFOCSLrXc',
  },
  {
    name: 'brutal',
    artist: 'olivia rodrigo',
    songID: '6SRsiMl7w1USE4mFqrOhHC',
  },
  {
    name: 'teenagers',
    artist: 'my chemical romance',
    songID: '7j31rVgGX9Q2blT92VBEA0',
  },
  {
    name: 'basket case',
    artist: 'green day',
    songID: '6L89mwZXSOwYl76YXfX13s',
  },
  {
    name: 'toxicity',
    artist: 'system of a down',
    songID: '0snQkGI5qnAmohLE7jTsTn',
  },
  {
    name: 'brass monkey',
    artist: 'beastie boys',
    songID: '2tY1gxCKslfXLFpFofYmJQ',
  },
]
//randomize a given array
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}
//randomize our array
shuffle(songs)

//grab information about the first song in our random array
let songChoice = songs[0]
let choiceID = songChoice.songID
let choiceName = songChoice.name
let choiceArtist = songChoice.artist

//initialize our score
let score = 0

//put our score on the screen as a variable so it can change
document.getElementById('score').innerText = `Score:${score}`
//embed the first song in the array onto the screen using spotify embed
document.getElementById(
  'music',
).innerHTML = `<iframe id="song" style="border-radius:75px" src="https://open.spotify.com/embed/track/${choiceID}?utm_source=generator" width="66%" height="90" frameBorder="0" allowfullscreen="" autoplay="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`

//check the text input from player
function checkGuess(array) {
  let songGuess = document.getElementById('name').value
  let artistGuess = document.getElementById('artist').value
  choiceName = songs[0].name
  choiceArtist = songs[0].artist

  //if the song input and artist input are correct
  if (
    songGuess.toLowerCase() === choiceName.toLowerCase() &&
    artistGuess.toLowerCase() === choiceArtist.toLowerCase()
  ) {
    //add 1 to our score
    score = score + 1
    //update score on screen
    document.getElementById('score').innerText = `Score:${score}`
    //remove first item in array
    array.shift()
    //grab information from next song in array
    let songChoice = songs[0]

    let choiceID = songChoice.songID
    //replace song on screen with next song
    document.getElementById(
      'music',
    ).innerHTML = `<iframe id="song" style="border-radius:75px" src="https://open.spotify.com/embed/track/${choiceID}?utm_source=generator" width="66%" height="90" frameBorder="0" allowfullscreen="" autoplay="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`
  }

  return score
}
//stop the game
function stopTime() {
  //remove all elements except for score and title
  document.getElementById('music').remove()
  document.getElementById('name').remove()
  document.getElementById('artist').remove()
  document.getElementById('guessBtn').remove()
  //move score
  document.getElementById('score').style.gridColumnStart = 3
  document.getElementById('score').style.gridRowStart = 3
  //use score to decide win or lose
  if (score < 4) {
    document.getElementById(
      'score',
    ).innerText = `You guessed ${score} songs right. Better luck next time.`
  } else {
    document.getElementById(
      'score',
    ).innerText = `You guessed ${score} songs right. Great job!`
  }
}
//set timer to 75 seconds before the game stops
const stopGame = setTimeout(stopTime, 75000)
