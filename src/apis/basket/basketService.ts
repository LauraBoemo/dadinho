import { AxiosRequestConfig, AxiosResponse } from "axios";
import baseService from "@apis/base";

export interface BasketPayload {
	itemsIds: number[],
	levelId: number
}


const postBasket = (payload: BasketPayload, config?: AxiosRequestConfig): Promise<AxiosResponse<boolean>> => {
  return baseService.post("basket", payload, config);
};

export { postBasket };
