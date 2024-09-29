import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id="about" className="about-container">
      {/* About Me Section */}
      <h2 className="animate-on-scroll">About Me</h2>
      <div className="about-me animate-on-scroll">
        I’m Advaid Gireesan, a technology enthusiast with a focus on DevOps and Java API development. Throughout my career, I have
        worked on cutting-edge projects in cloud migration, automation, and deployment, helping businesses optimize their
        infrastructure. My expertise lies in designing robust solutions using Kubernetes, OpenShift, and Spring Boot, with a passion
        for tackling complex challenges head-on.
      </div>

      {/* Achievements Section */}
      <h2 id="achievements" className="animate-on-scroll">Achievements</h2>
      <div className="achievements animate-on-scroll">
        <ul>
          <li>Led a large-scale OpenShift Cloud Migration, transitioning critical applications seamlessly.</li>
          <li>Spearheaded automation projects using Helm and Argo Workflows, optimizing deployment and scaling processes.</li>
          <li>Innovation Award for implementing cutting-edge DevOps solutions.</li>
          <li>Excellence in Delivering Complex Engagements at Capgemini.</li>
          <li>Always Striving, Never Settling award for consistently exceeding project expectations.</li>
          <li>Customer Delight Award for outstanding client satisfaction and project delivery.</li>
        </ul>
      </div>

      {/* Certifications Section */}
      <h2 id="certifications" className="animate-on-scroll">Certifications</h2>
      <div className="certifications animate-on-scroll">
        <img src="/certifications/k8s.png" alt="Certified Kubernetes Application Developer" />
        <img src="/certifications/azure.png" alt="Azure Fundamentals" />
        <img src="/certifications/rpa.png" alt="RPA 10.4 Essentials" />
        <img src="/certifications/kta.png" alt="TotalAgility Cognitive Capture Essentials" />
        <img src="/certifications/gen-ai.png" alt="AWS Generative AI Essentials" />
      </div>
    </div>
  );
};

export default About;
