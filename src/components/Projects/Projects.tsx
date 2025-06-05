import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Projects.scss';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Website Evaluation using Opinion Mining",
      description: "Developed a Django-based website evaluation platform that uses sentiment analysis to rank websites based on user feedback, classifying comments as positive or negative. Integrated a database system to store feedback and dynamically count the number of positive and negative comments, enabling real-time performance insights for website ranking.",
      techStack: ["Python", "Django", "HTML", "Sentiment Analysis"],
      githubLink: "https://github.com/m-pilli/Website-Evaluation-using-Opinion-Mining"
    },
    {
      title: "Stock Market Forecasting using Mixed ARIMA",
      description: "Built a predictive model using a mixed ARIMA approach for more accurate stock price forecasting. Integrated external factors and visualized predictions to support better trading decisions.",
      techStack: ["Python", "ARIMA", "Pandas", "Matplotlib"],
      githubLink: "https://github.com/m-pilli/Forecasting-Stock-Market-Prices-using-mixed-ARIMA-model"
    },
    {
      title: "Weather Forecast App",
      description: "An interactive full-stack web app built using Python Flask, SQLite, and public APIs like OpenWeatherMap and YouTube Data API. This application lets users search for real-time weather in any city, view a 5-slot forecast, watch related YouTube videos, see the location on Google Maps, and manage search history with full CRUD support. Features include real-time weather data, YouTube video suggestions, Google Maps integration, SQLite-backed search history, and data export to CSV/JSON formats.",
      techStack: ["Flask", "SQLite", "OpenWeather API", "YouTube API", "Google Maps API", "Python"],
      githubLink: "https://github.com/m-pilli/weather-app"
    },
    {
      title: "Simulation of Fast Ethernet Communication",
      description: "Developed a C-based client-server application to simulate Fast Ethernet using UNIX sockets and TCP, supporting up to ten concurrent station processes and a central communication switch. Designed dynamic input files for frame transmission and routing, and generated comprehensive logs to validate successful communication across distributed UNIX machines in a Linux lab environment. Demonstrated proficiency in socket programming, network simulation, and managing concurrent processes.",
      techStack: ["C", "UNIX Sockets", "TCP/IP", "Linux"],
      githubLink: "https://github.com/m-pilli/TCP-Based-Email-Service-Simulation"
    },
    {
      title: "E-Commerce Website with Multi-Department Integration",
      description: "Developed a dynamic department store website as part of a coursework project, implementing multiple departments. Displayed products with key details such as price, customer ratings, availability, and shipping options, allowing users to filter products by brand, price range, and ratings. Integrated a customer account system that stores purchase history, shipping address, and default payment methods, enabling users to log in and check out efficiently.",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/m-pilli/E-Commerce-Website-with-Multi-Department-Integration"
    },
    {
      title: "Visually Impaired Shopping Assistant",
      description: "Developed a cross-platform mobile application that assists visually impaired users in grocery shopping through real-time object recognition and voice guidance. Integrated Google Cloud Vision API for product detection and built an accessible, user-friendly interface.",
      techStack: ["Android", "TensorFlow Lite", "Google Cloud Vision"],
      githubLink: "https://github.com/m-pilli/Assistive-Object-Recognition-for-the-Visually-Impaired"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const techStackVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const techItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-content">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          Notable Projects
        </motion.h2>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
            >
              <motion.div 
                className="project-header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3>{project.title}</h3>
                <motion.a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="github-link"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.3 }
                  }}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </motion.a>
              </motion.div>
              
              <motion.p 
                className="project-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {project.description}
              </motion.p>
              
              <motion.div 
                className="tech-stack"
                variants={techStackVariants}
              >
                {project.techStack.map((tech) => (
                  <motion.span 
                    key={tech} 
                    className="tech-tag"
                    variants={techItemVariants}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 