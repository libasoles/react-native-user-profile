import { createClient, configureAPIClient } from "./api/apiFactory";
import config from "../config";

const api = createClient({ baseURL: config.api.baseURL });

const setAPIToken = configureAPIClient(api);

export { api, setAPIToken };
