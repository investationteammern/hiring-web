import { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Loading from '@/components/shared/Loading'
import sleep from '@/utils/sleep'
import dayjs from 'dayjs'
import isEmpty from 'lodash/isEmpty'
import {
    PiEyeDuotone,
    PiCloudCheckDuotone,
    PiCreditCardDuotone,
    PiTicketDuotone,
    PiPhoneOutgoingDuotone,
} from 'react-icons/pi'
import useSWR from 'swr'

const TimeLineMedia = (props) => {
    const { type } = props

    switch (type) {
        case 'PRODUCT-VIEW':
            return <PiEyeDuotone />
        case 'PRODUCT-UPDATE':
            return <PiCloudCheckDuotone />
        case 'PAYMENT':
            return <PiCreditCardDuotone />
        case 'SUPPORT-TICKET':
            return <PiTicketDuotone />
        case 'TICKET-IN-PROGRESS':
            return <PiPhoneOutgoingDuotone />
        default:
            return <></>
    }
}

const TimeLineContent = (props) => {
    const { type, description, name } = props

    switch (type) {
        case 'PRODUCT-VIEW':
            return (
                <div>
                    <h6 className="font-bold">View Plan</h6>
                    <p className="font-semibold">
                        {name} {description}
                    </p>
                </div>
            )
        case 'PRODUCT-UPDATE':
            return (
                <div>
                    <h6 className="font-bold">Change Plan</h6>
                    <p className="font-semibold">
                        {name} {description}
                    </p>
                </div>
            )
        case 'PAYMENT':
            return (
                <div>
                    <h6 className="font-bold">Payment</h6>
                    <p className="font-semibold">
                        {name} {description}
                    </p>
                </div>
            )
        case 'SUPPORT-TICKET':
            return (
                <div>
                    <h6 className="font-bold">Support Ticket</h6>
                    <p className="font-semibold">
                        {name} {description}
                    </p>
                </div>
            )
        case 'TICKET-IN-PROGRESS':
            return (
                <div>
                    <h6 className="font-bold">Support Ticket Update</h6>
                    <p className="font-semibold">{description}</p>
                </div>
            )
        default:
            return <></>
    }
}

const ActivitySection = ({ customerName, id }) => {


    const [fetchData, setfetchData] = useState(false)
    const [showNoMoreData, setShowNoMoreData] = useState(false)

    const handleLoadMore = async () => {
        setfetchData(true)
        await sleep(500)
        setShowNoMoreData(true)
        setfetchData(false)
    }

    return (
        <Loading >

        </Loading>
    )
}

export default ActivitySection
