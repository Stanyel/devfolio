module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Stanley Galloway',
    // Main Site Title
    title: `Stanley Galloway | EE Undergrad · University of Pittsburgh`,
    // Description that goes under your name in main bio
    description: `About me`,
    // Optional: Twitter account handle
   //    author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/ryanfitzgerald`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/ryanafitzgerald/`,
    // Content of the About Me section
    about: 'More about me',
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Devfolio',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'ChromeExtensionKit',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Hardware Engineering Co-op',
        description: 'ZOLL Medical Corportation | Spring 2021 and Fall 2021',
        link: 'not yet :)',
        duty: 'Contributed to R&D behind an automated, wearable cardioverter defibrillator created to protect patients at risk of sudden cardiac arrest',
      },
      {
        name: 'Undergraduate Student Researcher',
        description: 'University of Pittsburgh School of Heath and Rehabilitation Sciences | Summer 2021',
        link: 'https://github.com/RyanFitzgerald/devfolio',
        duty: 'Designed and programmed a wheel chair monitoring device to collect environmental data. Additional focus on implementing an embedded, programmable MCU and low-power optimization',

      },
      {
        name: 'Pitt SailBot',
        description: 'Founding President | February 2019 - Present',
        link: 'https://github.com/RyanFitzgerald/devfolio',
        duty: 'Fouding President of Pitt SailBot, an organization where students design, code, and fabricate an autonomous sailboat to compete in the annual International Robotic Sailing Regatta.',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
    plugins: [

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
        },
    },
  ],
};
