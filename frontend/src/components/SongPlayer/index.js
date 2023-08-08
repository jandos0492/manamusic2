import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import "./SongPlayer.css";

const SongPlayer = ({ title, audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="song-player">
      <h3>{title}</h3>
      <ReactAudioPlayer
        src={audioUrl}
        autoPlay={isPlaying}
        controls
        onPlay={togglePlay}
        onPause={togglePlay}
      />
    </div>
  );
};

export default SongPlayer;