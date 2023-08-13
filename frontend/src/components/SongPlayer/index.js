import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import "./SongPlayer.css";

const SongPlayer = ({ title, audioUrl, albumCover, isPlaying, onPlay }) => {
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    if (!isPlaying) {
      setIsPaused(true);
    }
  }, [isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      setIsPaused(!isPaused);
    } else {
      setIsPaused(false);
      onPlay();
    }
  };

  const handlePause = () => {
    setIsPaused(true);
  }

  return (
    <div className="song-player">
      {isPlaying && (
        <div className="album-cover">
          <img src={albumCover} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <ReactAudioPlayer
        src={audioUrl}
        autoPlay={isPlaying && !isPaused}
        controls
        onPause={handlePause}
        onPlay={togglePlay}
      />
    </div>
  );
};

export default SongPlayer;