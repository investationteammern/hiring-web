import EditArticleHeader from './components/EditArticleHeader'
import EditArticleBody from './components/EditArticleBody'
import EditArticleFooter from './components/EditArticleFooter'
import { useParams } from 'react-router'
import useSWR from 'swr'

const EditArticle = () => {
    const { id } = useParams()



    return (
        <>
            <div className="max-w-[1200px] mx-auto w-full">
                {/*  */}
            </div>
            <EditArticleFooter />
        </>
    )
}

export default EditArticle
