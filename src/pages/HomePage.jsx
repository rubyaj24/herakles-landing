import HeroSection from '../components/hEROsECTION.JSX'
import About from '../components/About.jsx'
import College from '../components/College.jsx'
import Team from '../components/Team.jsx'

const HomePage = () => {
  return (
    <>
      <section id='home' className="flex flex-col items-center justify-center animate-fade-in">
        <HeroSection />
      </section>
      
      <section id='about' className="flex flex-col items-center justify-center gap-4 animate-rise-in scroll-smooth [animation-timeline:view()] [animation-range:0%_cover_40%]">
        <About />
      </section>
      
      <section id='college' className="flex flex-col items-center justify-center gap-4 animate-rise-in scroll-smooth [animation-timeline:view()] [animation-range:0%_cover_40%]">
        <College />
      </section>
      
      <section id='team' className="flex flex-col items-center justify-center gap-4 animate-rise-in scroll-smooth [animation-timeline:view()] [animation-range:0%_cover_40%]">
        <Team />
      </section>
    </>
  )
}

export default HomePage