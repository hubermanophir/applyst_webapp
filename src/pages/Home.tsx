import React, { useEffect, useMemo, useState } from "react";
import { Column } from "../components/Column";
import type { Job, Stage } from "../types/types";
import { createStage, getStages } from "../services/stageApi";
import { useAuth } from "../hooks/Auth";
import { getJobs } from "../services/jobsApi";
import { groupBy } from "lodash";

export const Home = () => {
  const [stages, setStages] = useState<Stage[] | null>(null);
  const [jobs, setJobs] = useState<Job[] | null>(null);
  const jobsByStage: { [stage_id: string]: Job[] } = useMemo(() => {
    return groupBy(jobs, (job) => job.stage_id);
  }, [jobs]);

  const [accessToken] = useAuth();

  useEffect(() => {
    if (accessToken) {
      (async () => {
        const [stageData, jobData] = await Promise.all([
          getStages(accessToken),
          getJobs(accessToken),
        ]);
        console.log({ stageData });
        setStages(stageData);
        setJobs(jobData);
      })();
    }
  }, []);

  return (
    <div>
      <div>
        {stages &&
          stages.map((stage) => (
            <Column
              jobs={jobsByStage[stage.id]}
              stage={stage}
              key={`stage${stage.id}`}
            />
          ))}
      </div>
    </div>
  );
};
