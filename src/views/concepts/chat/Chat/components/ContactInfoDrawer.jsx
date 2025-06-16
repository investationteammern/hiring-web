import { useEffect, useState } from 'react'
import Avatar from '@/components/ui/Avatar'
import CloseButton from '@/components/ui/CloseButton'
import Drawer from '@/components/ui/Drawer'
import ScrollBar from '@/components/ui/ScrollBar'
import Tabs from '@/components/ui/Tabs'
import ImageGallery from '@/components/shared/ImageGallery'
import FileIcon from '@/components/view/FileIcon'
import fileSizeUnit from '@/utils/fileSizeUnit'
import { useChatStore } from '../store/chatStore'
import useSWRMutation from 'swr/mutation'
import isEmpty from 'lodash/isEmpty'
import dayjs from 'dayjs'
import {
    TbMail,
    TbPhone,
    TbClock,
    TbArrowDown,
    TbChevronRight,
} from 'react-icons/tb'

const { TabNav, TabList, TabContent } = Tabs

const ContactInfoField = ({ title, value, icon }) => {
    return (
        <div className="flex items-center gap-4">
            <div className="text-2xl">{icon}</div>
            <div>
                <small className="font-semibold">{title}</small>
                <p className="heading-text font-semibold">{value}</p>
            </div>
        </div>
    )
}

const ContactInfoDrawer = () => {
    const contactInfoDrawer = useChatStore((state) => state.contactInfoDrawer)
    const setContactInfoDrawer = useChatStore(
        (state) => state.setContactInfoDrawer,
    )

    const [imageGalleryIndex, setImageGalleryIndex] = useState(-1)



    const handleDrawerClose = () => {
        setContactInfoDrawer({
            userId: '',
            chatId: '',
            chatType: '',
            open: false,
        })
    }

    const handleDownload = () => {
        const blob = new Blob(
            [
                'This text file is created to demonstrate how file downloading works in our template demo.',
            ],
            { type: 'text/plain;charset=utf-8' },
        )

        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = 'sample-dowoad-file'
        document.body.appendChild(link)

        link.click()

        document.body.removeChild(link)
        window.URL.revokeObjectURL(link.href)
    }

    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Drawer
            title={null}
            closable={false}
            isOpen={contactInfoDrawer.open}
            showBackdrop={false}
            width={400}
            onClose={handleDrawerClose}
            onRequestClose={handleDrawerClose}
        >
            <div className="flex justify-end">
                <CloseButton onClick={handleDrawerClose} />
            </div>

        </Drawer>
    )
}

export default ContactInfoDrawer
