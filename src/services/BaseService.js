import axios from "axios";
import Config from "react-native-config";

const BaseService = axios.create({
  baseURL: Config.API_URL,
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Accept-Language': 'es',
    'Content-Type': 'application/json',
    'X-Costum-Header': 'foobar',
    // Authorization: `Bearer $(token)`
  },
});

export {
    BaseService,
}