import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowForwardIos, MdHome } from "react-icons/md";

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="text-center">
                <div className="mb-8">
                    <h1 className="text-9xl md:text-[12rem] font-bold text-red-500 mb-4">
                        404
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        PAGE NOT FOUND
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                        The page you're looking for doesn't exist or has been moved. 
                        Let's get you back on track.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <div 
                        className="group flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full" 
                        onClick={handleGoHome}
                    >
                        <MdHome className="text-white h-6 w-6" />
                        <span className="text-white text-lg font-medium">
                            Go Home
                        </span>
                    </div>

                    <div 
                        className="group flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105 border border-gray-600 hover:border-red-500 px-6 py-3 rounded-full" 
                        onClick={handleGoBack}
                    >
                        <span className="text-gray-300 group-hover:text-red-500 text-lg font-medium transition-colors duration-300">
                            Go Back
                        </span>
                        <MdOutlineArrowForwardIos className="text-gray-300 group-hover:text-red-500 h-6 w-6 transition-colors duration-300" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
