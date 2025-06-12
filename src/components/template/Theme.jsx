import ConfigProvider from '@/components/ui/ConfigProvider'
import { themeConfig } from '@/configs/theme.config'
import useDarkMode from '@/utils/hooks/useDarkMode'
import useThemeSchema from '@/utils/hooks/useThemeSchema'
import useDirection from '@/utils/hooks/useDirection'

const Theme = (props) => {
    useThemeSchema()
    useDarkMode()
    useDirection()


    return (
        <ConfigProvider
            value={{
                ...themeConfig,
            }}
        >
            {props.children}
        </ConfigProvider>
    )
}

export default Theme
