import React, { useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import "./SongPlayer.css";

const SongPlayer = ({ title, audioUrl, albumCover, isPlaying, onPlay }) => {
  const audioRef = useRef(null)

  const togglePlay = () => {
    onPlay();
  };

  // Pause the audio player when isPlaying becomes false
  if (!isPlaying && audioRef.current && audioRef.current.audioEl) {
    audioRef.current.audioEl.pause();
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
        ref={audioRef}
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