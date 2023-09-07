

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';



interface TypingAnimationProps {
    text: string;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({ text }) => {
    const [visibleText, setVisibleText] = useState('');
  const controls = useAnimation();

  useEffect(() => {
    const animateText = async () => {
        for (let i = 0; i <= text.length; i++) {
            setVisibleText(text.slice(0, i));
            // await controls.start({ opacity: 1 });
            await new Promise((resolve) => setTimeout(resolve, 1)); // Adjust typing speed here
            await controls.start({ opacity: 1 });
        }
    };

    animateText();
  }, [text, controls]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={controls}>
      {visibleText}.
    </motion.div>
  );
};

