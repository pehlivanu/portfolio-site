import { useEffect } from 'react';
import { useNavigation } from '@/context/NavigationContext';

export function useScrollSpy(sectionId: 'about' | 'experience' | 'education' | 'projects' | 'contact') {
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
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
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
