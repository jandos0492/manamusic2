import React, { useState } from "react";
import SongPlayer from "../SongPlayer";
import songs from "../../data/songs.json";
import "./Library.css";

const Library = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(null);

  const handleSongPlay = (index) => {
    if (currentSongIndex === index) {
      setCurrentSongIndex(null);
    } else {
      setCurrentSongIndex(index);
    }
  }
  return (
    <div className="library">
      {songs.map((song, index) => (
        <SongPlayer
          key={song.id}
          title={song.title}
          albumCover={song.albumCover}
          audioUrl={song.audioUrl}
          isPlaying={currentSongIndex === index}
          onPlay={() => handleSongPlay(index)}
        />
      ))}
    </div>
  );
};

export default Library;