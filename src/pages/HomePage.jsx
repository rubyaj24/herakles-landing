import { useEffect } from 'react';
import HeroSection from '../components/HeroSection.jsx'
import About from '../components/About.jsx'
import College from '../components/College.jsx'
import Team from '../components/Team.jsx'
import Slideshow from '../components/ui/Slideshow.jsx'
import Banner1 from '.././assets/banner1.jpg';
import Banner2 from '.././assets/e-baja.png';
import Banner3 from '.././assets/1.png';
import Sponsors from '../components/Sponsors.jsx';

const HomePage = () => {

  useEffect(() => {
            setTimeout(() => {
                document.title = "Home | Herakles CET";
            }, 1000);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, []);

  return (
    <>
      <section id='home' className="flex flex-col items-center justify-center lg:mt-30 animate-fade-in mx-6 border-2 rounded-lg border-gray-300 shadow-lg">
        <Slideshow slides={[
          { 
            image: Banner3, 
            heading: 'POWER UNLEASHED', 
            paragraph: 'Discover the ultimate performance machines built for champions.',
            cta: { text: 'EXPLORE NOW', action: '/products' }
          },
          { 
            image: Banner2, 
            heading: 'LEGACY CONTINUES', 
            paragraph: 'Join the heritage of excellence that spans generations of racing.',
            cta: { text: 'JOIN US', action: '/contact' }
          },
          { 
            image: Banner1, 
            heading: 'RUSH UNMATCHED', 
            paragraph: 'Experience the thrill of speed and precision with our cutting-edge racing technology.',
            cta: { text: 'LEARN MORE', action: '/history' }
          }
        ]} />
      </section>

      <section id='about' className="flex flex-col items-center justify-center gap-4 m-6 border-2 rounded-lg border-gray-300 animate-rise-in scroll-smooth [animation-timeline:view()] [animation-range:0%_cover_40%]">
        <About />
      </section>

      <section id='college' className="flex flex-col items-center justify-center gap-4 m-6 border-2 rounded-lg border-gray-300 animate-rise-in scroll-smooth [animation-timeline:view()] [animation-range:0%_cover_40%]">
        <College />
      </section>

      <section id='team' className="flex flex-col items-center justify-center gap-4 m-6 border-2 rounded-lg border-gray-300 animate-rise-in scroll-smooth [animation-timeline:view()] [animation-range:0%_cover_40%]">
        <Team />
      </section>
      <section id='team' className="flex flex-col items-center justify-center gap-4 m-6 border-2 rounded-lg border-gray-300 animate-rise-in scroll-smooth [animation-timeline:view()] [animation-range:0%_cover_40%]">
        <Sponsors />
      </section>
    </>
  )
}

export default HomePage