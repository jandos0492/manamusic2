// import React, { useState } from "react";
// import SongPlayer from "../SongPlayer";
// import songs from "../../data/songs.json";
// import "./Library.css";

// const Library = () => {
//   const [currentSongIndex, setCurrentSongIndex] = useState(null);

//   const handleSongPlay = (index) => {
//     if (currentSongIndex === index) {
//       setCurrentSongIndex(null);
//     } else {
//       setCurrentSongIndex(index);
//     }
//   }
//   return (
//     <div className="library">
//       {songs.map((song, index) => (
//         <SongPlayer
//           key={song.id}
//           title={song.title}
//           albumCover={song.albumCover}
//           audioUrl={song.audioUrl}
//           isPlaying={currentSongIndex === index}
//           onPlay={() => handleSongPlay(index)}
//         />
//       ))}
//     </div>
//   );
// };

// export default Library;

import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import songs from "../../data/songs.json";
import "./Library.css";

const Library = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlayerVisible, setIsPlayerVisible] = useState(true);

  const handleSongPlay = (index) => {
    if (currentSongIndex === index) {
      setCurrentSongIndex(null);
      setIsPlayerVisible(false);
    } else {
      setCurrentSongIndex(index);
      setIsPlayerVisible(true);
    }
  };

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
          <h3>{song.title}</h3>
          {isPlayerVisible && currentSongIndex === index && (
            <ReactAudioPlayer
              src={song.audioUrl}
              autoPlay={currentSongIndex === index}
              controls
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Library;