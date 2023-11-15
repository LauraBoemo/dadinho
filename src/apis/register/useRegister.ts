import { useState } from "react";
import { RegisterResponse, register } from "./registerService";

export interface RegisterType {
  email: string;
  role: string;
  password: string;
}

const useRegister = () => {
  const [registerData, setRegisterData] = useState<RegisterResponse | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const api = async (registerData: RegisterType) => {
    try {
      const { email, password, role } = registerData;
      setLoading(true);
      setRegisterData(null);
      setError(null);
      const res = (await register({
        role,
        email,
        password,
      })) as unknown as RegisterResponse;
      setRegisterData(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [api, registerData, loading, error];
};

export { useRegister };
