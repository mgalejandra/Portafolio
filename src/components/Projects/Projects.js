import React, { useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { PROJECTS } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";
import amacrux from "../../Assets/Projects/amacrux.png";
import exchange from "../../Assets/Projects/exchange.png";
import amberes from "../../Assets/Projects/amberes.png";
import nomina from "../../Assets/Projects/nomina.png";
import pos from "../../Assets/Projects/pos.png";
import hoteles from "../../Assets/Projects/hoteles.png";
import kloudia from "../../Assets/Projects/kloudia.png";
import intranet from "../../Assets/Projects/intranet.png";
import clinicas from "../../Assets/Projects/clinicas.png";
import helpdesk from "../../Assets/Projects/helpdesk.png";

// Map project image paths
const projectImages = {
  exchange,
  nomina,
  amberes,
  amacrux,
  pos,
  hoteles,
  kloudia,
  intranet,
  clinicas,
  helpdesk,
};

/**
 * Projects component displaying portfolio projects
 * @component
 */
function Projects() {
  const { t } = useLanguage();

  const projectList = useMemo(
    () =>
      PROJECTS.map((project) => {
        const card = t.projectsCards?.[project.projectKey];
        const img = projectImages[project.imgPath];
        return {
          ...project,
          imgPath: img || projectImages.exchange,
          title: card?.title ?? project.projectKey ?? "",
          description: card?.description ?? "",
          technologies: card?.technologies ?? [],
        };
      }),
    [t]
  );

  const filtered = projectList;

  return (
    <Container fluid className="project-section" aria-label="Projects section">
      <Particle />
          <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
            <h1 id="mis-trabajos-recientes" className="project-heading">
              {t.projects.heading} <strong className="purple">{t.projects.works}</strong>
            </h1>
              <p className="project-subheading">{t.projects.subheading}</p>
        </motion.div>

            {/* Filters removed by request */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px", alignItems: "stretch" }}>
              {filtered.map((project) => (
            <Col key={project.id} md={4} className="project-card">
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                technologies={project.technologies}
              />
          </Col>
          ))}
        </Row>
            {/* No empty state needed without filters */}
      </Container>
    </Container>
  );
}

export default React.memo(Projects);
