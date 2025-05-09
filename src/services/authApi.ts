import axios from "axios";

const AUTH_PATH = "/api/v1/auth";

export const login = async (
  username: string,
  password: string
): Promise<string> => {
  const response = await axios.post(
    `${AUTH_PATH}/login`,
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
): Promise<string> => {
  const response = await axios.post(
    `${AUTH_PATH}/register`,
    {
      username,
      password,
    },
    { withCredentials: true }
  );

  return response.data.accessToken;
};

export const refreshAccessToken = async (): Promise<string> => {
  const response = await axios.post(
    `${AUTH_PATH}/refresh`,
    {},
    { withCredentials: true }
  );

  return response.data.accessToken;
};
