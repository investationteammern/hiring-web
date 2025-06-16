import Loading from '@/components/shared/Loading'
import OrderDetailProducts from './components/OrderDetailProducts'
import OrderDetailPayment from './components/OrderDetailPayment'
import OrderDetailCustomer from './components/OrderDetailCustomer'
import OrderDetailsActivities from './components/OrderDetailsActivities'
import OrderDetailNote from './components/OrderDetailNote'
import useSWR from 'swr'
import { useParams } from 'react-router'

const OrderDetails = () => {
    const { id } = useParams()


    return (
        <Loading >

        </Loading>
    )
}

export default OrderDetails
