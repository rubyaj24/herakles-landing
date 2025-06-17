import { useEffect, useState } from 'react'

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
            images : [
                'src/assets/gallery/24-25/ebaja/1.webp',
                'src/assets/gallery/24-25/ebaja/2.webp',
                'src/assets/gallery/24-25/ebaja/3.webp',
                'src/assets/gallery/24-25/ebaja/4.webp',
                'src/assets/gallery/24-25/hbaja/1.webp',
                'src/assets/gallery/24-25/hbaja/2.webp',
                'src/assets/gallery/24-25/hbaja/3.webp',
                'src/assets/gallery/24-25/hbaja/4.webp',
                'src/assets/gallery/24-25/hbaja/5.webp',
                'src/assets/gallery/24-25/hbaja/6.webp',
                'src/assets/gallery/24-25/hbaja/7.webp',
                'src/assets/gallery/24-25/hbaja/8.webp',
            ]
            
        },
        {
            year: '22-23',
            images: [
                'src/assets/gallery/22-23/1.webp',
                'src/assets/gallery/22-23/2.webp',
                'src/assets/gallery/22-23/3.webp',
                'src/assets/gallery/22-23/4.webp',
            ]
        },
        {
            year: '19-20',
            images: [
                'src/assets/gallery/19-20/1.webp',
                'src/assets/gallery/19-20/2.webp',
                'src/assets/gallery/19-20/3.webp',
                'src/assets/gallery/19-20/4.webp',
                'src/assets/gallery/19-20/5.webp',
                'src/assets/gallery/19-20/6.webp',
                'src/assets/gallery/19-20/7.webp',
                'src/assets/gallery/19-20/8.webp',
            ]
        },
        {
            year: '18-19',
            images: [
                'src/assets/gallery/18-19/1.webp',
                'src/assets/gallery/18-19/2.webp',
                'src/assets/gallery/18-19/3.webp',
                'src/assets/gallery/18-19/4.webp',
                'src/assets/gallery/18-19/5.webp'
            ]
        }
    ];

  return (
    <div className='py-12 px-4 mt-10'>
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