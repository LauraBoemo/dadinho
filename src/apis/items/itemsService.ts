import { AxiosResponse } from "axios";
import baseService from "../base";

export interface ItemResponse {
  id: string;
  icon: string;
  name: string;
}

const getItem = (): Promise<AxiosResponse<ItemResponse[]>> => {
  return baseService.get("item");
};

export { getItem };
