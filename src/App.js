import React, {useState, useEffect} from 'react'
import Player from './Components/Player/Player'
import './App.css'
import SongDetails from './Components/SongDetails/SongDetails';

function App() {

const [songs] = useState([
  {
    "title": "$orries",
    "artist": "Peachy!",
    "img_src" : "./Songs_Images/picture-1.png",
    "src" : "./Songs/$orries.mp3",
    "link" : "hello"
  },
  {
    "title": "Warm Feeling",
    "artist": "AHOAMI",
    "img_src" : "./Songs_Images/waves.jpg",
    "src" : "./Songs/warm-feeling_by_ahoami.mp3",
    "link" : " Music from Tunetank.com AHOAMI - Warm Feeling (Copyright Free Music) Download free: https://tunetank.com/track/3499-warm-feeling"
  }
  
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
