import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CodeBackground.scss';

const codeSnippets = [
  '{ code }',
  'function()',
  'while(true)',
  'import React',
  'useState()',
  'async/await',
  'python3',
  'npm start'
];

interface CodeElement {
  id: number;
  text: string;
  x: number;
  y: number;
  side: 'left' | 'right';
}

const CodeBackground: React.FC = () => {
  const [elements, setElements] = useState<CodeElement[]>([]);

  useEffect(() => {
    const createElement = () => {
      const id = Date.now();
      const text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      const side = Math.random() > 0.5 ? 'left' : 'right';
      const x = side === 'left' ? Math.random() * 200 : window.innerWidth - (Math.random() * 200) - 100;
      const y = -50;

      setElements(prev => [...prev.slice(-8), { id, text, x, y, side }]); // Keep only last 8 elements

      setTimeout(() => {
        setElements(prev => prev.filter(element => element.id !== id));
      }, 8000);
    };

    const interval = setInterval(createElement, 3000); // Slower interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="code-background">
      <AnimatePresence>
        {elements.map(({ id, text, x, side }) => (
          <motion.div
            key={id}
            className={`code-element ${side}`}
            initial={{ opacity: 0, y: -50, x }}
            animate={{ 
              opacity: [0, 0.12, 0.12, 0],
              y: window.innerHeight + 50,
              x: x + (side === 'left' ? 50 : -50)
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 8,
              ease: "linear",
              opacity: {
                times: [0, 0.1, 0.9, 1],
                duration: 8
              }
            }}
          >
            {text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CodeBackground; 