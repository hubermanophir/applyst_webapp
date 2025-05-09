import React, { useState } from "react";
import { register } from "../services/authApi";
import { useAuth } from "../hooks/Auth";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

export const Register = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [, setAccessToken] = useAuth();
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const accessToken = await register(username, password);
      setAccessToken(accessToken);
      navigate("/");
    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        setError(
          err.response.data.message || "An error occurred during registration."
        );
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <a onClick={() => navigate("/login")}>Go to login</a>
    </div>
  );
};
