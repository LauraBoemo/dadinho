import { AxiosRequestConfig, AxiosResponse } from "axios";
import baseService from "../base";

export interface AddUserPayload {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface GetUsersResponse {
  name: string;
  email: string;
  password: string;
  role: string;
}

const addUser = (payload: AddUserPayload, config?: AxiosRequestConfig): Promise<AxiosResponse<boolean>> => {
  return baseService.post("auth/register", payload, config);
};


const getUsers = (config?: AxiosRequestConfig): Promise<AxiosResponse<GetUsersResponse[]>> => {
  return baseService.get("user", config);
};

export { addUser, getUsers };
