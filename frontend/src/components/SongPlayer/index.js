import React, { useState } from "react";
import {
  PlayButton,
  PrevButton,
  NextButton,
  Cover,
  Timer,
  Progress,
} from "react-soundplayer/components"
import "./SongPlayer.css";

const SongPlayer = (title, albumCover, audioUrl) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="song-player">
      <Cover
        trackTitle={title}
        trackArtist="Manas Bulan"
        trackCover={albumCover}
      />
      <div className="player-controls">
        <PlayButton
          playing={isPlaying}
          onTogglePlay={togglePlay}
          className="play-button"
        />
        <PrevButton className="prev-button" />
        <NextButton className="next-button" />
        <Timer className="timer" />
        <Progress className="progress" />
      </div>
    </div>
  );
};

export default SongPlayer;