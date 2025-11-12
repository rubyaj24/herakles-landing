import { FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { FaXTwitter } from 'react-icons/fa6';
import { CgMail } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Footer = () => {

    const socialLinks = [
        {
            name: 'X',
            url: 'https://twitter.com',
            icon: <FaXTwitter className="inline mr-1" />
        },
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/share/1CBTkpXqw1/',
            icon: <FaFacebookSquare className="inline mr-1" />
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/heraklesracing/',
            icon: <FaInstagram className="inline mr-1" />
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/company/herakles-racing/',
            icon: <FaLinkedin className="inline mr-1" />
        },
        {
            name: 'YouTube',
            url: 'https://youtube.com/@heraklesbajaracing8959?si=O9VuD2jfYWdpWHKs',
            icon: <FaYoutube className="inline mr-1" />
        }
    ];

    // Use internal app routes (client-side) so navigation doesn't cause a full-page reload.
    const pages = [
        { name: 'HOME', to: '/' },
        { name: 'ABOUT', to: '/about' },
        { name: 'TEAM', to: '/team' },
        { name: 'HISTORY', to: '/history' },
        { name: 'MERCHANDISE', to: '/merchandise' }
    ];

    return (
        <footer className="bg-gray-900 text-white py-8">
            <p className="text-center text-gray-400 mb-6">&copy; {new Date().getFullYear()} HERAKLES RACING. ALL RIGHTS RESERVED.</p>
            <div className="flex flex-col lg:flex-row space-around lg:justify-around max-w-6xl gap-10 mx-auto">
            {/* Contact Information */}
            <div className='px-4 mb-6 text-gray-200'>
                <p className='font-bold'>Herakles CET</p>
                <p>College of Engineering Trivandrum</p>
                <p>695016</p>
                <p>Trivandrum</p>
                <p>India</p>
                <p className='flex items-center mt-4'><BsTelephoneFill className='mr-2' /><a href="tel:+919400827091">+91 94008 27091</a></p>
                <p className='flex items-center'><BsTelephoneFill className='mr-2' /><a href="tel:+917034721402">+91 70347 21402</a></p>
                <p className='flex items-center'><CgMail className='mr-2' /><a href="mailto:heraklescet@gmail.com">heraklescet@gmail.com</a></p>
            </div>
            {/* Tabs */}
            <div className="flex mb-6">
                <ul className="flex flex-col">
                    {pages.map((page, index) => (
                        <li className="my-2" key={index}>
                            <Link to={page.to} className="px-4 py-2 uppercase font-medium hover:text-gray-300 transition-colors">
                                {page.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Social links */}
            <div className="flex">
                <ul className="flex flex-col">
                    {socialLinks.map((link, index) => (
                        <li className="my-2" key={index}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 uppercase font-medium hover:text-gray-300 transition-colors">
                                {link.icon}
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
    </footer>
)
}

export default Footer