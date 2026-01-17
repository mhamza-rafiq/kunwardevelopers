import { ReactNode } from 'react';
import useLenis from '@/hooks/useLenis';

interface SmoothScrollProviderProps {
  children: ReactNode;
}

const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
  useLenis();
  
  return <>{children}</>;
};

export default SmoothScrollProvider;
