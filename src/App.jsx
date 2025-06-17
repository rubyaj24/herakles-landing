import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Loader from './components/Loader.jsx'
import NavBar from './components/NavBar.jsx'
import NavBarMobile from './components/NavBarMobile.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import Merchandise from './pages/Merchandise.jsx'
import History from './pages/History.jsx'
import TeamPage from './pages/TeamPage.jsx'
import NotFound from './components/NotFound.jsx'
import News from './pages/News.jsx'
import Gallery from './pages/Gallery.jsx'

// Separate component inside Router context
const AppContent = () => {
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Page loading on route change
  useEffect(() => {
    setIsPageLoading(true);
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Show loader during page transitions
  if (isPageLoading) {
    return <Loader />;
  }

  return (
    <div className='flex flex-col min-h-screen gap-4'>
      <div className="fixed top-0 left-0 right-0 z-10 animate-fade-in">
        {isMobile ? (<NavBarMobile />) : (<NavBar />)}
      </div>
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/merchandise' element={<Merchandise />} />
          <Route path='/history' element={<History />} />
          <Route path='/team' element={<TeamPage />} />
          <Route path='/news' element={<News />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <section id='contact'>
        <Footer />
      </section>
    </div>
  );
}

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Initial app loading
  useEffect(() => {
    document.title = "Herakles CET";
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Show initial loader
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router basename="/herakles-landing">
      <AppContent />
    </Router>
  );
}

export default App
