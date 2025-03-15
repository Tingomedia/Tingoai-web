import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import Hls from "hls.js";

interface RadioContextProps {
  isPlaying: boolean;
  loading: boolean;
  handlePlayPause: () => void;
  isMuted: boolean;
  toggleMute: () => void;
  volume: number;
  handleVolumeChange: (volume: number) => void;
  error: string | null;
}

const RadioContext = createContext<RadioContextProps | undefined>(undefined);

const RADIO_STREAM_URL = import.meta.env.VITE_REACT_APP_RADIO_STREAM_URL;
                          

export const RadioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hlsRef = useRef<Hls | null>(null); // Store HLS instance

  useEffect(() => {
    audioRef.current = new Audio();
    const audio = audioRef.current;

    const setupHls = () => {
      if (!audio) return;

      if (Hls.isSupported()) {
        console.log("HLS.js is supported, using HLS.js");
        const hls = new Hls();
        hlsRef.current = hls; // Store HLS instance
        hls.loadSource(RADIO_STREAM_URL);
        hls.attachMedia(audio);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          console.log("HLS Loaded Successfully");
          setError(null);
          setLoading(false);
        });

        hls.on(Hls.Events.ERROR, (_, data) => {
          console.error("HLS Error:", data);
          setError("⚠️ Failed to load the radio stream. Please try again.");
          setLoading(false);
        });

      } else if (audio.canPlayType("application/vnd.apple.mpegurl")) {
        console.log("Using native HLS support");
        audio.src = RADIO_STREAM_URL;
      } else {
        setError("❌ Your browser does not support live streaming.");
      }
    };

    setupHls();

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
      if (audio) {
        audio.src = "";
      }
    };
  }, []);

  const handlePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
      } else {
        setLoading(true);
        await audio.play();
        setLoading(false);
      }
      setIsPlaying(!isPlaying);
      setError(null);
    } catch (err) {
      console.error("Playback Error:", err);
      setError("⚠️ Unable to start playback. Click anywhere to play.");
      setLoading(false);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (newVolume: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = newVolume;
    setVolume(newVolume);
    if (newVolume > 0) setIsMuted(false);
  };

  return (
    <RadioContext.Provider value={{ isPlaying, loading, handlePlayPause, isMuted, toggleMute, volume, handleVolumeChange, error }}>
      {children}
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
    </RadioContext.Provider>
  );
};

// Custom hook for accessing the context
export const useRadio = () => {
  const context = useContext(RadioContext);
  if (!context) {
    throw new Error("useRadio must be used within a RadioProvider");
  }
  return context;
};
