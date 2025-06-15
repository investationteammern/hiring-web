import { Suspense } from 'react'
import Loading from '@/components/shared/Loading'
import { useThemeStore } from '@/store/themeStore'
import PostLoginLayout from './PostLoginLayout'
import PreLoginLayout from './PreLoginLayout'

const Layout = ({ children }) => {
    const layoutType = useThemeStore((state) => state.layout.type)


    return (
        <Suspense
            fallback={
                <div className="flex flex-auto flex-col h-[100vh]">
                    <Loading loading={true} />
                </div>
            }
        >
            {/* {authenticated ? ( */}
            <PostLoginLayout layoutType={layoutType}>
                {children}
            </PostLoginLayout>
            {/* // ) : (
            //     <PreLoginLayout>{children}</PreLoginLayout>
            // )} */}
        </Suspense>
    )
}

export default Layout
