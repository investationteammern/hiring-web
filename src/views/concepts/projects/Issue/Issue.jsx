import Loading from '@/components/shared/Loading'
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import IssueHeader from './components/IssueHeader'
import IssueBody from './components/IssueBody'
import IssueFooter from './components/IssueFooter'
import IssueActivity from './components/IssueActivity'
import { useIssueStore } from './store/issueStore'
import useSWR from 'swr'
import { useParams } from 'react-router'

const Issue = () => {
    const { id } = useParams()

    const { issueData, updateIssueData, setMembers } = useIssueStore()





    return (
        <AdaptiveCard>
            <Loading >
                {issueData && (
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                        <div className="lg:col-span-2">
                            <div className="px-6">
                                <IssueHeader />
                                <div className="mt-8">
                                    <IssueBody />
                                </div>
                                <div className="mt-8">
                                    <IssueFooter />
                                </div>
                            </div>
                        </div>
                        <div>
                            <IssueActivity />
                        </div>
                    </div>
                )}
            </Loading>
        </AdaptiveCard>
    )
}

export default Issue
