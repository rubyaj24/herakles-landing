import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Loader from './components/Loader.jsx'
import NavBar from './components/NavBar.jsx'
import NavBarMobile from './components/NavBarMobile.jsx'
import Footer from './components/Footer.jsx'
import Popup from './components/ui/Popup.jsx'
import HomePage from './pages/HomePage.jsx'
import Merchandise from './pages/Merchandise.jsx'
import History from './pages/History.jsx'
import TeamPage from './pages/TeamPage.jsx'
import NotFound from './components/NotFound.jsx'
import News from './pages/News.jsx'
import Gallery from './pages/Gallery.jsx'
import Hbaja from './pages/Hbaja.jsx'
import Ebaja from './pages/Ebaja.jsx'
import Sponsors from './pages/Sponsors.jsx'
import Contact from './pages/Contact.jsx'

// Separate component inside Router context
const AppContent = ({ isMobile }) => {
  const [isPageLoading, setIsPageLoading] = useState(false);
  const location = useLocation();

  // Page loading on route change
  useEffect(() => {
    setIsPageLoading(true);
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Show loader during page transitions
  if (isPageLoading) {
    return <Loader />;
  }

  return (
    <div className='flex flex-col min-h-screen gap-4'>
      <div className="fixed top-0 left-0 right-0 z-10 animate-fade-in">
        {isMobile ? (<NavBarMobile isMobile={isMobile} />) : (<NavBar isMobile={isMobile} />)}
      </div>
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<HomePage isMobile={isMobile} />} />
          <Route path='/merchandise' element={<Merchandise isMobile={isMobile} />} />
          <Route path='/sponsors' element={<Sponsors isMobile={isMobile} />} />
          <Route path='/history' element={<History isMobile={isMobile} />} />
          <Route path='/team' element={<TeamPage isMobile={isMobile} />} />
          <Route path='/news' element={<News isMobile={isMobile} />} />
          <Route path='/gallery' element={<Gallery isMobile={isMobile} />} />
          <Route path='/h-baja' element={<Hbaja isMobile={isMobile} />} />
          <Route path='/e-baja' element={<Ebaja isMobile={isMobile} />} />
          <Route path='/contact' element={<Contact isMobile={isMobile} />} />
          <Route path='*' element={<NotFound isMobile={isMobile} />} />
        </Routes>
      </main>
      <Popup isMobile={isMobile} />
      <section id='contact'>
        <Footer isMobile={isMobile} />
      </section>
    </div>
  );
}

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Initial app loading
  useEffect(() => {
    document.title = "Herakles CET";
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Mobile detection at top level and provide to all pages/components
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Show initial loader
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router basename={import.meta.env.BASE_URL || '/'}>
      <AppContent isMobile={isMobile} />
    </Router>
  );
}

export default App
