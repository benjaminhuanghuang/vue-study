import axios from "axios";
interface getListParams {
    page: number;
    pageSize: 10 | 30 | 50;
}

export function getList(params: getListParams) {
  return axios.get("/api/list", { params });
}
