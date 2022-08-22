import Link from 'next/link'

export default function Hero() {
    return (
        <div className="my-48 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-72 text-center">
            <h1 className='text-6xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                <span className='xl:text-8xl lg:text-8xl sm:text-5xl md:text-6xl block xl:inline text-blue-500'>TR Cleaning</span>{' '}
                <span className='xl:text-8xl lg:text-8xl sm:text-5xl md:text-6xl block text-orange-400 xl:inline'>Solutions</span>
            </h1>
            <h2 className="mt-3 max-w-6xl mx-auto text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
                Vår vision är att dina städbehov ska uppfyllas med dem senaste och mest miljövänliga
                produkterna.
                Din framgång är vår tillfredsställelse ditt stöd är vår framgång. </h2>
            <div className="mt-5 max-w-md mx-auto flex justify-center items-center md:mt-8">
                <a href="/produkter/alla"
                   className="inline-flex items-center justify-center w-48 text-xl h-12 px-6 mr-6 font-medium py-3 border-transparent rounded-md text-white bg-gray-900 hover:bg-gray-800">
                    Handla
                </a>
            </div>
        </div>
    )
}
