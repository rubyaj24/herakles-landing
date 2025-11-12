import React, { useEffect } from 'react'
import hbaja from '../assets/h-baja.png';
import Breadcrumb from '../components/ui/Breadcrumb';

const Hbaja = () => {

    useEffect(() => {
        document.title = "H Baja | Herakles Racing"
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, []);

  return (
    <main role="main" className='container mx-auto px-4 pt-36 lg:pt-40 animate-fade-in'>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'H Baja' }]} />

      <section className="mb-6">
        <div className='relative rounded-lg overflow-hidden'>
          <img
            src={hbaja}
            alt='Herakles Racing — Project GENESIS H-Baja prototype vehicle'
            loading="lazy"
            className='w-full h-64 sm:h-96 md:h-[420px] lg:h-[540px] object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 flex items-end p-6'>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white">H Baja</h1>
          </div>
        </div>
      </section>

      <section className='mb-8'>
        <p className='text-gray-700 dark:text-gray-200 text-sm lg:text-lg leading-relaxed bg-white/0'>
          Project GENESIS is an initiative by Herakles Racing to explore hydrogen as a practical, clean fuel alternative for off-road mobility. The project focuses on developing an all-terrain vehicle powered by a hydrogen-CNG bi-fuel internal combustion engine, offering a cleaner and more adaptable solution compared to conventional petrol or diesel systems. By leveraging the stable combustion characteristics of CNG and the clean-burning nature of hydrogen, the vehicle enables partial hydrogen use without requiring a complete engine overhaul. This transitional approach serves as a crucial step toward the long-term goal of achieving 100% hydrogen-powered internal combustion. More than just a student prototype, GENESIS demonstrates the feasibility of hydrogen-ICE integration in real-world conditions — particularly in rugged, fuel-scarce, and environmentally sensitive areas — making it a scalable and impactful solution for future mobility needs.
        </p>
      </section>
    </main>
  )
}

export default Hbaja