import { MdOutlineArrowForwardIos } from "react-icons/md"
import { useNavigate } from "react-router-dom"

const Team = () => {
    const navigate = useNavigate();

    const handleLearnMore = () => {
        navigate('/team');
    };

    const mentors = [
        {
            name: "John Doe",
            role: "Lead Mentor",
            image: "https://placehold.co/150"
        },
        {
            name: "Jane Smith",
            role: "Technical Mentor",
            image: "https://placehold.co/150"
        },
        {
            name: "Alice Johnson",
            role: "Design Mentor",
            image: "https://placehold.co/150"
        }
    ]

    const founders = [
        {
            name: "Alice Brown",
            role: "Founder & CEO",
            image: "https://placehold.co/150"
        },
        {
            name: "Bob White",
            role: "Co-Founder & CTO",
            image: "https://placehold.co/150"
        },
        {
            name: "Charlie Green",
            role: "Co-Founder & COO",
            image: "https://placehold.co/150"
        }
    ]
  return (
    <div>
        <h1 className="text-4xl text-center my-8">OUR TEAM</h1>
        <h2 className="text-2xl text-center my-4">Founders</h2>
        <div className="flex flex-wrap gap-10 px-4 w-full justify-center space-around mx-auto">
            {founders.map((founder, index) => (
                <div key={index} className="border p-4 rounded-lg w-min-150">
                    <img src={founder.image} alt={founder.name} className="w-full h-32 object-cover rounded-md" />
                    <h3 className="text-xl font-semibold mt-2">{founder.name}</h3>
                    <p className="text-gray-600">{founder.role}</p>
                </div>
            ))}
        </div>
        <h2 className='text-2xl text-center my-4'>Mentors</h2>
        <div className="flex flex-wrap gap-10 px-4 w-full justify-center space-around mx-auto">
            {mentors.map((mentor, index) => (
                <div key={index} className="border p-4 rounded-lg w-min-150">
                    <img src={mentor.image} alt={mentor.name} className="w-full h-32 object-cover rounded-md" />
                    <h3 className="text-xl font-semibold mt-2">{mentor.name}</h3>
                    <p className="text-gray-600">{mentor.role}</p>
                </div>
            ))}
        </div>
        {/* CTA Button */}
        <div 
                className="group flex justify-end-safe items-center p-4 gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={handleLearnMore}
            >
                <span className="text-gray-300 text-md lg:text-xl font-medium p-2 group-hover:text-red-500">
                    LEARN MORE
                </span>
                <MdOutlineArrowForwardIos className="text-gray-300 h-6 w-6 group-hover:text-red-500" />
            </div>
    </div>
  )
}

export default Team