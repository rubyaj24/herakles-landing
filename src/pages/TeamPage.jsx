import { useEffect } from "react";

const TeamPage = () => {

    useEffect(() => {
        setTimeout(() => {
            document.title = "Team | Herakles CET";
        }, 1000);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const founders = [
        {
        name: 'John Doe',
        role: 'Team Leader',
        image: 'https://placehold.co/150'
        },
        {
        name: 'Jane Smith',
        role: 'Technical Lead',
        image: 'https://placehold.co/150'
        },
        {
        name: 'Alice Johnson',
        role: 'Design Lead',
        image: 'https://placehold.co/150'
        }
    ];

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

  return (
    <div className='container mx-auto px-4 pt-20 animate-fade-in'>
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
    </div>
  )
}

export default TeamPage