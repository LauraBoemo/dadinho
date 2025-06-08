import { AxiosRequestConfig, AxiosResponse } from "axios";
import baseService from "@apis/base";

export interface RecipePayload {
	itemId: number,
	quantity: number,
	levelId: number
}


const postRecipe = (payload: RecipePayload, config?: AxiosRequestConfig): Promise<AxiosResponse<boolean>> => {
  return baseService.post("item-recipe", payload, config);
};

export { postRecipe };
