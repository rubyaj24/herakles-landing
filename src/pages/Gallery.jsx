import { useEffect, useState, useRef } from 'react'
import Breadcrumb from '../components/ui/Breadcrumb'

// Simple skeleton component for images
const ImageSkeleton = ({ className = '' }) => {
    return (
        <div className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded ${className}`}>
            <div className="w-full h-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
        </div>
    )
}

// load all gallery images as URLs (eager so we get strings)
// Updated glob options: 'as' is deprecated — use 'query' + 'import' instead
const galleryModules = import.meta.glob('../assets/gallery/**/**/*.{webp,jpg,png,jpeg}', { eager: true, query: '?url', import: 'default' })

function getImages(folderFragment) {
  // folderFragment examples: '24-25/ebaja' or '22-23'
  return Object.entries(galleryModules)
    .filter(([p]) => p.includes(`/gallery/${folderFragment}/`))
    .map(([, url]) => url)
    .sort()
}

// Lightweight image component: shows a skeleton until the image is in view and loaded.
const ImageWithSkeleton = ({ src, alt, className = '' }) => {
    const ref = useRef(null)
    const [inView, setInView] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [errored, setErrored] = useState(false)

    useEffect(() => {
        if (inView) return
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    obs.disconnect()
                }
            })
        }, { rootMargin: '200px' })
        obs.observe(el)
        return () => obs.disconnect()
    }, [inView])

    return (
        <div ref={ref} className={`${className} overflow-hidden relative aspect-square`}>
            {/* Skeleton loader */}
            {!loaded && !errored && (
                <ImageSkeleton className="w-full h-full absolute inset-0" />
            )}

            {/* Actual image */}
            {inView && !errored && (
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    onLoad={() => setLoaded(true)}
                    onError={(e) => { setErrored(true); e.currentTarget.src = 'https://placehold.co/300x200?text=Image' }}
                    className={`w-full h-full object-cover rounded absolute inset-0 transition-opacity duration-500 ${
                        loaded ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            )}

            {/* Error state */}
            {errored && (
                <div className="w-full h-full bg-gray-300 flex flex-col items-center justify-center text-sm text-gray-600 rounded absolute inset-0">
                    <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Image unavailable</span>
                </div>
            )}
        </div>
    )
}

const Gallery = () => {

    const [openYear, setOpenYear] = useState(null);
    const toggleDetails = (year) => {
        setOpenYear(openYear === year ? null : year);
    };

    useEffect(() => {
        document.title = "Gallery | Herakles CET";
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const execom = [
        {
            year: '24-25',
            images : getImages('24-25/ebaja').concat(getImages('24-25/hbaja'))
        },
        {
            year: '22-23',
            images: getImages('22-23')
        },
        {
            year: '19-20',
            images: getImages('19-20')
        },
        {
            year: '18-19',
            images: getImages('18-19')
        }
    ];

  return (
    <div className='py-24 px-4 mt-10'>
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]} />
        <h1 className='text-4xl font-bold text-center py-4'>Gallery</h1>
        <div className="w-full mx-auto mb-10">
            {execom.map((execomYear) => (
                <details 
                    key={execomYear.year} 
                    className="mb-4 bg-gray-900 rounded-lg"
                    open={openYear === execomYear.year}
                    onClick={(e) => {
                        e.preventDefault();
                        toggleDetails(execomYear.year);
                    }}
                >
                    <summary className="p-4 font-semibold cursor-pointer text-xl hover:bg-gray-800 text-white hover:text-red-500 rounded-lg transition-colors">
                        Execom {execomYear.year}
                    </summary>
                    <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {execomYear.images && execomYear.images.map((image, index) => (
                                <ImageWithSkeleton
                                    key={index}
                                    src={image}
                                    alt={`Execom ${execomYear.year} Image ${index + 1}`}
                                    className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                                />
                            ))}
                        </div>
                    </div>
                </details>
            ))}
        </div>
    </div>
  )
}

export default Gallery