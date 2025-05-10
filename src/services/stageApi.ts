import axios from "axios";
import type { Job, Stage } from "../types/types";

const BASE_URL = "/api/v1/stages";

export const getStages = async (
  accessToken: string
): Promise<(Stage & { jobs: Job[] })[]> => {
  const response = await axios.get(`${BASE_URL}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return response.data.stages;
};

export const createStage = async (
  accessToken: string,
  { name, position }: { name: string; position: number }
): Promise<Stage> => {
  const response = await axios.post(
    `${BASE_URL}`,
    {
      name,
      position,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.stage;
};
