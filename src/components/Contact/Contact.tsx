import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import { logFormSubmission, logSocialClick } from '../../utils/analytics';
import './Contact.scss';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "");
  }, []);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (form.current) {
        await emailjs.sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID || "",
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "",
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ""
        );
        setSubmitStatus('success');
        setFormData({ user_name: '', user_email: '', message: '' });
        logFormSubmission('contact', 'success');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      logFormSubmission('contact', 'error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleSocialClick = (platform: string) => {
    logSocialClick(platform);
  };

  return (
    <div className="contact-section" id="contact">
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

        <motion.form 
          ref={form}
          className="contact-form"
          variants={itemVariants}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <motion.input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              value={formData.user_name}
              onChange={handleInputChange}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <div className="form-group">
            <motion.input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              value={formData.user_email}
              onChange={handleInputChange}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <div className="form-group">
            <motion.textarea
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleInputChange}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <motion.button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faPaperPlane} className="button-icon" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
          {submitStatus === 'success' && (
            <motion.p
              className="status-message success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Message sent successfully! I'll get back to you soon.
            </motion.p>
          )}
          {submitStatus === 'error' && (
            <motion.p
              className="status-message error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Failed to send message. Please try again or contact me directly via email.
            </motion.p>
          )}
        </motion.form>

        <motion.div className="social-links" variants={itemVariants}>
          <a
            href="mailto:mahathipilli23@gmail.com"
            className="social-link"
            title="Send me an email"
            onClick={() => handleSocialClick('email')}
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
            onClick={() => handleSocialClick('github')}
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
            onClick={() => handleSocialClick('linkedin')}
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact; 