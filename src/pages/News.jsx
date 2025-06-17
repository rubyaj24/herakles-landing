const News = () => {

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
        {
            id: 4,
            title: "CETAA News Feature",
            date: "March 5, 2025",
            thumbnail: "/images/news4.jpg",
            summary: "Our latest training program focuses on strength and conditioning.",
            link: "https://www.facebook.com/CETAlumniNews/videos/team-herakles/831192790667246/"
        },
        {
            id: 5,
            title: "Times of India News Feature",
            date: "February 20, 2025",
            thumbnail: "/images/news5.jpg",
            summary: "Get ready for our next competition with all the details you need.",
            link: "https://timesofindia.indiatimes.com/city/thiruvananthapuram/cets-baja-racing-team-wins-award/amp_articleshow/117651182.cms"
        },
        {
            id: 6,
            title: "Community Event Highlights",
            date: "January 15, 2025",
            thumbnail: "/images/news6.jpg",
            summary: "Check out the highlights from our recent community event.",
            link: "https://www.thehindu.com/sport/motorsport/how-a-college-student-racing-club-in-thiruvananthapuram-is-developing-a-hydrogen-fuelled-atv/article69575291.ece/amp/"
        }
    ];

return (
    <div className='flex justify-center pt-40'>
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Latest News & Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.map((item) => (
                    <div key={item.id} className="rounded-xl border overflow-hidden">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                            <img 
                                src={item.thumbnail} 
                                alt={item.title} 
                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                onError={(e) => {e.target.src = "https://placehold.co/400x200?text=News"}}
                            />
                            <div className="p-6">
                                <p className="text-sm font-medium mb-3">{item.date}</p>
                                <h3 className="font-bold text-xl mb-3 line-clamp-2">{item.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{item.summary}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>
)
}

export default News