import { listCategoriesService } from "@/services/job-service/api";
import { useEffect, useState } from "react"

export default function useCategoryList() {

    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(3);
    const [totalPages, setTotalPages] = useState(1)
    console.log(page)
    const listCategories = async () => {
        setLoading(true)
        try {
            const res = await listCategoriesService(page, limit);
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
        listCategories()
    }, [page, limit])
    return {
        loading,
        categories,
        error,
        totalPages,
        limit,
        page,
        onPageChange,
        onLimitChange
    }
}
