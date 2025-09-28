import React from "react";

const Home = () => {
  return (
    <section id="home">
      <div className="container text-center">
        <div className="hero-content">
          <h1>Welcome to Our React App</h1>
          <p>
            We are a passionate group of developers working together to create
            amazing web applications.
          </p>
          <a href="#about" className="btn btn-custom">
            About the Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;