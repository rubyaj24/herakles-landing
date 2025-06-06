import { useState, useEffect } from 'react';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Slideshow = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    // Auto-advance slides
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    // Manual navigation
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleCTA = (ctaAction) => {
        if (ctaAction) {
            navigate(ctaAction);
        }
    };

    return (
        <div className="relative w-full h-[90vh]">
            <div className="h-full w-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${
                            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                        style={{ backgroundImage: `url(${slide.image})`,
                            borderRadius: '10px'
                         }}
                    >
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 lg:bg-gradient-to-l bg-gradient-to-b from-black/10 to-black/100 z-10 rounded-lg"></div>
                        
                        {/* Content Section */}
                        <div className="relative z-20 flex flex-col justify-end lg:justify-center lg:items-start items-center lg:w-1/2 w-full h-full gap-4 lg:ml-10 px-6 pb-32 lg:pb-0">
                            <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-center lg:text-left">
                                {slide.heading}
                            </h1>
                            <p className="text-gray-300 text-md lg:text-2xl max-w-xl text-center lg:text-left">
                                {slide.paragraph}
                            </p>

                            {/* CTA Button */}
                            {slide.cta && (
                                <div 
                                    className="group flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105" 
                                    onClick={() => handleCTA(slide.cta.action)}
                                >
                                    <h3 className="text-gray-300 text-md lg:text-xl font-medium p-2 group-hover:text-red-500">
                                        {slide.cta.text}
                                    </h3>
                                    <MdOutlineArrowForwardIos className="text-gray-300 h-6 w-6 group-hover:text-red-500" />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-4 z-30">
                <MdOutlineArrowBackIosNew 
                className="text-gray-300 h-6 w-6 hover:text-red-500" 
                onClick={prevSlide}
                />
                <div className="flex gap-2">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`w-3 h-3 rounded-full cursor-pointer ${
                                index === currentSlide ? 'bg-red-500' : 'bg-white bg-opacity-50'
                            }`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
                <MdOutlineArrowForwardIos 
                className="text-gray-300 h-6 w-6 hover:text-red-500" 
                onClick={nextSlide}
                />
            </div>
        </div>
    );
};

export default Slideshow;

// Example usage:
// <Slideshow slides={[
//   { 
//     image: '/path/to/image1.jpg', 
//     heading: 'RUSH UNMATCHED', 
//     paragraph: 'Experience the thrill of speed and precision with our cutting-edge racing technology.',
//     cta: { text: 'LEARN MORE', action: '/history' }
//   },
//   { 
//     image: '/path/to/image2.jpg', 
//     heading: 'POWER UNLEASHED', 
//     paragraph: 'Discover the ultimate performance machines built for champions.',
//     cta: { text: 'EXPLORE NOW', action: '/products' }
//   },
//   { 
//     image: '/path/to/image3.jpg', 
//     heading: 'LEGACY CONTINUES', 
//     paragraph: 'Join the heritage of excellence that spans generations of racing.',
//     cta: { text: 'JOIN US', action: '/contact' }
//   },
// ]} />