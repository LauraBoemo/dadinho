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

export interface GameSubmitPayload {
  userId: number,
	levelId: number,
  totalTime: number,
	userAnswers: string[]
}

const gameProgress = (id: string, config?: AxiosRequestConfig): Promise<AxiosResponse<GameProgressResponse[]>> => {
  return baseService.get(`game/progress/${id}`, config);
};

const gameSetup = (id: string, config?: AxiosRequestConfig): Promise<AxiosResponse<GameSetupResponse>> => {
  return baseService.get(`game/setup/${id}`, config);
};

const gameSubmit = (payload: GameSubmitPayload, config?: AxiosRequestConfig): Promise<AxiosResponse<GameSetupResponse>> => {
  return baseService.post(`game/submit`, payload, config);
};

export { gameProgress, gameSetup, gameSubmit };
