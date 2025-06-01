import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {currentYear} Mahathi Pilli. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 