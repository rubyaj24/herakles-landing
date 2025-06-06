import mbaja from '../assets/m-baja.JPG';
import ebaja from '../assets/e-baja.png';
import hbaja from '../assets/h-baja.png';
import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Vehicles = () => {

    const navigate = useNavigate();
    const handleCTA = (action) => {
        if (action) {
            navigate(action);
        }
    };

    const models = [
        {
            id: 3,
            name: "H Baja",
            image: hbaja,
            description: "Hybrid technology combining the best of electric and mechanical power systems.",
            color: "green",
            action : "/products/h-baja"
        },
        {
            id: 2,
            name: "E Baja",
            image: ebaja,
            description: "Electric innovation meets racing excellence with zero emissions and maximum thrill.",
            color: "blue",
            action : "/products/e-baja"
        },
        {
            id: 1,
            name: "M Baja",
            image: mbaja,
            description: "Powerful mechanical beast engineered for extreme terrains and unmatched performance.",
            color: "red",
            action : "/products/m-baja"
        },
        
    ]

    const getHoverColors = (color) => {
        switch(color) {
            case 'red':
                return {
                    textHover: 'group-hover:text-red-500',
                    border: 'group-hover:border-red-500/50',
                };
            case 'blue':
                return {
                    textHover: 'group-hover:text-blue-500',
                    border: 'group-hover:border-blue-500/50',
                };
            case 'green':
                return {
                    textHover: 'group-hover:text-green-500',
                    border: 'group-hover:border-green-500/50',
                };
            default:
                return {
                    textHover: 'group-hover:text-red-500',
                    border: 'group-hover:border-red-500/50',
                };
        }
    };

return (
            <div className='container p-4 w-full'>
                <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 text-white">
                    HERAKLES RACING 
                    <span className="block text-red-500">VEHICLES</span>
                </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {models.map((model) => {
                                    const colors = getHoverColors(model.color);
                                    return (
                                    <div key={model.id} className="relative h-96 rounded-xl overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                                    onClick={() => handleCTA(model.action)}>
                                            <img 
                                                    src={model.image} 
                                                    alt={model.name} 
                                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                                    <h2 className="text-3xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                                                            {model.name}
                                                    </h2>
                                                    <p className="text-gray-200 text-sm leading-relaxed transform transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:translate-y-[-4px]">
                                                            {model.description}
                                                    </p>
                                                    <div className={`flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105`} 
                                                            onClick={() => handleCTA(model.action)}
                                                    >
                                                            <h3 className={`text-gray-300 text-md lg:text-xl font-medium p-2 ${colors.textHover} transition-colors duration-300`}>
                                                                    LEARN MORE
                                                            </h3>
                                                            <MdOutlineArrowForwardIos className={`text-gray-300 h-6 w-6 ${colors.textHover} transition-colors duration-300`} />
                                                    </div>
                                            </div>
                                            {/* Decorative border */}
                                            <div className={`absolute inset-0 border-2 border-transparent ${colors.border} rounded-xl transition-colors duration-300`}></div>
                                    </div>
                                    )
                            })}
                    </div>
            </div>
)
}

export default Vehicles