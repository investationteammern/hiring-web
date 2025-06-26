import { BASE_URL } from "@/constants/api.constant"
import axios from "axios"


export const listCategoriesService = async (page, limit, searchTerm) => {
    const res = await axios.get(`${BASE_URL}/categories?page=${page}&limit=${limit}&search=${searchTerm || ''}`);
    return res
}

export const exportDataService = async () => {
    const res = await axios.get(`${BASE_URL}/categories/export`);
    return res;
}