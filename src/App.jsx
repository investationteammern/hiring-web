import { BrowserRouter } from 'react-router'
import Theme from '@/components/template/Theme'
import Layout from '@/components/layouts'
import Views from '@/views'


function App() {
    return (
        <Theme>
            <BrowserRouter>
                <Layout>
                    <Views />
                </Layout>
            </BrowserRouter>
        </Theme>
    )
}

export default App
