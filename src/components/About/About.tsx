import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.scss';

const About: React.FC = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [introRef, introInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [eduRef, eduInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: 'blur(10px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="about-section">
      <motion.div 
        className="about-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          ref={titleRef}
          className="section-title"
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          About Me
        </motion.h2>

        <div className="about-grid">
          <motion.div 
            ref={introRef}
            className="about-text"
            variants={staggerChildren}
            initial="hidden"
            animate={introInView ? "visible" : "hidden"}
          >
            <motion.p variants={fadeInUp}>
              Currently pursuing a Master's in Computer Science after completing a strong undergraduate foundation as a CS major, 
              I thrive at the intersection of cloud computing, machine learning, and modern software engineering. My experience 
              covers backend development, scalable web applications, and cloud-native solutions using technologies like Java, 
              Python, C++, and JavaScript.
            </motion.p>
            <motion.p variants={fadeInUp}>
              From developing academic planning tools to implementing data-driven systems, I enjoy turning ideas into robust, 
              high-impact solutions. Skilled in building RESTful APIs, integrating with platforms like AWS and Google Cloud, 
              and managing databases such as PostgreSQL and MongoDB, I'm driven by a passion for problem-solving and continuous learning.
            </motion.p>
            <motion.p variants={fadeInUp}>
              I am always exploring new technologies, contributing to innovative teams, and seeking out opportunities to make 
              a difference through code.
            </motion.p>
          </motion.div>

          <motion.div 
            ref={eduRef}
            className="education-section"
            variants={staggerChildren}
            initial="hidden"
            animate={eduInView ? "visible" : "hidden"}
          >
            <motion.h3 variants={fadeInUp}>Education</motion.h3>
            
            <motion.div 
              className="education-item" 
              variants={fadeInUp}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
            >
              <h4>Texas State University</h4>
              <p className="degree">Master of Science in Computer Science</p>
              <p className="details">GPA: 3.75/4.00 | Jan 2024 - Present</p>
              <p className="location">San Marcos, Texas</p>
              <p className="coursework-text">Key Coursework: Algorithm Design, Network Systems, Database Theory, Data Mining, Software Engineering</p>
            </motion.div>

            <motion.div 
              className="education-item" 
              variants={fadeInUp}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
            >
              <h4>Jawaharlal Nehru Technological University</h4>
              <p className="degree">Bachelor of Technology in Computer Science</p>
              <p className="details">GPA: 3.5/4.00 | Aug 2019 – Aug 2023</p>
              <p className="location">Hyderabad, India</p>
              <p className="coursework-text">Key Coursework: Artificial Intelligence, Blockchain Technology, Ethical Hacking, Linux Programming, Cloud Computing, Data Science, IoT, Big Data, Computer Networks & Security, Operating Systems</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About; 