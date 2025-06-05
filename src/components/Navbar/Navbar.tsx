import React, { useState, useEffect } from '../../utils/reactImports';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Typewriter from 'typewriter-effect';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { logNavigation } from '../../utils/analytics';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (section: string) => {
    logNavigation(section);
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Activities', to: 'activities' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <motion.div
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="home" 
            smooth={true} 
            duration={500}
            onClick={() => handleNavClick('home')}
          >
            <div className="logo-content">
              <span className="name">Mahathi Pilli</span>
              <div className="role-text">
                <span>-</span>
                <Typewriter
                  options={{
                    strings: [
                      'Software Engineer',
                      'Web Developer',
                      'Cloud Developer',
                      'Python Developer',
                      'ML Engineer',
                      'Full Stack Developer',
                      'Data Engineer',
                      'Backend Engineer',
                      'API Developer',
                      'DevOps Engineer',
                      'Java Developer'
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 50,
                    skipAddStyles: true,
                  }}
                />
              </div>
            </div>
          </Link>
        </motion.div>

        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>

        <motion.ul
          className={`nav-links ${isOpen ? 'active' : ''}`}
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
        >
          {navItems.map((item) => (
            <motion.li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                onClick={() => handleNavClick(item.to)}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
          <motion.li>
            <ThemeToggle />
          </motion.li>
        </motion.ul>
      </div>
    </nav>
  );
};

export default Navbar; 