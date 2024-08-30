/* eslint-disable no-unused-vars */
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";


export const HERO_CONTENT = `I am a passionate and results-driven Front-End Developer specializing in React.js. My commitment to creating intuitive and engaging user interfaces drives me to continuously learn and adopt the latest web technologies and best practices. I have honed my skills in modern JavaScript, HTML5, and CSS3. My expertise lies in creating seamless user interfaces, optimizing performance, and implementing efficient state management solutions. I thrive in dynamic environments and am dedicated to delivering high-quality digital experiences.`;

export const ABOUT_TEXT = `I have been working as a software engineer at Infogain for two years, where I am having the opportunity to collaborate with one of the company's prestigious clients, Mitchell, in the insurance domain. This invaluable experience allowed me to apply my technical skills to develop innovative solutions tailored to the specific needs of the insurance industry. During my tenure, I took on key responsibilities in project planning, development, and implementation, which honed my problem-solving abilities and attention to detail. Additionally, I expanded my expertise by mastering HTML, CSS, JavaScript and React significantly enhancing both my professional growth and the client's operational efficiency and effectiveness. This role not only enriched my technical acumen but also broadened my overall understanding of the tech industry's diverse demands and challenges, positioning me as a versatile and knowledgeable professional.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Software Engineer",
    company: "Infogain",
    description: [
      "Excelling as a top-tier React developer in collaboration with Mitchell, an elite client in the insurance industry.",
      "Developing a dashboard application using Next.js, and Axios to provide users with real-time updates on their health insurance claims, reducing claim inquiry response time by 25% and increasing user engagement by 20%.",
      "Spearheading the development of a file comparison tool that dramatically optimized the client’s workflow, slashing processing time by an astounding 40%.",
      "Orchestrated a seamless collaboration with a team of 5 experts to refine the UI using React and Tailwind CSS, resulting in a 30% increase in user satisfaction. Received the Employee of the Month award.",
      "Instrumental in the development of the test runner tool’s UI, automating the execution of over 100 test cases with 95% accuracy.",
      "Utilized rigorous testing methodologies to identify and document over 200 software defects, significantly improving application quality.",
      "Delivered impactful presentations and demos to 30+ stakeholders, fostering transparency and collaboration.",
      "Achieved Microsoft Azure AZ-900 certification, demonstrating proficiency in cloud fundamentals."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js","Axios","Tailwind CSS", "React Router", "Component-based architecture", "Code Quality"],
  },
];


export const PROJECTS = [
  {
    title: "Cine Breeze",
    image: project1,
    description:
      "Developed a dynamic and responsive movie-related web application using React and Redux for state management. The application fetches movie data from various categories such as now playing, popular, and top-rated movies using REST APIs. It incorporates advanced UI styling with Tailwind CSS and ensures seamless navigation with React Router. Implemented lazy loading for optimized performance using React Suspense. Integrated the GPT-3.5 API for enhanced AI-driven features.",
    hostedLink:"https://cinebreeze1-9222a.web.app/",
    technologies: ["React", "Redux", "Tailwind CSS", "React Router", "React Suspense", "REST API", "GPT-3.5 API", "Git"],
  },
  {
    title: "CheckupMate",
    image: project2,
    description:
      "Developed Check Up Mate, a responsive web application for health assessments using React. Implemented BMI, BMR, Body Fat Percentage, Blood Pressure Monitoring, Heart Rate Monitoring, and Sleep Quality tests. Integrated OpenAPI for AI-driven health suggestions, enhancing user engagement and personalization. Utilized React Router for seamless navigation and Tailwind CSS for efficient styling. Check Up Mate demonstrates expertise in front-end development, UI/UX design, and leveraging AI for personalized health insights.",
    hostedLink: "https://checkupmate.netlify.app/",
    technologies: ["React", "Tailwind CSS ", "React Router", "GPT-3.5 API", "Git"],
  },
];

export const CONTACT = {
  phoneNo: "+91 8005184230",
  email: "karanvig35@gmail.com",
};
