import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  async function fetchBackendData() {
    try {
      const response = await fetch("http://localhost:3000/"); // Ensure backend is available
      const data = await response.json();

      setMessage(`Message from backend: ${data.message}`);
    } catch (error) {
      setMessage("Error: Could not connect to backend server");
      console.error("Error:", error);
    }
  }

  return (
    <div>
      <h1>Welcome to Task D</h1>
      <p>This is the frontend application</p>
      <button onClick={fetchBackendData}>Fetch Data from Backend</button>
      <div>{message && <p>{message}</p>}</div>
    </div>
  );
}

export default App;
