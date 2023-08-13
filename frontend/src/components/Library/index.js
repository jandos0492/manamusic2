import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import songs from "../../data/songs.json";
import "./Library.css";

const Library = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlayerVisible, setIsPlayerVisible] = useState(true);

  const handleSongAreaClick = (index) => {
    if (currentSongIndex !== index) {
      setCurrentSongIndex(index);
      setIsPlayerVisible(true);
    } else {
      setIsPlayerVisible(true);
    }
  };

  return (
    <div className="library">
      {songs.map((song, index) => (
        <div
          key={song.id}
          className="song-player"
          onClick={() => handleSongAreaClick(index)}
        >
          {currentSongIndex === index && (
            <div className="album-cover">
              <img src={song.albumCover} alt={song.title} />
            </div>
          )}
          <h3 className="song-title">{song.title}</h3>
          {isPlayerVisible && currentSongIndex === index && (
            <ReactAudioPlayer
              className="player"
              src={song.audioUrl}
              autoPlay={currentSongIndex === index}
              controls={true}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Library;