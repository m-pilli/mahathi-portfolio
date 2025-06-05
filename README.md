# Mahathi's Portfolio

A modern, responsive portfolio website built with React, showcasing my professional experience, projects, and skills.

## Features

- Modern UI with smooth animations
- Responsive design
- Dark/Light theme
- Contact form integration
- Analytics tracking
- Interactive sections for Experience, Projects, Skills, and more

## Technologies Used

- React
- TypeScript
- SASS
- Framer Motion
- EmailJS
- Google Analytics
- React Icons

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/m-pilli/mahathi-portfolio.git
cd mahathi-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
- Copy `.env.example` to `.env`
- Fill in your API keys and credentials:
  - EmailJS credentials (for contact form)
  - Google Analytics measurement ID

4. Start the development server:
```bash
npm start
```

The app will be available at `http://localhost:3000`

## Environment Variables

The following environment variables are required:

```env
REACT_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
REACT_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
REACT_APP_GA_MEASUREMENT_ID=your_ga_measurement_id
```

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `build` directory.

## Contact

For any queries or suggestions, please reach out through:
- Email: mahathipilli23@gmail.com
- LinkedIn: https://linkedin.com/in/m-pilli
- GitHub: https://github.com/m-pilli
