import axios,{type AxiosRequestConfig, AxiosResponse} from "axios"

axios.defaults.baseURL = "http://localhost:3000";

axios.interceptors.request.use((config:AxiosRequestConfig|any) => config);

axios.interceptors.response.use((res:AxiosResponse|any) =>{
    return res;
}, (error:Error) => {
    return Promise.reject(error);
});



interface IHttp {
    request<T>(method:string, url:string, data?:unknown):Promise<T>
}

const http: IHttp = {
    request(method, url, data) {
     return axios({
        method,
        url,
        data
     })
    }
}

export default http