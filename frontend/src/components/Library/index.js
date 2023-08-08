import React from "react";
import SongPlayer from "../SongPlayer";
import songs from "../../data/songs.json";
import "./Library.css";
console.log(songs);

const Library = () => {

  return (
    <div className="library">
      {songs.map((song) => (
        <SongPlayer
          key={song.id}
          title={song.title}
          albumCover={song.albumCover}
          audioUrl={song.audioUrl}
        />
      ))}
    </div>
  );
};

export default Library;