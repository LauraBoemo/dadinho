import axios from "axios";

const baseService = axios.create({
    baseURL: "http://localhost:8080/",
});

baseService.defaults.headers.common["Content-Type"] = "application/json";

export default baseService;
  