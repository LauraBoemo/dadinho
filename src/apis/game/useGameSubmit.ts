import { useState } from "react";
import { gameSubmit, GameSubmitPayload } from "./gameService";

const useGameSubmit = () => {
  const [gameSubmitPayload, gameSubmitPayloadData] = useState<boolean | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const api = async ({ userId, levelId, userAnswers, totalTime }: GameSubmitPayload) => {
    try {
      setLoading(true);
      gameSubmitPayloadData(null);
      setError(null);
      const res = (await gameSubmit({
        userId,
        levelId,
        totalTime,
        userAnswers
      })) as unknown as boolean;
      gameSubmitPayloadData(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [api, gameSubmitPayload, loading, error];
};

export { useGameSubmit };
