
import { BsTelephoneFill } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'
import Breadcrumb from '../components/ui/Breadcrumb'

const Contact = () => {
    return(
        <div className='pt-40 px-10'>
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <div className='container px-4 mb-6 text-gray-200'>
            <p className='font-bold'>Herakles CET</p>
            <p>College of Engineering Trivandrum</p>
            <p>695016</p>                
            <p>Trivandrum</p>
            <p>India</p>                
            <p className='flex items-center mt-4'><BsTelephoneFill className='mr-2 text-lg' /><a href="tel:+919400827091" className="underline">+91 94008 27091</a></p>
            <p className='flex items-center'><BsTelephoneFill className='mr-2 text-lg' /><a href="tel:+917034721402" className="underline">+91 70347 21402</a></p>
            <p className='flex items-center'><CgMail className='mr-2 text-lg' /><a href="mailto:heraklescet@gmail.com" className="underline">heraklescet@gmail.com</a></p>
        </div>
        </div>
    )
}

export default Contact