import { createClient, setClientToken } from "./api/apiFactory";
import config from "../config";

const api = createClient({ baseURL: config.api.baseURL });

const setAPIToken = setClientToken(api);

export { api, setAPIToken };
