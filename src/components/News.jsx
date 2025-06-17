import React from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const News = () => {

const navigate = useNavigate();

const newsItems = [
    {
        id: 1,
        title: "What's Happening in TVM!",
        date: "June 15, 2025",
        thumbnail: "/images/news1.jpg",
        summary: "Our latest training program focuses on strength and conditioning.",
        link: "https://www.instagram.com/reel/DIX3y8CT7dS/?igsh=MWhyaDFkamQya3ZsMw=="
    },
    {
       id: 2,
        title: "indianexpress News Feature",
        date: "May 28, 2025",
        thumbnail: "/images/news2.jpg",
        summary: "Congratulations to all participants in our recent competition.",
        link: "https://www.newindianexpress.com/amp/story/states/kerala/2025/Apr/23/kerala-students-vroom-ahead-with-hydrogen-powered-offroad-vehicles"
    },
    {
        id: 3,
        title: "THE HINDU News Feature",
        date: "April 10, 2025",
        thumbnail: "/images/news3.jpg",
        summary: "We've expanded our training facilities to accommodate more members.",
        link: "https://www.thehindu.com/sport/motorsport/how-a-college-student-racing-club-in-thiruvananthapuram-is-developing-a-hydrogen-fuelled-atv/article69575291.ece/amp/"
    },
];

const handleLearnMore = () => {
    navigate('/news');
}

return (
    <section className="py-12 px-4">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Latest News</h2>
            <div className="flex flex-col lg:flex-row gap-8">
                {newsItems.map((item) => (
                    <div key={item.id} className="min-w-[350px] border rounded-lg shadow-md overflow-hidden">
                        <a href={item.link}>
                            <img 
                                src={item.thumbnail} 
                                alt={item.title} 
                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 rounded-t-lg"
                                onError={(e) => {e.target.src = "https://placehold.co/400x200?text=News"}}
                            />
                            <div className="p-4">
                                <p className="text-gray-500 text-sm mb-2">{item.date}</p>
                                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
        <div 
            className="group flex justify-end-safe items-center p-4 gap-2 cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={handleLearnMore}
        >
            <span className="text-gray-300 text-md lg:text-xl font-medium p-2 group-hover:text-red-500">
                LEARN MORE
            </span>
            <MdOutlineArrowForwardIos className="text-gray-300 h-6 w-6 group-hover:text-red-500" />
        </div>
    </section>
)
}

export default News