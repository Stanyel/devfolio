module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
        siteURL: 'https://stangalloway.io/',
    // Your Name
    name: 'Stanley Galloway',
    // Main Site Title
    title: `Stanley Galloway | EE Undergrad | University of Pittsburgh`,
    // Description that goes under your name in main bio
    description: `Electrical Engineering Undergrad at the University of Pittsburgh | SNG34@pitt.edu`,
    // Optional: Twitter account handle
   //    author: `@lolnah`,
    // Optional: Github account URL
    // Optional: LinkedIn account URL
        linkedin: `https://www.linkedin.com/in/stanley-galloway/`,

    // Content of the About Me section
        about: 'Hello! Thank you for visiting my website. I am an electrical engineer interested in hardware design and robotics.\
                In the Projects section, you can see a portfolio of some of my personal work. In experience, you can find work I have done for various companies/organizations',
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
            name: "Raspberry Pi GPIO Protection Hat",
            description: 'In fast-paced environments where wires are exposed and rerouted frequently, shorting two pins and frying the whole Pi is inevitable and with their\
                          rising price, is becoming a very costly mistake. This board was created to solve this problem',
            link: 'http://stangalloway.com/blog/GPIOProt',
       },
      {
        name: 'WheelTrak',
        description: 'A small and low power board designed to be the fitbit of wheelchairs',
        link: 'http://stangalloway.com/blog/Wheeltrak/',
      },
      //{
      //  name: 'ECG Signal Recovery Timer',
      //  description:'',
      //    link: 'http://stangalloway.com/blog/ECGRT/',
        //},
        //{
        //    name: "Remote Falloff ECG Fixture",
        //    description: '',
        //    link: 'http://stangalloway.com/blog/RemoteFalloff/',
        //},
      {
          name: 'SailBot: Hurry Up',
          description: "SailBot's 2nd Boat - My main contribution is the design and fabrication of the motherboard and BMS",
          link: 'http://stangalloway.com/blog/ECGRT/',
      },
      {
        name: 'SailBot: Ship Happens',
          description: "SailBot's 1st Boat",
          link: 'http://stangalloway.com/blog/ShipHappens/',
        },
        //{
        //    name: 'PCB Portfolio',
        //    description: 'A comprehensive list of all my design experience',
        //    link: 'http://stangalloway.com/blog/Atten/',
        //},

    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
        experience: [

        {
        name: 'Electrical Engineering Intern',
        description: 'Gecko Robotics | Summer 2022',
        link: 'https://www.geckorobotics.com/',
        duty: 'Worked alongside the electronics hardware team doing R&D on a wall climbing inspection robot. Led design and release of an upgrade for legacy robots to improve reliability through forward compatibility with both firmware and hardware.',
        bullets: 'Legacy robot upgrades extended the lifetime of the robot fleet past their anticipated extinction by eliminating their most prominent failure mode and dependence on unreliable hardware.',
        bullets2: 'To implement this upgrade I created an interface board to translate serial communication protocol between sub-devices, wrote firmware to add dynamic bus allocation and to improve protobuf data reliability, then coordinated with multiple departments to plan a smooth bring up/execution',
        bullets3: 'Designed an SFP switching board to test an ethernet redundancy model for robot to ground communication. Design implemented high-speed differential pair routing and impedance matching at 4.5 Gbps ',
        bulletsCheck: 'please',
        },

        {
        name: 'Hardware Engineering Co-op',
        description: 'ZOLL Medical Corporation | Spring 2021 and Fall 2021',
        link: 'https://lifevest.zoll.com/',
        duty: 'Contributed to R&D behind an automated wearable cardioverter defibrillator created to protect patients at risk of sudden cardiac arrest',
        bullets: 'Wrote and ran system-wide compliance tests for a class 3 medical\
                  device in accordance with FDA standards and protocols',
        bullets2: 'Designed multiple PCBs to streamline testing and data\
                  collection of high-voltage critical system operations',
        bullets3: 'please',
        bulletsCheck: 'please',
        },
        {
        name: 'Undergraduate Student Researcher',
        description: 'University of Pittsburgh School of Health and Rehabilitation Sciences | Summer 2021',
        link: 'https://www.shrs.pitt.edu/',
        duty: 'Designed and programmed a wheelchair monitoring device to collect environmental data.',
        bullets: 'Controlled 3 peripheral sensors using an embedded MCU',
        bullets2: 'Optimized system for low-power consumption',
        bullets3: 'Programmed MCU with C++, interfaced on-board devices using I2C',
        bulletsCheck: 'please',
        },
        {
        name: 'Pitt SailBot',
        description: 'Founding President | February 2019 - Present',
        link: 'https://www.linkedin.com/company/pitt-sailbot',
        duty: 'President and founder of SailBot at Pitt, an organization where students design, code, and fabricate an autonomous sailboat to compete in the annual International Robotic Sailing Regatta.',
            bullets: 'Designed motherboard to interface the MCU, internal sensors, and power distribution via custom BMS. Also contributed to automation/localization software',
            bullets2: 'Placed 3rd at the 2022 International SailBot Competition',
            bullets3: 'Co-wrote proposal for university sponsorship, recruited faculty administrator, and defended a proposal to receive university accreditation as an intramural organization',
        bulletsCheck: 'please',
        },
        {
        name: 'Electrical Engineering Intern',
        description: 'Jacobs GPSC Rapid Solutions | Summer 2020',
        link: 'http://www.jacobs.com/',
        duty: 'Worked on a team designing, testing, and fabricating peripheral electronics for RF based hardware alongside professional Electrical Engineers',
        bullets: 'Designed and fabricated a PCB for testing an RF attenuator using Altium and PCB laser etching',
        bullets2: 'Tested peripheral components for an on-board LCD screen which managed power and data input via SPI',
        bullets3: 'please',
        bulletsCheck: 'please',
        },
        {
        name: 'Design Intern',
        description: 'Farr Yacht Design | Fall 2017',
        link: 'http://www.farrdesign.com/',
        duty: 'Developed computer models of yacht hulls and analyzed alternatives of industry rigging hardware to optimize performance',
        bullets:'please',
        bullets2:'please',
        bullets3:'please',
        bulletsCheck: 'please',
        }
        
    ],
    // Optional: List your skills, they must have `name` and `description`.
    //skills: [
    //  {
    //    name: 'Languages & Frameworks',
    //    description:
    //      'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
    //  },
    //  {
    //    name: 'Databases',
    //    description: 'MongoDB, PostreSQL, MySQL',
    //  },
    //  {
    //    name: 'Other',
    //    description:
    //      'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
    //  },
    //],
  },
    plugins: [

    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                `gatsby-remark-line-breaks`
            ]
        },
    },

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
