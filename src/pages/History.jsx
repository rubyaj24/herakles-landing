import { useEffect } from 'react'
import banner from '../assets/logo render.png'
import ebaja from '../assets/e-baja.png'
import mbaja from '../assets/m-baja.JPG'

const History = () => {

  useEffect(() => {
          setTimeout(() => {
              document.title = "History | Herakles CET";
          }, 1000);
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);

  return (
    <div className='container mx-auto px-4 pt-40 animate-fade-in'>
      <h1 className="text-4xl lg:text-7xl font-bold mb-6">Herakles Racing: Forging the Future, One Terrain at a Time</h1>
      <div className='relative mb-6'>
        <img src={banner} alt='Team History' className='w-full object-cover rounded-lg' />
        <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-black/0 rounded-lg flex items-end'>
          <p className='text-white text-sm lg:text-2xl p-6 leading-relaxed'>
            Started in 2018, our team has been dedicated to building 
            innovative and competitive ATVs for the BAJA competitions. Over the years, we have learned valuable lessons, 
            faced numerous challenges, and celebrated our achievements together.
          </p>
        </div>
      </div>
      <p className='hidden my-4 leading-relaxed'>
        From our first prototype to our latest designs, each iteration 
        has brought us closer to our goal of excellence in engineering 
        and teamwork. We take pride in our journey and the legacy we continue to build.</p>
      <p className='text-md my-4 leading-relaxed'>At the College of Engineering Trivandrum, engineering has never been just an academic 
        pursuit — it is a relentless drive to explore, to innovate, and to lead. Herakles Racing 
        was born from this very spirit: to design machines that conquer terrain, challenge convention, 
        and shape the future of mobility. What began as a student initiative has now grown into a movement 
        of excellence, resilience, and purposeful innovation — across every terrain, and through every evolution.</p>
      <img src='https://placehold.co/600x400' alt='Historical Image' className='w-full h-64 object-cover rounded-lg mb-6' />
      <p className='hidden my-4 leading-relaxed'>Join us as we look back at our milestones, the evolution of our designs, and the spirit that drives us forward.</p>
      <h2 className='text-3xl font-semibold my-6'>The Genesis of Grit</h2>
      <p className='my-4 leading-relaxed'>
        Our journey began in SAE BAJA 2019, under the mBAJA category — our first national appearance. Even as newcomers, we made our mark with an audacious spirit and 
        a machine built entirely from scratch. We faced teams with years of legacy, but we rose to the challenge and achieved outstanding results:</p>
      <ul>
        <li className='my-2'>•	2nd – Suspension & Traction</li>
        <li className='my-2'>•	3rd – Acceleration</li>
        <li className='my-2'>•	6th – Endurance</li>
        <li className='my-2'>•	Sled Pull – Cleared</li>
        <li className='my-2'>•	AIR 9 overall</li>
      </ul>
      <p className='my-4 leading-relaxed'>It was this remarkable debut that laid the foundation of Herakles Racing — a legacy powered by belief and driven by bold engineering.</p>
      <img src={mbaja} alt='First Prototype' className='w-full object-cover rounded-lg mb-6' />
      <p className='my-4 leading-relaxed'>But we knew that success was not just about the accolades; it was about the journey, the learning, and the evolution.
        In 2021, we returned to SAE BAJA India, again competing under the mBAJA category with a petrol-powered all-terrain vehicle — entirely designed, engineered, and assembled 
        in-house. This was more than a competition; it was a launchpad. We challenged ourselves in every dynamic event, racing alongside over 150 teams from across the country. 
        Against the odds, we secured top ranks:
      </p>
      <ul>
        <li className='my-2'>•	4th – Maneuverability</li>
        <li className='my-2'>•	14th – Suspension & Traction</li>
        <li className='my-2'>•	13th – Overall Dynamics</li>
        <li className='my-2'>•	12th – All Terrain</li>
        <li className='my-2'>•	AIR 29 overall | Kerala Rank 1</li>
      </ul>

      <p className='my-4 leading-relaxed'>But even in that moment of triumph, we saw beyond it. 
        We understood that the future of mobility wasn't just about speed and control — it was about responsibility. 
        In that same year, we took a bold step forward.</p>
      <h2 className='text-3xl font-semibold my-6'>Igniting a New Current</h2>
      <img src= {ebaja} alt='eBAJA Prototype' className='w-full object-cover rounded-lg mb-6' />
      <p className='my-4 leading-relaxed'>Still under SAE BAJA 2021, Herakles Racing shifted into 
        the electric division — eBAJA. It wasn’t just a switch in powertrain; it was a declaration of intent. 
        The world was moving toward cleaner, smarter technologies, and we knew our engineering had to follow suit. 
        Designing an electric ATV presented a new realm of challenges: battery architecture, energy efficiency, 
        power delivery — every decision carried consequences. Yet, the team rose to the challenge and delivered 
        an impressive debut performance:
      </p>
      <ul>
        <li className='my-2'>•	6th – Maneuverability</li>
        <li className='my-2'>•	13th – Suspension & Traction</li>
        <li className='my-2'>•	9th – Overall Dynamics</li>
        <li className='my-2'>•	9th – All Terrain</li>
        <li className='my-2'>•	AIR 16 overall | Kerala Rank 2</li>
      </ul>
      <p className='my-4 leading-relaxed'>The transition from combustion to electric wasn’t just strategic — 
        it was a reflection of who we were becoming: engineers with a vision, grounded in purpose.
      </p>
      <h2 className='text-3xl font-semibold my-6'>At the Summit of Performance</h2>
      <img src='https://placehold.co/600x400' alt='2024 Prototype' className='w-full h-64 object-cover rounded-lg mb-6' />
      <p className='my-4 leading-relaxed'>What followed was not just growth — it was refinement. 
        Through tireless design iterations, simulation cycles, and testing trials, we returned to 
        SAE eBAJA in 2024 with a machine that reflected three years of learning, failure, and precision. 
        And this time, we didn't just compete — we dominated.</p>
      <ul>
        <li className='my-2'>•  AIR 1 – Maneuverability</li>
	      <li className='my-2'>•  AIR 5 – Suspension & Traction</li>
	      <li className='my-2'>•  AIR 14 – Endurance</li>
	      <li className='my-2'>•  AIR 10 – Sled Pull</li>
	      <li className='my-2'>•  Overall AIR 9</li>
      </ul>
      <p className='my-4 leading-relaxed'>The 2024 edition marked a turning point. It was the year we stood 
        shoulder to shoulder with the best — not just as a team from Kerala or as students from CET, but as 
        engineers leading India’s electric off-road frontier.</p>
      <h2 className='text-3xl font-semibold my-6'>The Road Ahead</h2>
      <img src='https://placehold.co/600x400' alt='Future Vision' className='w-full h-64 object-cover rounded-lg mb-6' />
      <p className='my-4 leading-relaxed'>But true innovation never settles. The next frontier was already in sight — 
        and it wasn’t electric. It was cleaner, more powerful, and far more complex. In 2025, Herakles Racing entered 
        H-BAJA, the hydrogen fuel-based vertical of SAE BAJA India. With it, we introduced the world’s 
        first hydrogen-fueled ATV, powered by an HCNG (Hydrogen-CNG hybrid) system — a bold testament to 
        engineering that transcends limitations. This was our most daring venture yet, but also our most rewarding.</p>
        <ul>
          <li className='my-2'>•	AIR 2 – Sales & Acceleration</li>
          <li className='my-2'>•	AIR 11 – Validation, Efficiency & Virtual Dynamics</li>
          <li className='my-2'>•	AIR 33 – Endurance, Sled Pull & Cost</li>
          <li className='my-2'>•	Overall AIR 2</li>
          <li className='my-2'>•	Best Debut Team Award</li>
        </ul>
      <p className='my-4 leading-relaxed'>This wasn’t just a performance — it was a statement. A vision for what student 
        engineering teams can achieve when passion meets purpose, and technology meets impact.
      </p>
      <h2 className='text-3xl font-semibold my-6'>One Team. Infinite Terrain.</h2>
      <img src='https://placehold.co/600x400' alt='Team Legacy' className='w-full h-64 object-cover rounded-lg mb-6' />
      <p className='my-4 leading-relaxed'>From petrol to electric to hydrogen, our journey has never been about staying ahead — 
        it’s been about moving forward, with intention. Every pivot has been powered by something more than machines: the desire 
        to leave every terrain better than we found it. Herakles Racing is not just a team; it’s a legacy in motion — built on 
        resilience, driven by innovation, and committed to shaping the future of mobility.</p>
    </div>
  )
}

export default History