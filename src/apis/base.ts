import axios from "axios";
import { responseSuccessCallback, responseFailCallback, requestSuccessCallback, requestFailCallback } from "./utilService";

const baseService = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "https://dadinho-api.onrender.com",
});

baseService.defaults.headers.common["Content-Type"] = "application/json";
baseService.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
baseService.defaults.headers.common["Access-Control-Allow-Headers"] = "Content-Type";

baseService.interceptors.request.use(requestSuccessCallback, requestFailCallback);

baseService.interceptors.response.use(responseSuccessCallback, responseFailCallback);

export default baseService;
  