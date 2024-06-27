import { useState } from "react";
import { GetClassesResponse, getClasses } from "./classService";

const useGetClasses = () => {
  const [useGetClasses, setUseGetClasses] = useState<GetClassesResponse | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const api = async () => {
    try {
      setLoading(true);
      setUseGetClasses(null);
      setError(null);
      const res = (await getClasses()) as unknown as GetClassesResponse;
      setUseGetClasses(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [api, useGetClasses, loading, error];
};

export { useGetClasses };
