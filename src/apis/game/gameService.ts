import { AxiosRequestConfig, AxiosResponse } from "axios";
import baseService from "../base";

export interface GameProgressResponse {
  id: number;
  icon: string;
  isConcluded: true;
}

interface GameSetupItem {
  id: number,
  icon: string,
  name: string
}

export interface GameSetupRecipe {
  id: number,
  item: GameSetupItem,
  quantity: number
}

export interface GameSetupBasket {
  id: number,
  name: string,
  items: GameSetupItem[],
}

export interface GameSetupResponse {
  id: number;
  icon: string;
  title: string;
  recipe: GameSetupRecipe[];
  baskets: GameSetupBasket[];
}

const gameProgress = (id: string, config?: AxiosRequestConfig): Promise<AxiosResponse<GameProgressResponse[]>> => {
  return baseService.get(`game/progress/${id}`, config);
};

const gameSetup = (id: string, config?: AxiosRequestConfig): Promise<AxiosResponse<GameSetupResponse>> => {
  return baseService.get(`game/setup/${id}`, config);
};

export { gameProgress, gameSetup };
