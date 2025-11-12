import { useEffect, useState, useRef } from 'react'
import Breadcrumb from '../components/ui/Breadcrumb'

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
        <div ref={ref} className={`${className} overflow-hidden relative`}>
            {!loaded && !errored && (
                <div className={`w-full h-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse`} />
            )}

            {inView && !errored && (
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    onLoad={() => setLoaded(true)}
                    onError={(e) => { setErrored(true); e.currentTarget.src = 'https://placehold.co/300x200?text=Image' }}
                    className={`${loaded ? 'block' : 'hidden'} w-full h-full object-cover rounded`}
                />
            )}

            {errored && (
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-sm text-gray-600 rounded">Image unavailable</div>
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
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 auto-rows-auto">
                            {execomYear.images && execomYear.images.map((image, index) => (
                                <ImageWithSkeleton
                                    key={index}
                                    src={image}
                                    alt={`Execom ${execomYear.year} Image ${index + 1}`}
                                    className="w-full h-full max-h-100"
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