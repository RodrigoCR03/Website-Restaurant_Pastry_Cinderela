import { Variants } from 'framer-motion';

// Fade in animation variants
export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', delay: number = 0): Variants => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        delay
      }
    }
  };
};

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Zoom in animation
export const zoomIn = (delay: number = 0): Variants => {
  return {
    hidden: {
      scale: 0.8,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.4,
        delay
      }
    }
  };
};

// Slide in animation
export const slideIn = (direction: 'up' | 'down' | 'left' | 'right', type: string, delay: number, duration: number): Variants => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
    },
    visible: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

// Rotate in animation
export const rotateIn = (delay: number = 0): Variants => {
  return {
    hidden: {
      rotate: -180,
      opacity: 0,
      scale: 0.8
    },
    visible: {
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        duration: 0.8,
        delay
      }
    }
  };
};

// Hover animation for menu items
export const menuItemHover: Variants = {
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      type: 'spring',
      stiffness: 300
    }
  }
};

// Parallax effect for scrolling
export const parallaxEffect = (yOffset: number): Variants => {
  return {
    visible: {
      y: yOffset,
      transition: {
        type: 'spring',
        stiffness: 10,
        damping: 30
      }
    }
  };
};

// Pulse animation for buttons or highlights
export const pulseAnimation: Variants = {
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'loop'
    }
  }
};