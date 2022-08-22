import Link from "next/link";
import {formatPrice, storefront} from "../../utils";
import Image from "next/image";

export default function Stad({products}) {
    return (
        <>
            <main>
                <div className="max-w-2xl mx-auto py-24 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h1 className='font-bold text-4xl md:mb-10'>Städ</h1>

                    <h2 id="products-heading" className="sr-only">
                        Städ
                    </h2>
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                        {products.edges.map((item) => {

                            const product = item.node
                            const image = product.images.edges[0].node
                            return (<>
                                    {product.tags.includes('Städ') &&
                                        <Link key={product.handle} href={`/produkter/${product.handle}`}>
                                            <a className="group">
                                                <div className="w-full bg-white rounded-3xl overflow-hidden">
                                                    <div className="relative group-hover:opacity-75 h-80">
                                                        <Image className='hover:opacity-75'
                                                               src={image.transformedSrc}
                                                               alt={image.altText}
                                                               layout="fill"
                                                               objectFit="contain"
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                                    <h3>{product.title}</h3>
                                                    <p>{formatPrice(product.priceRange.minVariantPrice.amount)}</p>
                                                </div>

                                                <p className="mt-1 text-sm italic text-gray-500">{product.tags.join(", ")}</p>
                                            </a>
                                        </Link>}
                                </>
                            )
                        })}
                    </div>
                </div>
            </main>
        </>
    )
}
export async function getStaticProps() {
    const {data} = await storefront(productsQuery)
    return {
        props: {
            products: data.products
        }
    }
}

const productsQuery = `query Products{
  products(first:46){
    edges{
      node{
        title
        handle
        tags
        priceRange{
          minVariantPrice{amount}
        }
        images(first:1){
          edges{
            node{
              transformedSrc
              altText
            }
          }
        }
      }
    }
  }
}`;
