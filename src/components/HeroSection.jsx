import Banner1 from '.././assets/banner1.jpg';
import { MdOutlineArrowForwardIos } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={Banner1}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 lg:bg-gradient-to-l bg-gradient-to-b from-black/10 to-black/100 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-end lg:justify-center lg:items-start items-center lg:w-1/2 w-full h-full gap-4 lg:ml-10 px-6 pb-20 lg:pb-0">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-center lg:text-left">
          RUSH UNMATCHED
        </h1>
        <p className="text-gray-300 text-md lg:text-2xl max-w-xl text-center lg:text-left">
          Experience the thrill of speed and precision with our cutting-edge racing technology.
        </p>

        {/* CTA Button */}
        <div className="group flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105">
          <h3 className="text-gray-300 text-md lg:text-xl font-medium p-2 group-hover:text-red-500">
            LEARN MORE
          </h3>
          <MdOutlineArrowForwardIos className="text-gray-300 h-6 w-6 group-hover:text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
