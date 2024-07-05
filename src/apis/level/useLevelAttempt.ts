import { useState } from "react";
import { LevelAttemptPayload, levelAttempt } from "./levelService";

const useLevelAttempt = () => {
  const [levelAttemptData, setLevelAttemptData] = useState<boolean | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const api = async ({ userId, levelId, userAnswers, totalTime }: LevelAttemptPayload) => {
    try {
      setLoading(true);
      setLevelAttemptData(null);
      setError(null);
      const res = (await levelAttempt({
        userId,
        levelId,
        totalTime,
        userAnswers
      })) as unknown as boolean;
      setLevelAttemptData(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [api, levelAttemptData, loading, error];
};

export { useLevelAttempt };
