import { useEffect, useState } from 'react'
import Alert from '@/components/ui/Alert'
import Skeleton from '@/components/ui/Skeleton'
import GalleryImage from './GalleryImage'
import Masonry from '@/components/shared/Masonry'
import { useImageGeneratorStore } from '../store/imageGeneratorStore'
import useInfiniteScroll from '@/utils/hooks/useInfiniteScroll'

const Gallery = () => {
    // eslint-disable-next-line no-unused-vars
    const [_, setIsInitialLoading] = useState(false)
    const [initialLoadComplete, setInitialLoadComplete] = useState(false)
    const [loadable, setLoadable] = useState(true)
    const [index, seIndex] = useState(1)

    const {
        setImageDialog,
        isGeneratedImagesView,
        isGeneratingImage,
        generatedImage,
    } = useImageGeneratorStore()

    const [imageList, setImageList] = useState([])

    const getImages = async (index) => {
        // 
    }

    const { containerRef } = useInfiniteScroll({
        offset: '100px',
        async onLoadMore() {
            if (initialLoadComplete && loadable) {
                await getImages(index)
            }
        },
    })



    return (
        <>

        </>
    )
}

export default Gallery
