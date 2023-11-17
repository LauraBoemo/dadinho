import { useState } from "react";
import { LevelsResponse, levels } from "./levelsService";

const useLevels = () => {
  const [levelsData, setLevels] = useState<LevelsResponse | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const api = async () => {
    try {
      setLoading(true);
      setLevels(null);
      setError(null);
      const res = (await levels) as unknown as LevelsResponse;
      setLevels(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [api, levelsData, loading, error];
};

export { useLevels };
