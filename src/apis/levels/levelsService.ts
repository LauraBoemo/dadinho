import { AxiosRequestConfig, AxiosResponse } from "axios";
import baseService from "../base";

export interface LevelsPayload {
  id: string;
}

export interface LevelsResponse {
  id: string;
  icon: string;
  isConcluded: true;
}

const levels = (id: LevelsPayload, config?: AxiosRequestConfig): Promise<AxiosResponse<LevelsResponse[]>> => {
  return baseService.get(`level/user/${id}`, config);
};

export { levels };
