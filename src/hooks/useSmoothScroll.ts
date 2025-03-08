import { useCallback } from 'react';

const useSmoothScroll = () => {
  const scrollToSection = useCallback((targetIdOrEvent: string | React.MouseEvent<HTMLElement>, targetId?: string) => {
    let sectionId: string;
    
    // Check if first parameter is an event or a string
    if (typeof targetIdOrEvent === 'string') {
      // If it's a string, it's the targetId
      sectionId = targetIdOrEvent;
    } else {
      // If it's an event, prevent default and use the second parameter as targetId
      targetIdOrEvent.preventDefault();
      sectionId = targetId as string;
    }
    
    const targetElement = document.getElementById(sectionId);
    
    if (targetElement) {
      const navbarHeight = 80; // Adjust this value based on your navbar height
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return { scrollToSection };
};

export default useSmoothScroll;