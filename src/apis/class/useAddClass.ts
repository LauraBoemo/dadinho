import { useState } from "react";
import { AddClassPayload, addClass } from "./classService";

const useAddClass = () => {
  const [addUseClass, setUseAddClass] = useState<boolean | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const api = async (addUseClass: AddClassPayload) => {
    try {
      const { name, grade, teacherId, studentsIds } = addUseClass;
      setLoading(true);
      setUseAddClass(null);
      setError(null);
      const res = (await addClass({
        name,
        grade,
        teacherId,
        studentsIds,
      })) as unknown as boolean;
      setUseAddClass(res !== null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [api, addUseClass, loading, error];
};

export { useAddClass };
