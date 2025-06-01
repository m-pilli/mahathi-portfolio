import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Hero.scss';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div>
            <h1>
              Hi, I'm{" "}
              <span className="highlight">
                Mahathi Pilli
              </span>
            </h1>
          </div>

          <div className="role-wrapper">
            <span className="role">
              Computer Science Graduate Student
            </span>
          </div>

          <div className="description">
            <p>
              Engineering cloud-native applications and intelligent systems with expertise in{' '}
              {['Python', 'Java', 'JavaScript', 'AI/ML frameworks'].map((tech, index) => (
                <span key={tech} className="highlight">
                  {tech}{index < 3 ? ', ' : ' '}
                </span>
              ))}
              <br />
              Skilled in{' '}
              {['backend architecture', 'scalable APIs', 'data-driven platforms'].map((skill, index) => (
                <span key={skill} className="highlight">
                  {skill}{index < 2 ? ', ' : ' '}
                </span>
              ))}
              and software engineering best practices.
              <br />
              Always exploring the intersection of data, code, and innovation to build what's next.
            </p>
          </div>

          <div className="contact-info">
            {[
              { href: "mailto:mahathipilli23@gmail.com", icon: faEnvelope, text: "mahathipilli23@gmail.com", isLocation: false },
              { href: "https://www.linkedin.com/in/m-pilli", icon: faLinkedin, text: "LinkedIn", isLocation: false },
              { icon: faLocationDot, text: "Texas, USA", isLocation: true }
            ].map((contact, index) => (
              <React.Fragment key={contact.text}>
                {index > 0 && <span className="separator">|</span>}
                {contact.isLocation ? (
                  <div className="location">
                    <FontAwesomeIcon icon={contact.icon} />
                    <span>{contact.text}</span>
                  </div>
                ) : (
                  <a
                    href={contact.href}
                    className="contact-link"
                    target={contact.href?.includes('http') ? "_blank" : undefined}
                    rel={contact.href?.includes('http') ? "noopener noreferrer" : undefined}
                  >
                    <FontAwesomeIcon icon={contact.icon} />
                    {contact.text}
                  </a>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="cta-buttons">
            <a href="#contact" className="primary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/profile.jpg" alt="Mahathi Pilli" className="profile-photo" />
        </div>
      </div>
    </section>
  );
};

export default Hero; 