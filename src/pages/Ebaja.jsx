import {useEffect} from 'react'
import hbaja from '../assets/h-baja.png';

const Ebaja = () => {

    useEffect(() => {
        document.title = "E Baja | Herakles Racing"
        scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

  return (
    <div className='container mx-auto px-4 pt-40 animate-fade-in'>
      <nav className="mb-4 text-sm text-gray-500">
        <a href="/" className="hover:underline">Home</a> / <span>E Baja</span>
      </nav>
          <h1 className="text-4xl lg:text-7xl font-bold mb-6">E Baja</h1>
          <div className='relative mb-6'>
            <img src={hbaja} alt='Team History' className='w-full object-cover rounded-lg' />
            <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-black/0 rounded-lg flex items-end'>
              
            </div>
            <p className='text-white text-sm lg:text-2xl p-6 leading-relaxed'>
              Our project, titled Aether, envisions the design, fabrication, and validation of a rugged single-seat All-Terrain Vehicle (ATV) driven by a high-performance electric drivetrain. Aether is engineered to deliver reliable off-road performance while embracing sustainability at its core. With a robust rear-wheel-drive configuration and a lightweight yet durable chassis, the vehicle is built to traverse rough and demanding terrain effortlessly, offering an efficient mobility solution tailored for remote and rural regions.
The electric vehicle landscape is witnessing unprecedented growth across the globe. Falling battery costs, rapid innovation in power electronics, and a strong global shift toward renewable energy have accelerated the adoption of electric mobility. In India, government initiatives such as FAME and the expansion of the EV charging network are further fueling this transformation. Aether contributes to this movement by reimagining electric vehicles beyond city limits—extending their potential to rural and off-road environments where dependability and accessibility matter most.
Through strategic collaboration with local communities, governmental bodies, and industry partners, Aether aims to create a cost-effective and scalable model for sustainable transportation. The project serves not only as an engineering challenge but also as a meaningful step toward fostering local innovation, job creation, and environmental stewardship. At its heart, Aether represents the evolution of mobility—where technology, sustainability, and resilience come together to drive progress for a cleaner, greener future.
            </p>
          </div>
    </div>
  )
}

export default Ebaja