import Article from './Article'
import { useHelpCenterStore } from '../store/helpCenterStore'
import { categoryIcon } from '../utils'
import isLastChild from '@/utils/isLastChild'
import useSWR from 'swr'

const Categories = () => {


    const setSelectedTopic = useHelpCenterStore(
        (state) => state.setSelectedTopic,
    )
    const setQueryText = useHelpCenterStore((state) => state.setQueryText)

    const handleTopicClick = (topic) => {
        setSelectedTopic(topic)
        setQueryText('')
    }

    return (
        <div className="flex flex-col gap-16">

        </div>
    )
}

export default Categories
