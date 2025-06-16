import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import { usePricingStore } from '../store/pricingStore'
import { featuresList } from '../constants'
import classNames from '@/utils/classNames'
import isLastChild from '@/utils/isLastChild'
import useQuery from '@/utils/hooks/useQuery'
import useSWR from 'swr'
import { NumericFormat } from 'react-number-format'
import { TbCheck } from 'react-icons/tb'

const Plans = () => {
    const { paymentCycle, setPaymentDialog, setSelectedPlan } =
        usePricingStore()

    const query = useQuery()
    const subcription = query.get('subcription')
    const cycle = query.get('cycle')



    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-4">

        </div>
    )
}

export default Plans
