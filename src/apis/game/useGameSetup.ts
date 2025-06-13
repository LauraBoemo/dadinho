import { useState } from "react";
import { gameSetup, GameSetupResponse } from "./gameService";

const useGameSetup = () => {
  const [setupData, setSetup] = useState<GameSetupResponse | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const api = async ({ id }: { id: string}) => {
    try {
      setLoading(true);
      const res = (await gameSetup(id)) as unknown as GameSetupResponse;
      setSetup(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [api, setupData, loading, error];
};

export { useGameSetup };
