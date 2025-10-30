import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.svg";
import Toolstack from "./Toolstack";
import { useLanguage } from "../../context/LanguageContext";
import SmartImage from "../common/SmartImage";

/**
 * About component - Information about the developer and skills
 * @component
 */
function About() {
  const { t } = useLanguage();
  return (
    <Container fluid className="about-section" aria-label="About section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {t.about.topStart} <strong className="purple">{t.about.topStrong}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "30px", paddingBottom: "50px" }}
            className="about-img"
          >
            <SmartImage 
              src={laptopImg} 
              alt="About Alejandra González - Developer illustration" 
              className="img-fluid"
              width="400"
              height="400"
            />
          </Col>
        </Row>
            <h1 className="project-heading">
              {t.about.skillsetHeading} <strong className="purple">{t.about.skillsetStrong}</strong>
            </h1>

        <Techstack />

            <h1 className="project-heading">
              <strong className="purple">{t.about.toolsStart}</strong> {t.about.toolsEnd}
            </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default React.memo(About);
