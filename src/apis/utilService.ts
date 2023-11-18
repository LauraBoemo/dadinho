import { getStorage } from "./utilsStorage";

const requestSuccessCallback = function (config: any): object | null {
  // Do something before request is sent
  let customConfig = { ...config };
  const token = getStorage("token");
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
  // Do something with request error
  return Promise.reject(error);
};


const responseSuccessCallback = function (config: any) {
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

export { requestSuccessCallback, requestFailCallback, responseSuccessCallback, responseFailCallback };
