export default function Home() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#0a0a0a", 
      color: "white", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ color: "#f472b6", fontSize: "28px", marginBottom: "10px" }}>
        Aiko Virtual Human
      </h1>
      <p style={{ color: "#a1a1aa", marginBottom: "30px" }}>
        Your AI companion app is starting...
      </p>
      <p style={{ color: "#71717a", fontSize: "14px" }}>
        We are still adding the full features.<br/>
        Please wait while more files are uploaded.
      </p>
    </div>
  );
}
