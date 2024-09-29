import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <div className="projects-content">
        <h2 className="animate-on-scroll">Projects & Experience</h2>

        {/* Key Projects Section */}
        <h3 className="animate-on-scroll">Key Projects</h3>
        <div className="projects-grid animate-on-scroll">
          <div className="project-item">
            <div className="card-inner">
              <h4>OpenShift Cloud Migration</h4>
              <p>Led the migration of critical applications from Pivotal Cloud Foundry (PCF) to OpenShift, improving scalability and reducing downtime by 30%.</p>
            </div>
          </div>
          <div className="project-item">
            <div className="card-inner">
              <h4>Automation Framework</h4>
              <p>Developed custom Helm charts and implemented Argo Workflows, cutting deployment time by 50% and minimizing manual intervention.</p>
            </div>
          </div>
          <div className="project-item">
            <div className="card-inner">
              <h4>Conversational AI Solutions</h4>
              <p>Designed and implemented Rasa frameworks in Python for creating conversational AI tools, reducing customer support response time by 40%.</p>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <h3 className="animate-on-scroll">Work Experience</h3>
        <div className="experience-grid animate-on-scroll">
          <div className="experience-item">
            <div className="card-inner">
              <h4>DevOps Specialist at Capgemini</h4>
              <p>
                • Led automation initiatives with Helm and Argo Workflows, significantly improving operational efficiency.<br/>
                • Managed cloud migration projects and implemented CI/CD pipelines to optimize deployment processes.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="card-inner">
              <h4>Java API Developer at Cognizant</h4>
              <p>
                • Managed migration of applications from Pivotal Cloud Foundry to OpenShift.<br/>
                • Developed and maintained Java APIs for enterprise solutions, ensuring scalability and performance optimization.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="card-inner">
              <h4>Programmer Analyst at Cognizant</h4>
              <p>
                • Worked on developing backend solutions for large-scale enterprise applications.<br/>
                • Coordinated with cross-functional teams to integrate APIs into customer-facing solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
