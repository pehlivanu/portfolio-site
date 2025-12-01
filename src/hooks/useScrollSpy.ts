import { useEffect } from 'react';
import { useNavigation } from '@/context/NavigationContext';

export function useScrollSpy(sectionId: 'hero' | 'experience' | 'education' | 'projects' | 'contact') {
  const { setActiveSection } = useNavigation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(sectionId);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [sectionId, setActiveSection]);
}
