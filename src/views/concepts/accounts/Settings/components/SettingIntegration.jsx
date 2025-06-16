import { useState } from 'react'
import Avatar from '@/components/ui/Avatar'
import Button from '@/components/ui/Button'
import Switcher from '@/components/ui/Switcher'
import Dialog from '@/components/ui/Dialog'
import classNames from '@/utils/classNames'
import isLastChild from '@/utils/isLastChild'
import useSWR from 'swr'
import {
    TbCircleCheckFilled,
    TbRosetteDiscountCheckFilled,
} from 'react-icons/tb'

const SettingIntegration = () => {
    const [selectedIntegration, setSelectedIntegration] = useState({
        integration: {},
        dialogOpen: false,
    })



    const handleToggle = (bool, id) => {

    }

    const handleDialogClose = () => {
        setSelectedIntegration({
            integration: {},
            dialogOpen: false,
        })
    }

    return (
        <div>
            <h4>Integration</h4>

        </div>
    )
}

export default SettingIntegration
