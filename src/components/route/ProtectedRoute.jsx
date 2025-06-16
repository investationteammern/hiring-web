import { REDIRECT_URL_KEY } from '@/constants/app.constant'
import { Navigate, Outlet } from 'react-router'


const ProtectedRoute = () => {

    const pathName = location.pathname

    const getPathName =
        pathName === '/' ? '' : `?${REDIRECT_URL_KEY}=${pathName}`





    return <Outlet />
}

export default ProtectedRoute
