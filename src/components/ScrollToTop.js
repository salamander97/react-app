import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Add transition class
    document.body.classList.add('page-transition');
    
    // Force scroll to top
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      document.body.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });

      // Remove transition class after animation completes
      setTimeout(() => {
        document.body.classList.remove('page-transition');
      }, 1000); // Slightly longer than transition duration to ensure completion
    }, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;