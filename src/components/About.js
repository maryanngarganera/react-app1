import React from "react";
import TeamMember from "./TeamMember";


import DuriaImg from '../assets/images/Duria.jpg';
import DuranImg from '../assets/images/Duran.jpg';
import EllasusImg from '../assets/images/Ellasus.jpg';
import GarganeraImg from '../assets/images/Garganera.jpg';
import EscarezImg from '../assets/images/Escarez.jpg';
import DelgadoImg from '../assets/images/Delgado.jpg';
import GabiImg from '../assets/images/Gabi.jpg';


const About = () => {
  const team = [
    { 
      name: "Jeffry Duria", 
      role: "Team Leader & Full Stack Developer", 
      description: "Coordinates the group project and works on both frontend and backend features using React and Node.js.",
      image: DuriaImg 
    },
    { 
      name: "Princes Duran", 
      role: "Frontend Developer", 
      description: "Focuses on building the user interface and styling the React components.",
      image: DuranImg 
    },
    { 
      name: "Lemuel John Ellasus", 
      role: "Backend Developer", 
      description: "Handles the server logic, APIs, and connects the React frontend with the backend services.",
      image: EllasusImg
    },
    { 
      name: "Mary Ann Garganera", 
      role: "UI/UX Designer", 
      description: "Designs wireframes and ensures the React pages are user-friendly and visually consistent.",
      image: GarganeraImg
    },
    { 
      name: "Kurt Escarez", 
      role: "DevOps Engineer", 
      description: "Sets up the development environment, manages builds, and deploys the React project.",
      image: EscarezImg
    },
    { 
      name: "Charles Delgado", 
      role: "QA Tester", 
      description: "Tests the React app for bugs, checks functionality, and reports issues to the team.",
      image: DelgadoImg
    },
    { 
      name: "Cedric Gabi", 
      role: "Project Manager", 
      description: "Organizes the workflow, assigns React tasks, and makes sure deadlines are met.",
      image: GabiImg
    }
  ];

   return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p
          className="lead text-center"
          style={{
            color: "var(--text-gray)",
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          We are a dedicated team working together on a group project, each
          taking on specific roles to build a React application.
        </p>

        <div className="row justify-content-center mt-5">
          {team.map((member, i) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={i}>
              <TeamMember {...member} />
            </div>
          ))}
        </div>

        <div className="row mt-5 align-items-center">
          {/* Our Mission */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="about-card h-100">
              <div className="d-flex align-items-center mb-3">
                <h3 className="mb-0">Our Mission</h3>
              </div>
              <p>
                Our mission is to collaborate effectively, enhance our skills in
                modern web development, and deliver impactful applications that
                solve real-world problems. We aim to learn, grow, and innovate
                together as a strong development team.
              </p>
            </div>
          </div>

          {/* Our Teams */}
          <div className="col-md-6">
            <div className="about-card h-100">
              <div className="d-flex align-items-center mb-3">
                <h3 className="mb-0">Our Teams</h3>
              </div>
              <p>
                Our team is composed of individuals with unique strengths: leaders,
                developers, designers, testers, and project managers. Each member
                contributes to the success of our project by applying their
                expertise and working in synergy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;