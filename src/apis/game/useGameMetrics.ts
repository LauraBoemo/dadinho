import { useState } from "react";
import { gameMetrics } from "./gameService";

const useGameMetrics = () => {
  const [setupData, setSetup] = useState<any | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const api = async () => {
    try {
      setLoading(true);
      const res = (await gameMetrics()) as any;
      setSetup(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [api, setupData, loading, error];
};

export { useGameMetrics };
