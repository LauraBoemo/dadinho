import { useState } from "react";
import { LevelResponse, level } from "./levelService";

const useLevel = () => {
  const [levelData, setLevelData] = useState<LevelResponse | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const api = async () => {
    try {
      setLoading(true);
      setLevelData(null);
      setError(null);
      const res = (await level) as unknown as LevelResponse;
      setLevelData(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [api, levelData, loading, error];
};

export { useLevel };
