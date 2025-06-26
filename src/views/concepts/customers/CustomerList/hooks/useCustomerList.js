import { exportDataService, listCategoriesService } from "@/services/job-service/api";
import { useSearchStore } from "@/store/searchStore";
import axios from "axios";
import { useEffect, useState } from "react"

export default function useCategoryList() {

    const [categories, setCategories] = useState([]);
    const [exportData, setExportData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(3);
    const [totalPages, setTotalPages] = useState(1)
    const searchTerm = useSearchStore(state => state.searchTerm);

    console.log(categories)
    const listCategories = async () => {
        setLoading(true)
        try {
            const res = await listCategoriesService(page, limit, searchTerm);
            console.log(res.data)
            setCategories(res?.data?.response)
            setTotalPages(res.data?.totalPages)
            setPage(res.data?.currentPage)
            setLoading(false);
        } catch (error) {
            setError(error)
            setLoading(false);
        }
    }
    // export categorires
    const exportCategories = async () => {
        try {
            const res = await exportDataService();
            setExportData(res.data?.data);
        } catch (error) {
            setError(error.response?.data)
        }
    }
    const onPageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage)
        }
    }
    const onLimitChange = (newLimit) => {
        setLimit(newLimit);
        setPage(1);
    }
    useEffect(() => {
        exportCategories()
    }, [])
    useEffect(() => {
        listCategories()
    }, [page, limit, searchTerm])
    return {
        loading,
        categories,
        exportData,
        error,
        totalPages,
        limit,
        page,
        onPageChange,
        onLimitChange
    }
}
