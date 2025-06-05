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
<<<<<<< HEAD
        staggerChildren: 0.3,
        delayChildren: 0.2
=======
        staggerChildren: 0.1
>>>>>>> bed13f5158477579bca1bde28b964a52fc8974f9
      }
    }
  };

  const listItemVariants = {
<<<<<<< HEAD
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
=======
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
>>>>>>> bed13f5158477579bca1bde28b964a52fc8974f9
      }
    }
  };

  return (
    <section id="experience" className="experience-section">
      <motion.div 
        className="experience-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Professional Experience
        </motion.h2>

        <div className="experience-grid">
          <motion.div 
            className="experience-item"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="experience-header"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.h3
                whileHover={{ 
                  color: "var(--text-highlight)",
                  transition: { duration: 0.2 }
                }}
              >
                Graduate Assistant
              </motion.h3>
              <motion.p 
                className="company"
                whileHover={{ scale: 1.02 }}
              >
                Texas State University
              </motion.p>
              <p className="duration">Jan 2024 - Present</p>
              <p className="location">San Marcos, TX</p>
            </motion.div>
            <motion.ul 
              className="responsibilities"
              variants={listVariants}
<<<<<<< HEAD
              initial="hidden"
              animate="visible"
            >
              {[
                "Built a Custom Attributes API using Python and Google Cloud Platform to streamline data flow for Navigate360, improving backend efficiency and user experience.",
                "Conducted data analysis on course enrollment trends to support academic planning, uncovering student motivations and helping inform key decisions.",
                "Developed alumni insights reports using Pandas and labor market tools, contributing to better outreach strategies and improved engagement.",
                "Maintained and transformed academic records within Navigate360, ensuring clean, structured data for advising and course planning tools.",
                "Redesigned website navigation with Gato CMS, improving content structure and accessibility, leading to higher engagement and easier resource discovery."
=======
            >
              {[
                "Building Custom Attributes API using Python and Google Cloud Platform (GCP) for seamless Navigate360 data integration, improving backend performance and user experience.",
                "Analyzed intersession course enrollment using SQL and internal dashboards, finding 87% of students enrolled for degree acceleration, 5% for prerequisites, 3% retaking courses, and 5% withdrawing. Compiled insights into a summary report to support academic planning.",
                "Extracted and analyzed alumni data using Lightcast and Pandas, contributing to a 15% increase in alumni engagement through automated reports on career trajectories and employment trends.",
                "Managed and updated academic data within Navigate360, including course catalogs, student records, and advising information, performing backend data validation and transformation using GCP tools.",
                "Revamped website navigation by optimizing information architecture using Gato CMS, enhancing website accessibility and user experience with HTML, CSS, resulting in a 12% increase in page views per session and enhanced findability of key resources."
>>>>>>> bed13f5158477579bca1bde28b964a52fc8974f9
              ].map((responsibility, index) => (
                <motion.li 
                  key={index}
                  variants={listItemVariants}
                  whileHover={{ 
<<<<<<< HEAD
                    scale: 1.02,
                    transition: { 
                      type: "spring",
                      stiffness: 300,
                      damping: 10
                    }
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    transition: { 
                      type: "spring",
                      stiffness: 300,
                      damping: 10
                    }
=======
                    x: 10,
                    transition: { duration: 0.2 }
>>>>>>> bed13f5158477579bca1bde28b964a52fc8974f9
                  }}
                >
                  {responsibility}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience; 