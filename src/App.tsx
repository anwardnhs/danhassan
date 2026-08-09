// src/App.jsx

import { useState } from 'react';
import Header from './components/Header';
// Remove the Footer import from here
// import Footer from './components/Footer'; 
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Leadership from './pages/Leadership';
import Investors from './pages/Investors';
import Contact from './pages/Contact';
import Newsroom from './pages/Newsroom';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // This function can be simplified
  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Optional: scroll to top on page change
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'portfolio':
        return <Portfolio onNavigate={handleNavigate} />;
      case 'leadership':
        return <Leadership onNavigate={handleNavigate} />;
      case 'investors':
        return <Investors onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      case 'newsroom':
        return <Newsroom onNavigate={handleNavigate} />;
      default:
        // Pass the handleNavigate function as a prop to Home
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {renderPage()}
      </main>
      {/* --- REMOVE THE FOOTER FROM HERE --- */}
      {/* <Footer onNavigate={setCurrentPage} /> */}
    </div>
  );
}

export default App;
