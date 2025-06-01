import ReactGA from 'react-ga4';

// Initialize GA4 with your measurement ID
export const initGA = () => {
  ReactGA.initialize('G-8WGP4HV8XJ');
};

// Track page views with UTM parameters
export const logPageView = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source');
  const utmMedium = urlParams.get('utm_medium');
  const utmCampaign = urlParams.get('utm_campaign');

  ReactGA.send({ 
    hitType: 'pageview', 
    page: window.location.pathname,
    source: utmSource || 'direct',
    medium: utmMedium || 'none',
    campaign: utmCampaign || 'none'
  });
};

// Track social media clicks
export const logSocialClick = (platform: string) => {
  ReactGA.event({
    category: 'Social',
    action: 'Click',
    label: platform
  });
};

// Track form submissions
export const logFormSubmission = (formName: string, status: 'success' | 'error') => {
  ReactGA.event({
    category: 'Form',
    action: 'Submit',
    label: `${formName} - ${status}`
  });
};

// Track project interactions
export const logProjectClick = (projectName: string) => {
  ReactGA.event({
    category: 'Project',
    action: 'Click',
    label: projectName
  });
};

// Track certification clicks
export const logCertificationClick = (certName: string) => {
  ReactGA.event({
    category: 'Certification',
    action: 'Click',
    label: certName
  });
};

// Track navigation
export const logNavigation = (section: string) => {
  ReactGA.event({
    category: 'Navigation',
    action: 'Click',
    label: section
  });
};

// Track theme changes
export const logThemeChange = (theme: string) => {
  ReactGA.event({
    category: 'Theme',
    action: 'Change',
    label: theme
  });
};

// Track document/resume downloads
export const logDownload = (documentName: string) => {
  ReactGA.event({
    category: 'Download',
    action: 'Click',
    label: documentName
  });
}; 