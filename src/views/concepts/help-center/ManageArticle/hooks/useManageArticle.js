import { useManageArticleStore } from '../store/manageArticleStore'
import useSWR from 'swr'

const useManageArticle = () => {
    const tableData = useManageArticleStore((state) => state.tableData)
    const filterData = useManageArticleStore((state) => state.filterData)


    return {
        // 
    }
}

export default useManageArticle
