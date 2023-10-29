import axios from "axios";

const AxiosAPI = axios.create({
  baseURL: 'https://www.cheapshark.com/api/',
  timeout: 600000,
});


export { AxiosAPI};
