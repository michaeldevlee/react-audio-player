import React from "react";


const SongDetails = (props) => {
    const {title, artist, img_src} = props.song


    return (
        <div className="song-details">
            <div className ="image">
                <img className ="album-cover" src={img_src}></img>
            </div>
            <h3 className="title">{title}</h3>
            <h5 className="artist">by {artist}</h5>
        </div>
    )
}



export default SongDetails;