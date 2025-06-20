import HorizontalMenuContent from './HorizontalMenuContent'
import { useRouteKeyStore } from '@/store/routeKeyStore'
import { useSessionUser } from '@/store/authStore'
import navigationConfig from '@/configs/navigation.config'

const HorizontalNav = () => {
    const currentRouteKey = useRouteKeyStore((state) => state.currentRouteKey)

    const userAuthority = useSessionUser((state) => state.user.authority)

    return (
        <HorizontalMenuContent
            navigationTree={navigationConfig}
            routeKey={currentRouteKey}
            userAuthority={userAuthority || []}
        />
    )
}

export default HorizontalNav
