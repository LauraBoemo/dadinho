import axios from "axios";
  
const getToken = (): string | null => {
    try {
      return sessionStorage.getItem("token");
    } catch (exception) {
      console.error("Error: sessionStorage error. Unable to read token value!!!");
    }
    return null;
};

const requestSuccessCallback = function (config: any): object | null {
    let customConfig = { ...config };
    const token = getToken();
    if (token) {
      customConfig = {
        ...config,
        headers: {
          Authorization: `Bearer ${token}`,
          ...customConfig.headers,
        },
      };
    }
    return customConfig;
};

const requestFailCallback = function (error: any): object | null {
    return Promise.reject(error);
};

const responseSuccessCallbackV3 = function (config: any) {
    return config.data;
};

const responseFailCallback = function (error: any): object | null {
    // Do something with request error
    const { message = "Internal Server Error", payload, response_code } = error?.response?.data || {};
    return Promise.reject(
      new Error(message, {
        cause: {
          //@ts-ignore
          code: response_code || error?.response?.status,
          data: payload,
        },
      }),
    );
};

const baseService = axios.create({
    baseURL: "http://localhost:3030/",
});

baseService.defaults.headers.common["Content-Type"] = "application/json";

// @ts-ignore
baseService.interceptors.request.use(requestSuccessCallback, requestFailCallback);

baseService.interceptors.response.use(responseSuccessCallbackV3, responseFailCallback);

export default baseService;
  