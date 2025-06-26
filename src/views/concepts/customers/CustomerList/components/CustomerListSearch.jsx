import { Input } from '@/components/ui'
import { TbSearch } from 'react-icons/tb'
import useCategoryList from '../hooks/useCustomerList'
import { useSearchStore } from '@/store/searchStore'

const CustomerListSearch = () => {

    const searchTerm = useSearchStore(state => state.searchTerm);
    const setSearchTerm = useSearchStore(state => state.setSearchTerm);

    return (
        <Input

            placeholder="Quick search..."
            suffix={<TbSearch className="text-lg" />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    )
}

export default CustomerListSearch
