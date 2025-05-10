import axios from "axios";
import type { Job } from "../types/types";

const BASE_URL = "/api/v1/jobs";

export const getJobs = async (accessToken: string): Promise<Job[]> => {
  const response = await axios.get(`${BASE_URL}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return response.data.jobs;
};

export const createJob = async (
  accessToken: string,
  { resume, company_name, job_post_url, title, date_submitted, contact }: Job
): Promise<Job> => {
  const response = await axios.post(
    `${BASE_URL}`,
    {
      resume,
      company_name,
      job_post_url,
      title,
      date_submitted,
      contact,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.jobs;
};
export const updateJob = async (
  accessToken: string,
  {
    id,
    resume,
    company_name,
    job_post_url,
    title,
    date_submitted,
    contact,
  }: Partial<Job>
): Promise<Job> => {
  const response = await axios.put(
    `${BASE_URL}/${id}`,
    {
      resume,
      company_name,
      job_post_url,
      title,
      date_submitted,
      contact,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.job;
};
