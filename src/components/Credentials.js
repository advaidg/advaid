import React, { useState } from 'react'; // Import useState from React
import './Credentials.css';

const Credentials = () => {
  const skillsLogos = [
    { name: 'Jenkins', src: '/skills/jenkins.png' },
    { name: 'SonarQube', src: '/skills/sq.png' },
    { name: 'Helm', src: '/skills/helm.png' },
    { name: 'Datadog', src: '/skills/datadog.png' },
    { name: 'Kubernetes', src: '/skills/k8s.png' },
    { name: 'OpenShift', src: '/skills/ocp.png' },
    { name: 'PCF', src: '/skills/pcf.png' },
    { name: 'Java', src: '/skills/java.png' },
    { name: 'Python', src: '/skills/python.png' },
    { name: 'Instana', src: '/skills/instana.png' },
    { name: 'JFrog', src: '/skills/jfrog.png' },
    { name: 'Helm', src: '/skills/helm.png' },
    { name: 'Argo', src: '/skills/argo.png' },
    { name: 'Vault', src: '/skills/vault.png' },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = (e) => {
    if (e.target.classList.contains('modal')) {
      setIsModalOpen(false);
    }
  };

  const displayedLogos = skillsLogos.slice(0, 8); // Limit to 8 items (3 rows and 1 View More)

  return (
    <div id="credentials" className="credentials-container">
      <h1 className="animate-on-scroll">Credentials</h1>

      <div className="main-content">
        {/* Logos Section */}
        <div className="skills-logos animate-on-scroll">
          {displayedLogos.map((logo, index) => (
            <div key={index} className="logo-container">
              <img src={logo.src} alt={`${logo.name} logo`} className="skill-logo" />
              <p>{logo.name}</p>
            </div>
          ))}
          {/* View More Button */}
          <div className="logo-container view-more" onClick={() => setIsModalOpen(true)}>
            <p>View More</p>
          </div>
        </div>

        {/* Education and Skills Section */}
        <div className="credentials-content">
          <div className="education animate-on-scroll">
            <h3>Education</h3>
            <p>
              Bachelor of Technology (BTech),
              <br />
              TKM College of Engineering,
              <br />
              (2016–2020)
            </p>
          </div>

          <div className="skills animate-on-scroll">
            <h3>Skills</h3>
            <ul>
              <li>DevOps Tools: Jenkins, SonarQube, Helm, NexusIQ, Datadog</li>
              <li>Cloud Platforms: Kubernetes, OpenShift, Pivotal Cloud Foundry (PCF)</li>
              <li>Programming Languages: Java (Spring Boot), Python</li>
              <li>Automation & Orchestration: Helm Charts, Argo Workflows, Blue-Green and Canary Deployments</li>
              <li>Security Integration: SNOW Data Security API, Vault</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal for displaying all logos */}
      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
            <div className="full-skills-logos">
              {skillsLogos.map((logo, index) => (
                <div key={index} className="logo-container">
                  <img src={logo.src} alt={`${logo.name} logo`} className="skill-logo" />
                  <p>{logo.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Credentials;