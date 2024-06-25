import { useState } from "react";
import { getClasses } from "./classService";

const useGetClasses = () => {
  const [useGetClasses, setUseGetClasses] = useState<boolean | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const api = async () => {
    try {
      setLoading(true);
      setUseGetClasses(null);
      setError(null);
      const res = (await getClasses()) as unknown as boolean;
      setUseGetClasses(res !== null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [api, useGetClasses, loading, error];
};

export { useGetClasses };
