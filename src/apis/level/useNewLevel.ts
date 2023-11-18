import { useState } from "react";
import { NewLevelPayload, newLevel } from "./levelService";

const useNewLevel = () => {
  const [levelData, setLevelData] = useState<boolean | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const api = async (levelPayload: NewLevelPayload) => {
    try { 
      const { icon, title, answers } = levelPayload;  
      setLoading(true);
      setLevelData(null);
      setError(null);
      const res = (await newLevel({
        icon, 
        title,
        answers,
      })) as unknown as boolean;
      setLevelData(res !== null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [api, levelData, loading, error];
};

export { useNewLevel };
