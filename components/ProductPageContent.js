import Image from 'next/image'
import ProductForm from './ProductForm'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import RecommendedList from './RecommendedList'

export default function ProductPageContent({ product }) {

  const images = []

  product.images.edges.map((image, i) => {
    images.push(
        <div className="relative group-hover:opacity-75 h-96 flex">
            <Image src={image.node.transformedSrc} alt={image.node.altText} layout="fill" objectFit="contain" />
        </div>
    )
  })

  SwiperCore.use([Navigation, Pagination])

  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
        <div className="w-full max-w-md border bg-white rounded-2xl overflow-hidden shadow-lg md:w-1/2">
              {images}
        </div>
        <ProductForm product={product} />
      </div>
      <div className="pt-16 space-y-8 md:space-x-4 lg:space-x-8 max-w-3xl w-11/12 mx-auto" dangerouslySetInnerHTML={{ __html:product.descriptionHtml}}/>
    </div>
  )
}
