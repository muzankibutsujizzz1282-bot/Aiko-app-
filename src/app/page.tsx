"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (musicOn) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setMusicOn(!musicOn);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #0f0c29, #302b63, #24243e)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ color: "#f472b6", fontSize: "32px", marginBottom: "8px" }}>
        Aiko Virtual Human
      </h1>
      <p style={{ color: "#e2e8f0", marginBottom: "30px", fontSize: "16px" }}>
        Your AI companion
      </p>

      <button
        onClick={toggleMusic}
        style={{
          backgroundColor: musicOn ? "#f472b6" : "#4c1d95",
          color: "white",
          border: "none",
          padding: "14px 28px",
          borderRadius: "50px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: "40px"
        }}
      >
        {musicOn ? "⏸ Stop Music" : "▶ Play Music"}
      </button>

      <p style={{ color: "#94a3b8", fontSize: "14px", maxWidth: "300px" }}>
        More features coming soon...<br/>
        3D character • Coins • Commands
      </p>
    </div>
  );
}
