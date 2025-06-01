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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-content">
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
          {/* Introduction Part */}
          <motion.div 
            ref={introRef}
            className="about-text"
            initial="hidden"
            animate={introInView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            <motion.p variants={fadeInUp}>
              Hello! I'm Mahathi, a passionate Computer Science graduate student at Texas State University. 
              My journey in technology is driven by a deep fascination with solving complex problems and creating 
              innovative solutions that make a difference.
            </motion.p>
            <motion.p variants={fadeInUp}>
              With a strong foundation in computer science fundamentals and hands-on experience in modern 
              technologies, I specialize in developing scalable applications, working with cloud platforms, 
              and implementing data-driven solutions. I'm particularly interested in the intersection of 
              cloud computing, machine learning, and software engineering.
            </motion.p>
            <motion.p variants={fadeInUp}>
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
              and staying up-to-date with the latest developments in the tech world.
            </motion.p>
          </motion.div>

          {/* Education Part */}
          <motion.div 
            ref={eduRef}
            className="education-section"
            initial="hidden"
            animate={eduInView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            <motion.h3 variants={fadeInUp}>Education</motion.h3>
            
            <motion.div className="education-item" variants={fadeInUp}>
              <h4>Texas State University</h4>
              <p className="degree">Master of Science in Computer Science</p>
              <p className="details">GPA: 3.75/4.00 | Jan 2024 - Present</p>
              <p className="location">San Marcos, Texas</p>
              <p className="coursework-text">Key Coursework: Algorithm Design, Network Systems, Database Theory, Data Mining, Software Engineering</p>
            </motion.div>

            <motion.div className="education-item" variants={fadeInUp}>
              <h4>Jawaharlal Nehru Technological University</h4>
              <p className="degree">Bachelor of Technology in Computer Science</p>
              <p className="details">GPA: 3.5/4.00 | Aug 2019 – Aug 2023</p>
              <p className="location">Hyderabad, India</p>
              <p className="coursework-text">Key Coursework: Artificial Intelligence, Blockchain Technology, Ethical Hacking, Linux Programming, Cloud Computing, Data Science, IoT, Big Data, Computer Networks & Security, Operating Systems</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 