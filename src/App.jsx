import React, { useState } from "react";

function App() {
  const testUrl =
    "https://script.google.com/macros/s/AKfycbyCHa1Yn-iyQRZNwnmtbAytsCKbJvrwmMDS76AXUk1nwlXFs_DhJnuCEyLZV-o-n6-a1A/exec"; // Тестовый API

  const [status, setStatus] = useState(null);

  const handleButton = async () => {
    try {
      const response = await fetch(testUrl);
      const data = await response.json();
      setStatus(data[0].status);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddRow = async () => {
    try {
      const response = await fetch(testUrl, {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        // credentials: "omit",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        // referrerPolicy: "no-referrer",
        body: JSON.stringify({ name: "Olivia" }),
      });
      const data = await response.json();
      setStatus(data[0].status);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button type="button" onClick={handleButton}>
        FetchData
      </button>
      {status && <p>Result: {status}</p>}

      <button type="button" onClick={handleAddRow}>
        Add row
      </button>
    </div>
  );
}

export default App;
