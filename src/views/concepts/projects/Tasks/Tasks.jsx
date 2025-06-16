import useSWR from 'swr'
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import { useTasksStore } from './store/tasksStore'
import TasksHeader from './components/TasksHeader'
import TaskList from './components/TaskList'

const Tasks = () => {
    const {
        updateOrdered,
        updateGroups,
        updateBoardMembers,
        updateAllMembers,
    } = useTasksStore()


    return (
        <AdaptiveCard>
            <TasksHeader />
            <div className="my-8">
                <TaskList />
            </div>
        </AdaptiveCard>
    )
}

export default Tasks
