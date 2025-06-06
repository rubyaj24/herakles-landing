import React from 'react'

const News = () => {
const newsItems = [
    {
        id: 1,
        title: "New Training Program Launched",
        date: "June 15, 2023",
        thumbnail: "/images/news1.jpg",
        summary: "Our latest training program focuses on strength and conditioning."
    },
    {
        id: 2,
        title: "Competition Results Announced",
        date: "May 28, 2023",
        thumbnail: "/images/news2.jpg",
        summary: "Congratulations to all participants in our recent competition."
    },
    {
        id: 3,
        title: "Facility Expansion Complete",
        date: "April 10, 2023",
        thumbnail: "/images/news3.jpg",
        summary: "We've expanded our training facilities to accommodate more members."
    }
];

return (
    <section className="news-section py-12 px-4">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img 
                            src={item.thumbnail} 
                            alt={item.title} 
                            className="w-full h-48 object-cover"
                            onError={(e) => {e.target.src = "https://placehold.co/400x200?text=News"}}
                        />
                        <div className="p-4">
                            <p className="text-gray-500 text-sm mb-2">{item.date}</p>
                            <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                            <p className="text-gray-700">{item.summary}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
)
}

export default News