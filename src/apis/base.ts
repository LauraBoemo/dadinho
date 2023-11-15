import axios from "axios";
  
const baseService = axios.create({
    baseURL: process.env.baseAPIPath,
});

baseService.defaults.headers.common["Content-Type"] = "application/json";

export default baseService;
  