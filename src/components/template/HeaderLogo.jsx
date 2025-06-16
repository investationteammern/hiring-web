import Logo from '@/components/template/Logo'
import { useThemeStore } from '@/store/themeStore'
import { Link } from 'react-router'

const HeaderLogo = ({ mode }) => {
    const defaultMode = useThemeStore((state) => state.mode)

    return (
        <Link to='/'>
            <Logo
                imgClass="max-h-10"
                mode={mode || defaultMode}
                className="hidden lg:block"
            />
        </Link>
    )
}

export default HeaderLogo
