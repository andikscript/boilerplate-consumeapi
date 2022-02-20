import axios from "axios";

const BaseService = axios.create({
  baseURL: process.env.REACT_APP_REST_URL,
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