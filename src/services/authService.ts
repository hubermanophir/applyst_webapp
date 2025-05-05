import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const login = async (
  username: string,
  password: string
): Promise<string> => {
  const response = await axios.post(
    `${API_BASE_URL}/auth/login`,
    {
      username,
      password,
    },
    { withCredentials: true }
  );
  return response.data.accessToken;
};

export const register = async (
  username: string,
  password: string
): Promise<void> => {
  await axios.post(`${API_BASE_URL}/auth/register`, { username, password });
};

export const refreshAccessToken = async (): Promise<string> => {
  const response = await axios.post(
    `${API_BASE_URL}/auth/refresh`,
    {},
    { withCredentials: true }
  );

  return response.data.accessToken;
};
