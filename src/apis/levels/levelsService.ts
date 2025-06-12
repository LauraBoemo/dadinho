import { AxiosRequestConfig, AxiosResponse } from "axios";
import baseService from "../base";

export interface LevelsPayload {
  id: string;
}

export interface LevelsResponse {
  id: number;
  icon: string;
  isConcluded: true;
}

export interface AllLevelsResponse {
  id: number;
  icon: string;
}

// const levels = (id: string, config?: AxiosRequestConfig): Promise<AxiosResponse<LevelsResponse[]>> => {
//   return baseService.get(`level/user/${id}`, config);
// };

const allLevels = (): Promise<AxiosResponse<AllLevelsResponse[]>> => {
  return baseService.get(`level`);
};

export { allLevels };
