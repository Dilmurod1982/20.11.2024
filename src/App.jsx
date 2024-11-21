import React, { useState } from "react";

function App() {
  const apiUrl =
    "https://script.google.com/macros/s/AKfycbwjzeVlOpXHnI2V0ctQr_-VAhpNDgZXxPcinv7yQ7OWptn0RKQlNMFKVtYy-sf7azw2Nw/exec";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setLoginStatus(data.message);
    } catch (error) {
      console.error("Error during login:", error);
      setLoginStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div style={{ margin: "50px" }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {loginStatus && <p>{loginStatus}</p>}
    </div>
  );
}

export default App;
