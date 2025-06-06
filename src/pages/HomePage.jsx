import HeroSection from '../components/HeroSection.jsx'
import About from '../components/About.jsx'
import College from '../components/College.jsx'
import Team from '../components/Team.jsx'

const HomePage = () => {
  return (
    <>
      <section id='home' className="flex flex-col items-center justify-center lg:mt-30 animate-fade-in mx-6 border-2 rounded-lg border-gray-300 shadow-lg overflow-hidden">
        <HeroSection />
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
    </>
  )
}

export default HomePage