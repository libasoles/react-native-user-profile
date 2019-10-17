import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

type ApiConfig = AxiosRequestConfig;
type ApiInstance = AxiosInstance;

function createClient({ baseURL }) {
  return axios.create({
    baseURL,
    headers: {
      "Cache-Control": "no-cache",
      Accept: "application/json"
    }
  });
}

function configureAPIClient(client: ApiInstance) {
  const setAPIToken = (token: string): void => {
    client.interceptors.request.use(function(config: ApiConfig): ApiConfig {
      config.headers.Authorization = token ? `Bearer ${token}` : "";
      return config;
    });
  };
  return setAPIToken;
}

export { createClient, configureAPIClient };
