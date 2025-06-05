import React from 'react';
import { motion } from 'framer-motion';
import './Experience.scss';

const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const listItemVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.5
      }
    }
  };

  return (
    <div className="experience-section" id="experience">
      <motion.div
        className="experience-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="section-title">Experience</h2>
        
        <motion.div className="experience-item" variants={itemVariants}>
          <div className="experience-header">
            <h3>Graduate Assistant</h3>
            <p className="company">Texas State University</p>
            <p className="duration">July 2024 - Present</p>
          </div>
          
          <motion.ul 
            className="responsibilities"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              "Built a Custom Attributes API using Python and Google Cloud Platform to streamline data flow for Navigate360, improving backend efficiency and user experience.",
              "Conducted data analysis on course enrollment trends to support academic planning, uncovering student motivations and helping inform key decisions.",
              "Developed alumni insights reports using Pandas and labor market tools, contributing to better outreach strategies and improved engagement.",
              "Maintained and transformed academic records within Navigate360, ensuring clean, structured data for advising and course planning tools.",
              "Redesigned website navigation with Gato CMS, improving content structure and accessibility, leading to higher engagement and easier resource discovery."
            ].map((item, index) => (
              <motion.li 
                key={index}
                variants={listItemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience; 