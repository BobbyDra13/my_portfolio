export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.2 },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.2 },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.2 },
};

export const zoomIn = {
  initial: { scale: 0.8, opacity: 0 },
  whileInView: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
  viewport: { once: true, amount: 0.3 },
};

export const pulseDownArrow = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: [0, 1, 0], // Pulsating effect
    scale: [0.8, 1.2, 0.8], // Scale animation to create the "pulsating" effect
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity, // Infinite loop
    },
  },
};
