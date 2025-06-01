import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.scss';

const Contact: React.FC = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="contact-section">
      <motion.div
        className="contact-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Get In Touch
        </h2>

        <motion.div className="contact-text" variants={itemVariants}>
          <p>
            Please feel free to contact me via email or connect with me on social media. 
            I welcome the opportunity to discuss potential projects, innovative ideas, or ways we might collaborate. 
            I am currently seeking new opportunities and am happy to respond to inquiries or introductions at your convenience.
          </p>
        </motion.div>

        <motion.div className="contact-links" variants={itemVariants}>
          <div className="social-links">
            <a
              href="mailto:mahathipilli23@gmail.com"
              className="social-link"
              title="Send me an email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/m-pilli"
              target="_blank"
              rel="noopener noreferrer"
              title="View my GitHub profile"
              className="social-link"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/m-pilli"
              target="_blank"
              rel="noopener noreferrer"
              title="Connect on LinkedIn"
              className="social-link"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact; 