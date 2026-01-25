import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Reset scroll position on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ 
          duration: 0.4, 
          ease: [0.4, 0, 0.2, 1] // Custom easing for smooth feel
        }}
        onAnimationStart={() => setIsTransitioning(true)}
        onAnimationComplete={() => setIsTransitioning(false)}
      >
        {children}
      </motion.div>

      {/* Transition Overlay - Brand consistent */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] pointer-events-none bg-primary/10"
          />
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};

export default PageTransition;
