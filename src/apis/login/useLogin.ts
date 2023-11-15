import { useState } from "react";
import { LoginResponse, login } from "./loginService";

export interface LoginData {
  email: string;
  password: string;
}

const useLogin = () => {
  const [loggedIn, setLoggedIn] = useState<LoginResponse | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const api = async (loginData: LoginData) => {
    try {
      const { email, password } = loginData;
      setLoading(true);
      setLoggedIn(null);
      setError(null);
      const res = (await login({
        email,
        password,
      })) as unknown as LoginResponse;
      setLoggedIn(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [api, loggedIn, loading, error];
};

export { useLogin };
