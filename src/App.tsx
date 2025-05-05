import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { refreshAccessToken } from "./services/authService";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    refreshAccessToken()
      .then((token) => {
        setAccessToken(token);
        // Redirect to the original path or default to "/home"
        const intendedPath = location.state?.from?.pathname || "/home";
        navigate(intendedPath);
      })
      .catch(() => {
        setAccessToken(null);
        navigate("/login"); // Redirect to login if refresh fails
      });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route
        path="/login"
        element={<Login setAccessToken={setAccessToken} />}
      />
      <Route path="/register" element={<Register />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute accessToken={accessToken}>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
