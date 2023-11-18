import { AxiosRequestConfig, AxiosResponse } from "axios";
import baseService from "../base";

export interface ItemPayload {
  icon: string;
  name: string;
}

export interface ItemResponse {
  id: string;
  icon: string;
  name: string;
}

const getItem = (): Promise<AxiosResponse<ItemResponse[]>> => {
  return baseService.get("item");
};

const postItem = (payload: ItemPayload, config?: AxiosRequestConfig): Promise<AxiosResponse<boolean>> => {
  return baseService.post("item", payload, config);
};

export { getItem, postItem };
