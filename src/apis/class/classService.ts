import { AxiosRequestConfig, AxiosResponse } from "axios";
import baseService from "@apis/base";

export interface AddClassPayload {
	name: string,
	grade: number,
	teacherId: number,
	studentsIds: number[];
}

interface UserProps {
    id: string,
    name: string,
    email: string,
    role: string,
    concludedLevels: string[],
}

export interface GetClassesResponse {
	name: string,
	grade: number,
	teacher: UserProps,
	studentsIds: UserProps[];
}

const addClass = (payload: AddClassPayload, config?: AxiosRequestConfig): Promise<AxiosResponse<boolean>> => {
    return baseService.post("class", payload, config);
};

const getClasses = (): Promise<AxiosResponse<GetClassesResponse[]>> => {
  return baseService.get("class");
};

export { addClass, getClasses };
