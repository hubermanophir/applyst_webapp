import axios from "axios";

export const login = async (
  username: string,
  password: string
): Promise<string> => {
  const response = await axios.post(
    `/api/v1/auth/login`,
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
  await axios.post(`/api/v1/auth/register`, { username, password });
};

export const refreshAccessToken = async (): Promise<string> => {
  const response = await axios.post(
    `/api/v1/auth/refresh`,
    {},
    { withCredentials: true }
  );

  return response.data.accessToken;
};
