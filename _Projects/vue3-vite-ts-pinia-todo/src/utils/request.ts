import axios from "axios";

const request = axios.create({ 
    baseURL: "http://localhost:8964/todos",
    timeout: 10000,
});

export default request;