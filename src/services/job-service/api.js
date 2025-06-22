import { BASE_URL } from "@/constants/api.constant"
import axios from "axios"


export const listCategoriesService = async (page, limit) => {
    const res = await axios.get(`${BASE_URL}/categories?page=${page}&limit=${limit}`);
    return res
}