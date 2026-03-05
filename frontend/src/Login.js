import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

// Load saved username
useEffect(() => {
const savedUser = localStorage.getItem("username");
if (savedUser) {
setUsername(savedUser);
}
}, []);

const handleLogin = async (e) => {
e.preventDefault();
setError("");

```
try {
  const response = await axios.post(
    "https://login-backend-4gay.onrender.com/login",
    {
      username: username,
      password: password,
    }
  );

  if (response.status === 200) {
    localStorage.setItem("username", username);
    window.location.href = "/welcome";
  }
} catch (err) {
  if (err.response) {
    setError(err.response.data.message);
  } else {
    setError("Server not responding");
  }
}
```

};

return (
<div
style={{
textAlign: "center",
marginTop: "120px",
fontFamily: "Arial",
}}
> <h2>Login Page</h2>

```
  <form onSubmit={handleLogin}>
    <input
      type="text"
      placeholder="Enter Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      required
      style={{ padding: "8px", width: "200px" }}
    />

    <br /><br />

    <input
      type="password"
      placeholder="Enter Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      style={{ padding: "8px", width: "200px" }}
    />

    <br /><br />

    <button
      type="submit"
      style={{
        padding: "10px 20px",
        cursor: "pointer",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
      }}
    >
      Login
    </button>
  </form>

  {error && (
    <p style={{ color: "red", marginTop: "20px" }}>{error}</p>
  )}
</div>
```

);
};

export default Login;
