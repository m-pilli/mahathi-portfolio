import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPython, faJava, faJs, faNodeJs, faAws, faDocker, faGithub,
  faHtml5, faCss3Alt, faLinux, faJenkins
} from '@fortawesome/free-brands-svg-icons';
import { 
  faDatabase, faCloud, faCode, faBrain, faServer, faGears,
  faTerminal, faTools, faLaptopCode, faMicrochip, faRobot
} from '@fortawesome/free-solid-svg-icons';
import './Skills.scss';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: faPython, color: "#3776AB" },
        { name: "Go", icon: faCode, color: "#00ADD8" },
        { name: "Java", icon: faJava, color: "#007396" },
        { name: "C++", icon: faCode, color: "#00599C" },
        { name: "C", icon: faCode, color: "#A8B9CC" },
        { name: "Bash", icon: faTerminal, color: "#4EAA25" },
        { name: "SQL", icon: faDatabase, color: "#336791" }
      ]
    },
    {
      title: "Backend & Web",
      skills: [
        { name: "Node.js", icon: faNodeJs, color: "#339933" },
        { name: "Express.js", icon: faServer, color: "#000000" },
        { name: "Django", icon: faCode, color: "#092E20" },
        { name: "Flask", icon: faCode, color: "#000000" },
        { name: "REST APIs", icon: faServer, color: "#38B2AC" },
        { name: "HTML5", icon: faHtml5, color: "#E34F26" },
        { name: "CSS3", icon: faCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: faJs, color: "#F7DF1E" }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: faAws, color: "#FF9900" },
        { name: "GCP", icon: faCloud, color: "#4285F4" },
        { name: "Docker", icon: faDocker, color: "#2496ED" },
        { name: "Kubernetes", icon: faGears, color: "#326CE5" },
        { name: "Jenkins", icon: faJenkins, color: "#D24939" },
        { name: "CI/CD", icon: faCode, color: "#41CD52" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", icon: faDatabase, color: "#336791" },
        { name: "MySQL", icon: faDatabase, color: "#4479A1" },
        { name: "Oracle", icon: faDatabase, color: "#F80000" },
        { name: "MongoDB", icon: faDatabase, color: "#47A248" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: faGithub, color: "#F05032" },
        { name: "VS Code", icon: faCode, color: "#007ACC" },
        { name: "PyCharm", icon: faLaptopCode, color: "#21D789" },
        { name: "IntelliJ", icon: faLaptopCode, color: "#000000" },
        { name: "Jupyter", icon: faCode, color: "#F37626" },
        { name: "Jira", icon: faTools, color: "#0052CC" },
        { name: "Linux", icon: faLinux, color: "#FCC624" }
      ]
    },
    {
      title: "ML & AI",
      skills: [
        { name: "TensorFlow", icon: faBrain, color: "#FF6F00" },
        { name: "Keras", icon: faBrain, color: "#D00000" },
        { name: "scikit-learn", icon: faBrain, color: "#F7931E" },
        { name: "OpenCV", icon: faRobot, color: "#5C3EE8" },
        { name: "NumPy", icon: faMicrochip, color: "#013243" },
        { name: "GitHub Copilot", icon: faRobot, color: "#000000" },
        { name: "ChatGPT", icon: faRobot, color: "#74AA9C" }
      ]
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <motion.h2 
          className="section-title"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition}
        >
          Skills & Technologies
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ ...fadeInUp.transition, delay: 0.1 * categoryIndex }}
            >
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * skillIndex }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <motion.div 
                      className="skill-icon" 
                      style={{ color: skill.color }}
                      animate={{ 
                        y: [0, -4, 0],
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={skill.icon} />
                    </motion.div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 