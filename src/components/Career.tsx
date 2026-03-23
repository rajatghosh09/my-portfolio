// import "./styles/Career.css";

// const Career = () => {
//   return (
//     <div className="career-section section-container">
//       <div className="career-container">
//         <h2>
//           My career <span>&</span>
//           <br /> experience
//         </h2>
//         <div className="career-info">
//           <div className="career-timeline">
//             <div className="career-dot"></div>
//           </div>
//           <div className="career-info-box">
//             <div className="career-info-in">
//               <div className="career-role">
//                 <h4>Full Stack Developer</h4>
//                 <h5>Ikshan</h5>
//               </div>
//               <h3>2020</h3>
//             </div>
//             <p>
//               Built 6+ complete applications using React.js. Integrated backend
//               authentication using Node.js & MongoDB. Created responsive UI/UX
//               and designed wireframes using Figma.
//             </p>
//           </div>
//           <div className="career-info-box">
//             <div className="career-info-in">
//               <div className="career-role">
//                 <h4>Senior Full Stack Developer</h4>
//                 <h5>Monocept (Max Life Insurance)</h5>
//               </div>
//               <h3>2021</h3>
//             </div>
//             <p>
//               Led two development teams on Mpro, a large-scale insurance
//               operations platform. Developed multiple modules using React.js &
//               migrated critical functionalities to Node.js microservices.
//             </p>
//           </div>
//           <div className="career-info-box">
//             <div className="career-info-in">
//               <div className="career-role">
//                 <h4>Full Stack Developer</h4>
//                 <h5>Logic Loop</h5>
//               </div>
//               <h3>NOW</h3>
//             </div>
//             <p>
//               Building Solid, a proprietary low-code platform using Angular,
//               Next.js & NestJS. Delivering production-ready CMS-based projects
//               including e-commerce, CRM, and import-export automation systems.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Career;



import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> education
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Development Training</h4>
                <h5>Webskitters Academy</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Learned HTML, Advanced JavaScript, React.js, and Next.js.
              Built modern responsive web applications and improved UI/UX skills.
            </p>
          </div>
          {/* 🎓 MCA */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Computer Applications (MCA)</h4>
                <h5>Techno International New Town</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>CGPA: 8.58</p>
          </div>

          {/* 🎓 BCA */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications (BCA)</h4>
                <h5>Eminent College of Management and Technology</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>CGPA: 7.11</p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Career;