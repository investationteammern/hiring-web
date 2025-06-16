import { useState } from 'react'
import Table from '@/components/ui/Table'
import Tag from '@/components/ui/Tag'
import Loading from '@/components/shared/Loading'
import UsersAvatarGroup from '@/components/shared/UsersAvatarGroup'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import { TbCircleCheck, TbCircleCheckFilled } from 'react-icons/tb'
import useSWR from 'swr'
import dayjs from 'dayjs'

const ordered = ['To Do', 'In Progress', 'To Review', 'Completed']

const taskLabelColors = {
    'Live issue': 'bg-rose-100 dark:bg-rose-100 dark:text-gray-900',
    Task: 'bg-blue-100 dark:bg-blue-100 dark:text-gray-900',
    Bug: 'bg-amber-100 dark:bg-amber-100 dark:text-gray-900',
    'Low priority': 'bg-purple-100 dark:bg-purple-100 dark:text-gray-900',
}

const { Td, Tr, TBody } = Table

const ProjectDetailsTask = () => {
    const [selectedTask, setSelectedTask] = useState(null)



    const handleCheckClick = (key, id) => {
        if (key !== 'Completed') {
            setSelectedTask({ key, id })
        }
    }

    const handleDialogConfirmClick = () => {

    }

    const handleDialogClose = () => {
        setSelectedTask(null)
    }

    return (

        <Loading >
        </Loading>
    )
}

export default ProjectDetailsTask
