import React, {useState, useEffect} from 'react'
import Player from './Components/Player/Player'
import './App.css'
import SongDetails from './Components/SongDetails/SongDetails';

function App() {

const [songs] = useState([
  {
    "title": "Get Down",
    "artist": "IMLC",
    "img_src" : "./Songs_Images/Independent.png",
    "src" : "./Songs/IMLC-Get-Down.mp3",
    "link" : "https://freemusicarchive.org/music/independent-music-licensing-collective-imlc/new-launch-by-ketsa/get-down/"
  },
  {
    "title": "Warm Feeling",
    "artist": "AHOAMI",
    "img_src" : "./Songs_Images/waves.jpg",
    "src" : ". /Songs/warm-feeling_by_ahoami.mp3",
    "link" : " Music from Tunetank.com AHOAMI - Warm Feeling (Copyright Free Music) Download free: https://tunetank.com/track/3499-warm-feeling"
  },
  {
    "title": "Dreaming of Water",
    "artist": "IMLC",
    "img_src" : "./Songs_Images/Independent.png",
    "src" : ". /Songs/IMLC-Dreaming-of-Water.mp3",
    "link" : " https://freemusicarchive.org/music/independent-music-licensing-collective-imlc/new-launch-by-ketsa/dreaming-of-water/"
  },
  {
    "title": "Once Upon A Time",
    "artist": "Maarten Schellekens",
    "img_src" : "./Songs_Images/Once Upon A Time.png",
    "src" : ". /Songs/Maarten-Schellekens-Once-Upon-A-Time.mp3",
    "link" : " https://freemusicarchive.org/music/maarten-schellekens/orchestral-works/once-upon-a-time/"
  },
  {
    "title": "Whatever",
    "artist": "HoliznaCC0",
    "img_src" : "./Songs_Images/Whatever.png",
    "src" : "./Songs/HoliznaCC0-Whatever.mp3",
    "link" : "https://freemusicarchive.org/music/holiznacc0/lo-fi-and-chill/whatever-2/"
  },
  

  
]); 

const [currentIndex, setCurrentIndex] = useState(0);
const [nextIndex, setNextIndex] = useState(0);

useEffect(() => {
  setNextIndex(() => {
    if (currentIndex + 1 > songs.length - 1) {
      console.log("does not add")
      return 0;
      
    } else {
      console.log("changed song")
      return currentIndex + 1;

    }
  });
}, [currentIndex]);

  return (
    <div className='App'>
      <header>
          <SongDetails
            song={songs[currentIndex]}
            

          />
          <Player 
          song={songs[currentIndex]}
          currentIndex ={currentIndex}
          setCurrentIndex ={setCurrentIndex}
          nextIndex={nextIndex}
          songs={songs} />
      </header>
    </div>
  );
}

export default App;
