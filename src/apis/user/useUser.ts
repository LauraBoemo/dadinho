import { useState } from "react";
import { AddUserPayload, addUser } from "./userService";

const useUser = () => {
  const [registerData, setRegisterData] = useState<boolean | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const api = async (registerData: AddUserPayload) => {
    try {
      const { name, email, password, role } = registerData;
      setLoading(true);
      setRegisterData(null);
      setError(null);
      const res = (await addUser({
        name,
        role,
        email,
        password,
      })) as unknown as boolean;
      setRegisterData(res !== null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [api, registerData, loading, error];
};

export { useUser };
