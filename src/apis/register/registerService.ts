import { AxiosRequestConfig, AxiosResponse } from "axios";
import baseService from "../base";

export interface RegisterPayload {
  email: string;
  role: string;
  password: string;
}

const register = (payload: RegisterPayload, config?: AxiosRequestConfig): Promise<AxiosResponse<boolean>> => {
  return baseService.post("auth/register", payload, config);
};

export { register };
