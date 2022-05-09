import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay, faPause, faForward, faBackward, faStepForward, faStepBackward, faFastForward} from '@fortawesome/free-solid-svg-icons';

const Player = (props)=>{

    const {title, src} = props.song;
    const audioElement = new Audio(src);

    const [duration, setDuration] = useState(0);
    const [current_time, set_current_time] = useState(0);

    useEffect(() => {
     audioElement.addEventListener('loadedmetadata', (e) => {
     setDuration(e.target.duration)
    })},[audioElement]);

    /* audioElement.addEventListener("timeupdate", function () {
        let time = audioElement.currentTime;
        set_current_time(time);
        console.log(time);

        return audioElement.removeEventListener("timeupdate");
      });
    */
    

    const toggleMedia = ()=>{
        if (audioElement.paused === true)
        {
            console.log("playing")
            audioElement.play()
        }
        else{
            console.log("pausing")
            audioElement.pause()
        }
    }
    
    const fastFoward = ()=>{
        audioElement.currentTime += 5;
    }

    const fastBackward = ()=>{
        audioElement.currentTime -= 5;
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
            props.setCurrentIndex(props.currentIndex + 1);
            audioElement.pause();
            audioElement.currentTime = 0;
        } 
    }

    const playPrevSong = () =>{
        if (props.currentIndex > 0){
            props.setCurrentIndex(props.currentIndex - 1);
            audioElement.pause();
            audioElement.currentTime = 0;
        } 
    }


  return(  
  <div className="audio-player">
    <audio ></audio>
    <progress className="player-progress-bar" ></progress>
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

    </div>
  )
}


export default Player;