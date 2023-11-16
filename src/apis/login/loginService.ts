import { AxiosRequestConfig, AxiosResponse } from "axios";
import baseService from "../base";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

const login = (payload: LoginPayload, config?: AxiosRequestConfig): Promise<AxiosResponse<LoginResponse>> => {
  return baseService.post("auth/login", payload, config);
};

export { login };
