// import { useState, useCallback } from "react";
// import "./styles/Work.css";
// import WorkImage from "./WorkImage";
// import { MdArrowBack, MdArrowForward } from "react-icons/md";

// const projects = [
//   {
//     title: "Solid Starters",
//     category: "Low-Code Platform",
//     tools: "Angular, Next.js, NestJS, MongoDB",
//     image: "/images/Solidx.png",
//   },
//   {
//     title: "Radix",
//     category: "E-Commerce",
//     tools: "Angular, Next.js, NestJS, CMS",
//     image: "/images/radix.png",
//   },
//   {
//     title: "Bond Cancellation",
//     category: "Import-Export Automation",
//     tools: "Angular, Next.js, NestJS, Workflows",
//     image: "/images/bond.png",
//   },
//   {
//     title: "Sapphire",
//     category: "CRM Platform",
//     tools: "AngularJS, NestJS, PostgreSQL",
//     image: "/images/sapphire.png",
//   },
//   {
//     title: "Mpro",
//     category: "Insurance Platform",
//     tools: "React.js, Node.js, Microservices",
//     image: "/images/Maxlife.png",
//   },
// ];

// const Work = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const goToSlide = useCallback(
//     (index: number) => {
//       if (isAnimating) return;
//       setIsAnimating(true);
//       setCurrentIndex(index);
//       setTimeout(() => setIsAnimating(false), 500);
//     },
//     [isAnimating]
//   );

//   const goToPrev = useCallback(() => {
//     const newIndex =
//       currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
//     goToSlide(newIndex);
//   }, [currentIndex, goToSlide]);

//   const goToNext = useCallback(() => {
//     const newIndex =
//       currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
//     goToSlide(newIndex);
//   }, [currentIndex, goToSlide]);

//   return (
//     <div className="work-section" id="work">
//       <div className="work-container section-container">
//         <h2>
//           My <span>Work</span>
//         </h2>

//         <div className="carousel-wrapper">
//           {/* Navigation Arrows */}
//           <button
//             className="carousel-arrow carousel-arrow-left"
//             onClick={goToPrev}
//             aria-label="Previous project"
//             data-cursor="disable"
//           >
//             <MdArrowBack />
//           </button>
//           <button
//             className="carousel-arrow carousel-arrow-right"
//             onClick={goToNext}
//             aria-label="Next project"
//             data-cursor="disable"
//           >
//             <MdArrowForward />
//           </button>

//           {/* Slides */}
//           <div className="carousel-track-container">
//             <div
//               className="carousel-track"
//               style={{
//                 transform: `translateX(-${currentIndex * 100}%)`,
//               }}
//             >
//               {projects.map((project, index) => (
//                 <div className="carousel-slide" key={index}>
//                   <div className="carousel-content">
//                     <div className="carousel-info">
//                       <div className="carousel-number">
//                         <h3>0{index + 1}</h3>
//                       </div>
//                       <div className="carousel-details">
//                         <h4>{project.title}</h4>
//                         <p className="carousel-category">
//                           {project.category}
//                         </p>
//                         <div className="carousel-tools">
//                           <span className="tools-label">Tools & Features</span>
//                           <p>{project.tools}</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="carousel-image-wrapper">
//                       <WorkImage image={project.image} alt={project.title} />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Dot Indicators */}
//           <div className="carousel-dots">
//             {projects.map((_, index) => (
//               <button
//                 key={index}
//                 className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
//                   }`}
//                 onClick={() => goToSlide(index)}
//                 aria-label={`Go to project ${index + 1}`}
//                 data-cursor="disable"
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;




import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { SiGithub, SiVercel } from "react-icons/si";

const projects = [
  {
    title: "BloodNeed",
    category: "Blood Management Platform",
    tools: "Next.js • Supabase • Shadcn • Tanstack • React-Leaflet",
    description: "Developed a platform connecting donors and hospitals with location-based donor discovery and interactive maps.",
    image: "/images/bloodneed.png",
    github: "https://github.com/RajatGhosh/bloodneed",
    vercel: "https://bloodneed.vercel.app",
  },
  {
    title: "Vidyasu",
    category: "Online Education Platform",
    tools: "React.js • Appwrite • MUI • Redux Toolkit • Zustand",
    description: "An online learning resource manager featuring full authentication, course management, and efficient state handling.",
    image: "/images/vidyasu.png",
    github: "https://github.com/RajatGhosh/vidyasu",
    vercel: "https://vidyasu.vercel.app", 
  },
  {
    title: "React & Next.js Journey",
    category: "Projects Collection",
    tools: "React.js • Next.js • TypeScript • Redux • Zustand • Supabase",
    description: "A collection of 9+ mini-projects practicing modern hooks, API integration, and various state management approaches.",
    image: "/images/react-next.png",
    github: "https://github.com/RajatGhosh/learning-journey",
    vercel: "", // GitHub only as per your list
  },
  {
    title: "AI Chatbot Web App",
    category: "Real-time AI Interaction",
    tools: "Next.js • Shadcn UI • TypeScript • AI Chat API",
    description: "A high-performance chatbot application featuring real-time AI API interaction and a modern, sleek UI.",
    image: "/images/aichat-bot.png",
    github: "https://github.com/RajatGhosh/ai-chatbot",
    vercel: "https://ai-chatbot-demo.vercel.app",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index === currentIndex) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating, currentIndex]
  );

  const goToPrev = () => goToSlide(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
  const goToNext = () => goToSlide(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2> My <span>Work</span> </h2>

        <div className="carousel-wrapper">
          <button className="carousel-arrow carousel-arrow-left" onClick={goToPrev} disabled={isAnimating}>
            <MdArrowBack />
          </button>
          <button className="carousel-arrow carousel-arrow-right" onClick={goToNext} disabled={isAnimating}>
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <p className="project-brief">{project.description}</p>
                        
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>

                        <div className="project-actions">
                          <a href={project.github} target="_blank" rel="noreferrer" className="action-link">
                            <SiGithub /> <span>GitHub</span>
                          </a>
                          {project.vercel && (
                            <a href={project.vercel} target="_blank" rel="noreferrer" className="action-link">
                              <SiVercel /> <span>Live Demo</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;