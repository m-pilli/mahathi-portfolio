import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAws, 
  faGoogle, 
  faSalesforce 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faCloud,
  faShieldAlt,
  faChartLine,
  faDatabase,
  faCertificate,
  faCode,
  faExternalLink
} from '@fortawesome/free-solid-svg-icons';
import './Certifications.scss';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      organization: "Amazon Web Services",
      icon: faAws,
      category: "Cloud Computing",
      credentialLink: "https://www.credly.com/badges/612aa6ea-9d8f-4153-9470-36465cc89770/public_url"
    },
    {
      title: "Google Cloud Certification",
      organization: "Google Cloud",
      specialization: "AI, ML and Cloud Engineering",
      icon: faGoogle,
      category: "Cloud & AI",
      credentialLink: "https://www.cloudskillsboost.google/public_profiles/095b373f-47b9-4484-8fdf-83a90d3ad6d2"
    },
    {
      title: "Software Engineering Job Simulation",
      organization: "JPMorgan Chase & Co.",
      icon: faCode,
      category: "Professional Development",
      credentialLink: "https://drive.google.com/file/d/1zaa_LD0TMpT_hOcz7puwlGtac62od3q2/view"
    },
    {
      title: "30 Days Cloud Challenge",
      organization: "Google Cloud",
      description: "Hands-on training in cloud computing fundamentals and Google Cloud tools",
      icon: faCloud,
      category: "Cloud Computing",
      credentialLink: "https://drive.google.com/file/d/1F23ln1Z_ul-X67M67uoUKu00272auqDa/view?usp=drivesdk"
    },
    {
      title: "Database Programming with SQL",
      organization: "Oracle",
      icon: faDatabase,
      category: "Database",
      credentialLink: "https://drive.google.com/file/d/1zcalxpFK-FsgSNl4zi5N2AKAeUBb5c88/view"
    },
    {
      title: "Salesforce Specialist Certifications",
      organization: "Salesforce",
      icon: faSalesforce,
      specializations: [
        {
          name: "Security Specialist",
          icon: faShieldAlt
        },
        {
          name: "Lightning Reports & Dashboards Specialist",
          icon: faChartLine
        },
        {
          name: "Business Administration Specialist",
          icon: faCertificate
        }
      ],
      category: "CRM & Business",
      credentialLink: "https://www.salesforce.com/trailblazer/mahathipilli"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-content">
        <motion.h2 
          className="section-title"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition}
        >
          Certifications and Activities
        </motion.h2>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="certification-card"
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ ...fadeInUp.transition, delay: 0.1 * index }}
            >
              <div className="certification-header">
                <FontAwesomeIcon icon={cert.icon} className="cert-icon" />
                <h3>{cert.title}</h3>
                {cert.credentialLink && (
                  <a 
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="credential-link"
                    title="View Credential"
                  >
                    <FontAwesomeIcon icon={faExternalLink} />
                  </a>
                )}
              </div>
              
              <div className="certification-details">
                <p className="organization">{cert.organization}</p>
                {cert.specialization && (
                  <p className="specialization">{cert.specialization}</p>
                )}
                {cert.description && (
                  <p className="description">{cert.description}</p>
                )}
                {cert.specializations && (
                  <div className="sub-certifications">
                    {cert.specializations.map((spec) => (
                      <div key={spec.name} className="sub-cert">
                        <FontAwesomeIcon icon={spec.icon} className="sub-cert-icon" />
                        <span>{spec.name}</span>
                      </div>
                    ))}
                  </div>
                )}
                <span className="category-tag">{cert.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 