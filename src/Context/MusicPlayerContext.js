import React, { useState, createContext } from "react";
import Track1 from "../mp3/track-1.mp3";
import Track2 from "../mp3/track-2.mp3";
import Track3 from "../mp3/track-3.mp3";
import Track4 from "../mp3/track-4.mp3";
import Track5 from "../mp3/track-5.mp3";
import Track6 from "../mp3/track-6.mp3";

const MusicPlayerContext = createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Forest Lullaby",
      file: Track1,
    },
    {
      name: "Loneliness of the Winner",
      file: Track2,
    },
    {
      name: "Sedative",
      file: Track3,
    },
    {
      name: "Whip",
      file: Track4,
    },
    {
      name: "Order",
      file: Track5,
    },
    {
      name: "Showreel",
      file: Track6,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };