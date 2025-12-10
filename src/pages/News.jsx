import Breadcrumb from '../components/ui/Breadcrumb'
import banner from '../assets/logo render.png'
import SEOHead from '../components/ui/SEOHead'

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
            thumbnail: "https://media.newindianexpress.com/newindianexpress%2F2025-04-22%2Fl485h7he%2FPHOTO2025-04-2216-36-21050828.JPG?rect=0%2C293%2C1080%2C608&w=1024&auto=format%2Ccompress&fit=max",
            summary: "Congratulations to all participants in our recent competition.",
            link: "https://www.newindianexpress.com/amp/story/states/kerala/2025/Apr/23/kerala-students-vroom-ahead-with-hydrogen-powered-offroad-vehicles"
        },
        {
            id: 3,
            title: "THE HINDU News Feature",
            date: "April 10, 2025",
            thumbnail: "https://th-i.thgim.com/public/incoming/n02cdo/article69578498.ece/alternates/LANDSCAPE_1200/IMG_3707.jpg",
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
            thumbnail: "https://static.toiimg.com/thumb/msid-117593881,imgsize-382938,width-400,height-225,resizemode-72/117593881.jpg",
            summary: "Get ready for our next competition with all the details you need.",
            link: "https://timesofindia.indiatimes.com/city/thiruvananthapuram/cets-baja-racing-team-wins-award/amp_articleshow/117651182.cms"
        },
        {
            id: 6,
            title: "Community Event Highlights",
            date: "January 15, 2025",
            thumbnail: "https://th-i.thgim.com/public/incoming/n02cdo/article69578498.ece/alternates/LANDSCAPE_1200/IMG_3707.jpg",
            summary: "Check out the highlights from our recent community event.",
            link: "https://www.thehindu.com/sport/motorsport/how-a-college-student-racing-club-in-thiruvananthapuram-is-developing-a-hydrogen-fuelled-atv/article69575291.ece/amp/"
        }
    ];

return (
        <>
        <SEOHead
            title="News | Herakles Racing - Updates & Press"
            description="Latest news, press and updates from Herakles Racing CET — competition results, features and announcements."
            keywords="Herakles Racing news, BAJA updates, CET press"
            url={typeof window !== 'undefined' ? window.location.origin + '/news' : 'https://heraklesracing.cet.ac.in/news'}
        />
        <div className="pt-30">
        <div className="container mx-auto px-4">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'News' }]} />

            <h2 className="text-4xl font-bold mb-12 text-center">Latest News & Updates</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.map((item) => (
                    <article key={item.id} className="rounded-xl border border-gray-600 overflow-hidden bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="block" aria-label={`Read more about ${item.title}`}>
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                onError={(e) => { e.currentTarget.src = banner }}
                            />

                            <div className="p-6">
                                <time className="text-sm text-gray-500 font-medium mb-3 block" dateTime={item.date}>{item.date}</time>
                                <h3 className="font-bold text-xl mb-3 line-clamp-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.summary}</p>
                            </div>
                        </a>
                    </article>
                ))}
            </div>
        </div>
    </div>
    </>
)
}

export default News