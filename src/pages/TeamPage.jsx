import founder from "../assets/members/founders/safwan-abdul.jpg"
import sanjaykutty from "../assets/members/founders/sanjay-kutty.jpg"
import vishnu from "../assets/members/founders/vishnu-cs.jpg"
import varun from "../assets/members/founders/varun-venugopal.jpg"
import { useEffect,useState } from "react";
import execom25 from "../assets/members/execom/2025/execom.jpg"
import execom24 from "../assets/members/execom/2024/execom.jpg"

const TeamPage = () => {

    useEffect(() => {    
        document.title = "Team | Herakles CET";
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const founders = [
            {
                name: "Safwan Abdul",
                role: "Founder",
                image: founder
            },
            {
                name: "Vishnu CS",
                role: "Co-Founder",
                image: vishnu
            },
            {
                name: "Varun Venugopal",
                role: "Co-Founder",
                image: varun
            },
            {
                name: "Sanjay K Kutty",
                role: "Co-Founder",
                image: sanjaykutty
            }
        ]

    const mentors = [
        {
        name: 'Dr. Emily Brown',
        role: 'Engineering Mentor',
        image: 'https://placehold.co/150'
        },
        {
        name: 'Mr. Robert Green',
        role: 'Design Mentor',
        image: 'https://placehold.co/150'
        },
        {
        name: 'Ms. Sarah White',
        role: 'Business Mentor',
        image: 'https://placehold.co/150'
        }
    ];

    const execom = [
        {
            year: 2025,
            image: execom25,
        },
        {
            year: 2024,
            image: execom24,
        },
        {
            year: 2023,
            image: 'https://placehold.co/150',
        },
        {
            year: 2022,
            image: 'https://placehold.co/150',
        },
        {
            year: 2021,
            image: 'https://placehold.co/150',
        }
    ];

    const [openYear, setOpenYear] = useState(null);
    
    const toggleDetails = (year) => {
        setOpenYear(openYear === year ? null : year);
    };

    return (
        <div className='container mx-auto px-4 pt-20 animate-fade-in'>
            <h1 className="text-4xl text-center my-8">OUR TEAM</h1>
            <h2 className="text-2xl text-center my-4">Founders</h2>
            <div className="flex flex-wrap gap-10 px-4 w-full justify-center space-around mx-auto">
                {founders.map((founder, index) => (
                    <div key={index} className="border p-4 rounded-lg">
                        <img src={founder.image} alt={founder.name} className="h-100 object-cover rounded-md" />
                        <h3 className="text-xl font-semibold mt-2">{founder.name}</h3>
                    <p className="text-gray-600">{founder.role}</p>
                </div>
            ))}
        </div>
        <hr className="my-10 border-gray-300" />
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
        <hr className="my-10 border-gray-300" />
        <h2 className='text-2xl text-center my-4'>Executive Committee</h2>
        <div className="w-full max-w-3xl mx-auto mb-10">
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
                        <div className="flex flex-wrap gap-6 justify-center">
                            <img 
                                src={execomYear.image} 
                                alt={`Execom ${execomYear.year}`} 
                                className="object-cover rounded-md"
                                onError={(e) => {e.target.src = "https://placehold.co/150?text=Execom"}}
                            />
                        </div>
                    </div>
                </details>
            ))}
        </div>
    </div>
  )
}

export default TeamPage