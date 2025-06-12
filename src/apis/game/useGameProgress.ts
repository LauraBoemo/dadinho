import { useState } from "react";
import { gameProgress, GameProgressResponse } from "./gameService";

const useGameProgress = () => {
  const [progressData, setProgress] = useState<GameProgressResponse | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const api = async ({ id }: { id: string}) => {
    try {
      setLoading(true);
      const res = (await gameProgress(id)) as unknown as GameProgressResponse;
      setProgress(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [api, progressData, loading, error];
};

export { useGameProgress };
