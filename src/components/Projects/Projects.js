import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import amacrux from "../../Assets/Projects/amacrux.png";
import huawei from "../../Assets/Projects/huawei.png";
import exchange from "../../Assets/Projects/exchange.png";
import amberes from "../../Assets/Projects/amberes.png";
import nomina from "../../Assets/Projects/nomina.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exchange}
              isBlog={false}
              title="Exchange"
              description="It is an exchange adapted to the needs of Venezuela, where calculations are performed based on order types. The system includes logic for privilege assignment and audits, built with Angular version 19, using Material-UI for the frontend, and Node.js for the backend."
              ghLink="https://github.com/mgalejandra/FBOJ"
              demoLink="https://jmw-bo.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nomina}
              isBlog={false}
              title="Payroll system"
              description="Payroll migration project from Oracle Forms to Angular version 17 with NG Prime for the frontend. The backend was developed using Java Spring Boot, and PostgreSQL was used as the database. Scrum methodology was implemented with Jira for project planning, and continuous deployment was managed through Jenkins."
              //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.infocent-latam.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={huawei}
              isBlog={false}
              title="Oracle Database Analyst"
              description="worked with an outsourcing company for Telefónica Venezuela as an Oracle Database Analyst"
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://e.huawei.com/es/"              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amberes}
              isBlog={false}
              title="Exchange venezuela"
              description="Exchange in Venezuela that allows swapping Bolivars for Bitcoin or Petros. It was developed using React with Bootstrap for the frontend, and Node.js with a database in Redis, Blockchain, and PostgreSQL for the backend. The deployment was done using Docker."
              //ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amacrux}
              isBlog={false}
              title="Swap"
              description="Cryptocurrency swap platform. The frontend was developed using React and Material-UI, while the backend was built with Node.js, utilizing Binance APIs. Additionally, Solidity was used to create a custom token."
              ghLink="https://github.com/Amacruxcompany/Amacrux-LandingPage"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
