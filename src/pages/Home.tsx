import React, { useEffect, useState } from "react";
import { Column } from "../components/Column";
import type { Job, Stage } from "../types/types";
import { getStages } from "../services/stageApi";
import { useAuth } from "../hooks/Auth";

export const Home = () => {
  const [stages, setStages] = useState<(Stage & { jobs: Job[] })[] | null>(
    null
  );
  const [accessToken] = useAuth();

  useEffect(() => {
    if (accessToken) {
      getStages(accessToken).then((data) => setStages(data));
    }
  }, []);

  return <div></div>;
};
