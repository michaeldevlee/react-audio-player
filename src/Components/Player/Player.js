import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay, faPause, faForward, faBackward, faStepForward, faStepBackward, faFastForward} from '@fortawesome/free-solid-svg-icons';

const Player = (props)=>{

    const {title, src, link} = props.song;
    const audioElement = useRef(new Audio(src));

    const [duration, setDuration] = useState(0);
    const [current_time, set_current_time] = useState(0);


    useEffect(() => {
        audioElement.current.pause();
        audioElement.current = new Audio(src);

        audioElement.current.addEventListener('loadedmetadata', (e) => {
            setDuration(e.target.duration);
          });
    },[props.currentIndex])

    useEffect(()=>{
        setInterval(()=>{
            set_current_time(audioElement.current.currentTime);
            console.log(audioElement.current.currentTime)
        },1000)
    },[]);
    

    const toggleMedia = ()=>{
        if (audioElement.current.paused === true)
        {
            console.log("playing")
            audioElement.current.play()
        }
        else{
            console.log("pausing")
            audioElement.current.pause()
        }
    }
    
    const fastFoward = ()=>{
        audioElement.current.currentTime += 5;
    }

    const fastBackward = ()=>{
        audioElement.current.currentTime -= 5;
    }

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
      }

    const playNextSong = () =>{
        if (props.currentIndex < props.songs.length-1){
            audioElement.current.pause();
            audioElement.current.currentTime = 0;
            props.setCurrentIndex(props.currentIndex + 1);
            console.log('current index is', props.currentIndex)
            
        } 
    }

    const playPrevSong = () =>{
        if (props.currentIndex > 0){
            audioElement.current.currentTime = 0;
            props.setCurrentIndex(props.currentIndex - 1);
            audioElement.current.pause();
        } 
    }


  return(  
  <div className="audio-player">
    <audio ></audio>
    <s className="player-s-bar" ></s>
    <h6 className="song-duration">{calculateTime(current_time)} : {calculateTime(duration)}</h6>

    <div className="player-controls">
        <button className="skip-backwards-button" onClick={playPrevSong}>
            <FontAwesomeIcon icon={faStepBackward} />
        </button>
        <button className="fast-backward-button" onClick={fastBackward} >
            <FontAwesomeIcon icon={faBackward} />
            </button>
        <button className="play-button" onClick={toggleMedia} >
            <FontAwesomeIcon icon={faPlay} />
        </button>
        <button className="fast-forward-button" onClick={fastFoward}>
            <FontAwesomeIcon icon={faForward} />
        </button>
        <button className="skip-forwards-button" onClick={playNextSong}>
            <FontAwesomeIcon icon={faStepForward} />
        </button>
      </div>

        <h2 className="credit-header">Credits</h2>
      <text className="credit-link">
            {link}
        </text>

    </div>
  )
}


export default Player;