import { useEffect } from "react";
import Partners from "../components/Sponsors";

const Sponsors = () => {

    useEffect(() => {
        document.title = "Sponsors | Herakles Racing"
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="container mx-auto flex flex-col pt-30 px-6 animate-fade-in">
            <nav className="mb-4 text-sm text-gray-500">
                <a href="/" className="hover:underline">Home</a> / <span>Sponsors</span>
            </nav>
            {/* <h1 className="text-4xl font-bold mb-8">Our Sponsors</h1> */}
            <p className="text-lg text-gray-700">We are proudly supported by our esteemed sponsors.</p>
            {/* Add sponsor logos and details here */}
            <Partners />
        </div>
    );
}

export default Sponsors;