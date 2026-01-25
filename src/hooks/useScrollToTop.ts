import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to reset scroll position to top on route change
 */
const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo(0, 0);
    
    // Also trigger on Lenis if available
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);
};

export default useScrollToTop;
