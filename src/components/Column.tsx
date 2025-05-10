import React from "react";
import type { Job, Stage } from "../types/types";

type ColumnProps = {
  stage: Stage;
  jobs: Job[];
};

export const Column = ({ stage, jobs }: ColumnProps) => {
  return (
    <div>
      {stage.id} {jobs && jobs.length ? jobs[0].company_name : 0}
    </div>
  );
};
