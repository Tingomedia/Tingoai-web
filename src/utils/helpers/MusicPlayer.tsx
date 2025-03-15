import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { musicList } from '../../db';

const MusicPlayer: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // Track if playback has started

  // Function to play the next track
  const playNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % musicList.length);
  };

  // Function to start playback when user interacts
  const startPlayback = () => {
    setIsPlaying(true); // Set playback to start
    removeEventListeners(); // Clean up listeners after interaction
  };

  // Remove event listeners once playback has started
  const removeEventListeners = () => {
    window.removeEventListener('mousemove', startPlayback);
    window.removeEventListener('scroll', startPlayback);
    window.removeEventListener('click', startPlayback);
  };

  // Set up interaction listeners on component mount
  useEffect(() => {
    window.addEventListener('mousemove', startPlayback);
    window.addEventListener('scroll', startPlayback);
    window.addEventListener('click', startPlayback);

    return () => {
      removeEventListeners(); // Clean up listeners on unmount
    };
  }, []);

  return (
    <div>
      <ReactPlayer
        url={musicList[currentTrackIndex]}
        playing={isPlaying} // Start playing based on interaction
        controls={false} // Hide default controls
        onEnded={playNextTrack} // Move to next track when current one ends
        width="400px" // Hide video area for audio-only playback
        height="0px"
        muted={false} // Ensure unmuted playback
        volume={1} // Set initial volume to full
      />
    </div>
  );
};

export default MusicPlayer;
