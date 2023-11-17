import { AxiosRequestConfig, AxiosResponse } from "axios";
import baseService from "../base";

export interface LevelPayload {
  id: string;
}

export interface RecipeProps {
  id: string;
  item: {
    id: string;
    icon: string;
    name: string;
  }
  quantity: number;
}

export interface BasquetItemProps {
  id: number;
  icon: string;
  name: string;
}

export interface BasquetProps {
  id: number;
  items: BasquetItemProps[];
}

export interface LevelResponse {
  id: string;
  icon: string;
  title: string;
  answer: string;
  recipe: RecipeProps[];
  baskets: BasquetProps[];
  options: string[];
}

const level = (id: LevelPayload, config?: AxiosRequestConfig): Promise<AxiosResponse<LevelResponse>> => {
  return baseService.get(`level/${id}`, config);
};

export { level };
