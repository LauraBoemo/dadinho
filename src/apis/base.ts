import axios from "axios";
  
const baseService = axios.create({
    baseURL: "test",
});

baseService.defaults.headers.common["Content-Type"] = "application/json";

export default baseService;
  