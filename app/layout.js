import '../styles/globals.css';
import PropTypes from 'prop-types';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Boostio is an AI and Automation Agency helping businesses grow by leveraging the latest technologies, including LLMs, Agents, Sentiment Analysis, Automations, and Software Engineering." />
      <meta name="keywords" content="AI, Automation, LLMs, Agents, Sentiment Analysis, Software Engineering, Web Development, App Development" />
      <meta name="author" content="Boostio" />
      <meta property="og:title" content="Boostio - AI and Automation Agency" />
      <meta property="og:description" content="Boostio provides a wide range of services including LLMs, Agents, Sentiment Analysis, Automations, and Software Engineering to help businesses achieve their goals." />
      <meta property="og:image" content="/thumbnail.png" />
      <meta property="og:url" content="https://boostio.ai" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Boostio - AI and Automation Agency" />
      <meta name="twitter:description" content="Boostio offers services in AI and Automation to help businesses grow and scale using the latest technologies." />
      <meta name="twitter:image" content="/thumbnail.png" />

      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
    </head>
    <body>{children}</body>
  </html>
);
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
