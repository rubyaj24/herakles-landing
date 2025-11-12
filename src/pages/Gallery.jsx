import { useEffect, useState } from 'react'

// load all gallery images as URLs (eager so we get strings)
const galleryModules = import.meta.glob('../assets/gallery/**/**/*.{webp,jpg,png,jpeg}', { eager: true, as: 'url' })

function getImages(folderFragment) {
  // folderFragment examples: '24-25/ebaja' or '22-23'
  return Object.entries(galleryModules)
    .filter(([p]) => p.includes(`/gallery/${folderFragment}/`))
    .map(([, url]) => url)
    .sort()
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
        <nav className="mb-4 text-sm text-gray-500">
        <a href="/" className="hover:underline">Home</a> / <span>Gallery</span>
      </nav>
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
                                <img 
                                    key={index} 
                                    src={image} 
                                    alt={`Execom ${execomYear.year} Image ${index + 1}`} 
                                    className="w-full h-full max-h-100 object-cover rounded"
                                    onError={(e) => {e.target.src = "https://placehold.co/150?text=Execom"}}
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