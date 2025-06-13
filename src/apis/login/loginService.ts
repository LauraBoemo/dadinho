import { AxiosRequestConfig, AxiosResponse } from "axios";
import baseService from "../../apis/base";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: string;
  email: string;
  token: string;
  role: "ADMIN" | "ROLE";
}

const login = (payload: LoginPayload, config?: AxiosRequestConfig): Promise<AxiosResponse<LoginResponse>> => {
  return baseService.post("auth/login", payload, config);
};

export { login };
