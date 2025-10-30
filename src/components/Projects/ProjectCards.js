import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { motion } from "framer-motion";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import SmartImage from "../common/SmartImage";

/**
 * Project card component to display project information
 * @param {Object} props - Component props
 * @param {string} props.imgPath - Path to project image
 * @param {string} props.title - Project title
 * @param {string} props.description - Project description
 * @param {string} [props.ghLink] - GitHub repository link
 * @param {string} [props.demoLink] - Demo/live project link
 * @param {boolean} [props.isBlog] - Whether the project is a blog
 * @param {Array} [props.technologies] - Array of technologies used
 * @component
 */
function ProjectCards(props) {
  const { imgPath, title, description, ghLink, demoLink, isBlog, technologies } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <Card className="project-card-view">
        <div className="project-image-container">
              <SmartImage
                src={imgPath}
                alt={`${title} project screenshot`}
                className="project-image"
              />
          <div className="project-overlay">
            {ghLink && (
              <motion.a
                href={ghLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-overlay-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`View ${title} on GitHub`}
              >
                <BsGithub />
              </motion.a>
            )}
            {!isBlog && demoLink && (
              <motion.a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-overlay-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`View ${title} live demo`}
              >
                <CgWebsite />
              </motion.a>
            )}
          </div>
        </div>
        <Card.Body className="project-card-body">
          <Card.Title as="h3" className="project-title">{title}</Card.Title>
          <Card.Text className="project-description">
            {description}
          </Card.Text>
          
          {technologies && technologies.length > 0 && (
            <div className="project-technologies">
              {technologies.slice(0, 4).map((tech, index) => (
                <Badge key={index} bg="secondary" className="tech-badge">
                  {tech}
                </Badge>
              ))}
              {technologies.length > 4 && (
                <Badge bg="secondary" className="tech-badge">
                  +{technologies.length - 4}
                </Badge>
              )}
            </div>
          )}

          <div className="project-buttons">
            {ghLink && (
              <Button 
                variant="primary" 
                href={ghLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
                aria-label={`View ${title} on GitHub`}
              >
                <BsGithub aria-hidden="true" /> &nbsp;
                {isBlog ? "Blog" : "GitHub"}
              </Button>
            )}
            {!isBlog && demoLink && (
              <Button
                variant="primary"
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn project-btn-demo"
                aria-label={`View ${title} live demo`}
              >
                <CgWebsite aria-hidden="true" /> &nbsp;
                Demo
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default React.memo(ProjectCards);
