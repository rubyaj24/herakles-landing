import React, { useEffect } from 'react'
import hbaja from '../assets/h-baja.png';
import Breadcrumb from '../components/ui/Breadcrumb';

const Ebaja = () => {

    useEffect(() => {
        document.title = "E Baja | Herakles Racing"
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, []);

  return (
    <main role="main" className='container mx-auto px-4 pt-36 lg:pt-40 animate-fade-in'>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'E Baja' }]} />

      <section className="mb-6">
        <div className='relative rounded-lg overflow-hidden'>
          <img
            src={hbaja}
            alt='Aether — Herakles Racing electric all-terrain vehicle concept'
            loading="lazy"
            className='w-full h-64 sm:h-96 md:h-[420px] lg:h-[540px] object-cover rounded-lg'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 flex items-end p-6'>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white">E Baja</h1>
          </div>
        </div>
      </section>

      <section className='mb-8'>
        <p className='text-gray-700 dark:text-gray-200 text-sm lg:text-lg leading-relaxed'>
          Our project, titled Aether, envisions the design, fabrication, and validation of a rugged single-seat All-Terrain Vehicle (ATV) driven by a high-performance electric drivetrain. Aether is engineered to deliver reliable off-road performance while embracing sustainability at its core. With a robust rear-wheel-drive configuration and a lightweight yet durable chassis, the vehicle is built to traverse rough and demanding terrain effortlessly, offering an efficient mobility solution tailored for remote and rural regions.
        </p>
      </section>

      <section className='mb-8'>
        <p className='text-gray-700 dark:text-gray-200 text-sm lg:text-lg leading-relaxed'>
          The electric vehicle landscape is witnessing unprecedented growth across the globe. Falling battery costs, rapid innovation in power electronics, and a strong global shift toward renewable energy have accelerated the adoption of electric mobility. In India, government initiatives such as FAME and the expansion of the EV charging network are further fueling this transformation. Aether contributes to this movement by reimagining electric vehicles beyond city limits—extending their potential to rural and off-road environments where dependability and accessibility matter most.
        </p>
      </section>

      <section className='mb-8'>
        <p className='text-gray-700 dark:text-gray-200 text-sm lg:text-lg leading-relaxed'>
          Through strategic collaboration with local communities, governmental bodies, and industry partners, Aether aims to create a cost-effective and scalable model for sustainable transportation. The project serves not only as an engineering challenge but also as a meaningful step toward fostering local innovation, job creation, and environmental stewardship. At its heart, Aether represents the evolution of mobility—where technology, sustainability, and resilience come together to drive progress for a cleaner, greener future.
        </p>
      </section>
    </main>
  )
}

export default Ebaja