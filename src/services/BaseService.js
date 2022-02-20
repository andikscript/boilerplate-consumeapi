import axios from "axios";
import {API_URL} from '@env';

const BaseService = axios.create({
  baseURL: API_URL,
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