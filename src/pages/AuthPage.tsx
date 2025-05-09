import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/Auth";
import { refreshAccessToken } from "../services/authApi";
import { useNavigate } from "react-router-dom";

export const AuthPage = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useAuth();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        if (!accessToken) {
          const newToken = await refreshAccessToken();
          setAccessToken(newToken);
        }
      } catch (error) {
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchToken();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{accessToken ? children : null}</>;
};
