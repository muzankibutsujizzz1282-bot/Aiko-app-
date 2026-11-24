"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [musicOn, setMusicOn] = useState(false);
  const [coins, setCoins] = useState(0);
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

  const addCoins = () => {
    setCoins(coins + 10);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #0f0c29, #302b63, #24243e)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      fontFamily: "sans-serif",
      textAlign: "center"
    }}>
      {/* Header */}
      <h1 style={{ color: "#f472b6", fontSize: "28px", margin: "10px 0" }}>
        Aiko Virtual Human
      </h1>

      {/* Coins */}
      <div style={{
        backgroundColor: "#1e1b4b",
        padding: "8px 20px",
        borderRadius: "20px",
        marginBottom: "20px",
        fontSize: "18px"
      }}>
        🪙 Coins: <span style={{ color: "#fbbf24" }}>{coins}</span>
      </div>

      {/* Character Area */}
      <div style={{
        width: "220px",
        height: "280px",
        backgroundColor: "#1e1b4b",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "25px",
        border: "2px solid #4c1d95"
      }}>
        <div style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: "#f9a8d4",
          marginBottom: "15px"
        }}></div>
        <p style={{ color: "#e2e8f0", fontSize: "16px" }}>Aiko</p>
        <p style={{ color: "#94a3b8", fontSize: "13px" }}>Japanese Girl</p>
      </div>

      {/* Buttons */}
      <button
        onClick={toggleMusic}
        style={{
          backgroundColor: musicOn ? "#f472b6" : "#4c1d95",
          color: "white",
          border: "none",
          padding: "12px 24px",
          borderRadius: "50px",
          fontSize: "15px",
          marginBottom: "12px",
          width: "200px"
        }}
      >
        {musicOn ? "⏸ Stop Music" : "▶ Play Music"}
      </button>

      <button
        onClick={addCoins}
        style={{
          backgroundColor: "#7c3aed",
          color: "white",
          border: "none",
          padding: "12px 24px",
          borderRadius: "50px",
          fontSize: "15px",
          width: "200px"
        }}
      >
        + Touch Aiko (Earn Coins)
      </button>

      <p style={{ color: "#64748b", fontSize: "13px", marginTop: "30px" }}>
        More features coming soon...
      </p>
    </div>
  );
}
