import { useState } from "react";
import { AllLevelsResponse, allLevels } from "./levelsService";

const useAllLevels = () => {
  const [allLevelsData, setAllLevels] = useState<AllLevelsResponse[] | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const api = async () => {
    try {
      setLoading(true);
      setAllLevels(null);
      setError(null);
      const res = (await allLevels()) as unknown as AllLevelsResponse[];
      setAllLevels(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [api, allLevelsData, loading, error];
};

export { useAllLevels };
