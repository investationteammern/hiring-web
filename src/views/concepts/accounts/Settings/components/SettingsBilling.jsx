import { useState } from 'react'
import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import Avatar from '@/components/ui/Avatar'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import CreditCardDialog from '@/components/view/CreditCardDialog'
import BillingHistory from './BillingHistory'
import classNames from '@/utils/classNames'
import isLastChild from '@/utils/isLastChild'
import sleep from '@/utils/sleep'
import { TbPlus } from 'react-icons/tb'
import useSWR from 'swr'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router'
import { PiLightningFill } from 'react-icons/pi'
import { NumericFormat } from 'react-number-format'

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

const SettingsBilling = () => {
    const navigate = useNavigate()

    const [selectedCard, setSelectedCard] = useState({
        type: '',
        dialogOpen: false,
        cardInfo: {},
    })



    const handleEditCreditCard = (card) => {
        setSelectedCard({
            type: 'EDIT',
            dialogOpen: true,
            cardInfo: card,
        })
    }

    const handleCreditCardDialogClose = () => {
        setSelectedCard({
            type: '',
            dialogOpen: false,
            cardInfo: {},
        })
    }

    const handleEditCreditCardSubmit = async () => {
        await sleep(500)
        handleCreditCardDialogClose()
        toast.push(
            <Notification type="success">Credit card updated!</Notification>,
            { placement: 'top-center' },
        )
    }

    const handleAddCreditCardSubmit = async (values) => {
        console.log('Submitted values', values)
        await sleep(500)
        handleCreditCardDialogClose()
        toast.push(
            <Notification type="success">Credit card added!</Notification>,
            { placement: 'top-center' },
        )
    }

    const handleChangePlan = () => {
        navigate('/concepts/account/pricing?subcription=basic&cycle=monthly')
    }

    return (
        <div>
            <h4 className="mb-4">Billing</h4>

        </div>
    )
}

export default SettingsBilling
