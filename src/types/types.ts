export type Job = {
  resume: string | null;
  id: number;
  user_id: number;
  stage_id: number;
  company_name: string;
  job_post_url: string;
  title: string;
  date_submitted: Date;
  contact: string | null;
};

export type Stage = {
  id: number;
  name: string;
  user_id: number;
  position: number;
};
