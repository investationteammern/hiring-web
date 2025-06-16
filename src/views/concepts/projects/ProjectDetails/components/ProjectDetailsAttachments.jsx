import useSWR from 'swr'
import Table from '@/components/ui/Table'
import Avatar from '@/components/ui/Avatar'
import Loading from '@/components/shared/Loading'
import fileSizeUnit from '@/utils/fileSizeUnit'
import FileIcon from '@/components/view/FileIcon'
import dayjs from 'dayjs'

const { TBody, THead, Th, Tr, Td } = Table

const FileSegment = ({ fileType, size, name }) => {
    return (
        <div
            className="bg-white rounded-2xl dark:bg-gray-800 border border-gray-200 dark:border-transparent p-2.5 lg:p-3.5 flex items-center gap-2 transition-all hover:shadow-[0_0_1rem_0.25rem_rgba(0,0,0,0.04),0px_2rem_1.5rem_-1rem_rgba(0,0,0,0.12)] cursor-pointer"
            role="button"
        >
            <div className="text-3xl">
                <FileIcon type={fileType} size={35} />
            </div>
            <div>
                <div className="font-bold heading-text">{name}</div>
                <span className="text-xs">{fileSizeUnit(size)}</span>
            </div>
        </div>
    )
}

const ProjectDetailsAttachments = () => {


    return (
        <Loading>
            <div>
                <h4>Recently added</h4>
                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-4 gap-4 lg:gap-6">

                </div>
            </div>
            <div className="mt-10">
                <h4>Others files</h4>
                <Table className="mt-6">
                    <THead>
                        <Tr>
                            <Th>File</Th>
                            <Th>Size</Th>
                            <Th>Upload date</Th>
                            <Th>Last modified</Th>
                            <Th>Uploaded by</Th>
                        </Tr>
                    </THead>
                    <TBody>

                    </TBody>
                </Table>
            </div>
        </Loading>
    )
}

export default ProjectDetailsAttachments
