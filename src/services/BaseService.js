import axios from "axios";

const BaseService = axios.create({
  baseURL: 'http://192.168.1.6:8000/api',
  timeout: 1000,
  headers: {
    Accept: "application/json",
    'Accept-Language': 'es',
    'Content-Type': 'application/json',
    'X-Costum-Header': 'foobar',
    // Authorization: `Bearer $(token)`
  },
});

export {
    BaseService,
}