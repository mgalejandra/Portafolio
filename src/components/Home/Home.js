import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { useLanguage } from "../../context/LanguageContext";
import SmartImage from "../common/SmartImage";

/**
 * Home component - Main landing section of the portfolio
 * @component
 */
function Home() {
  const { t } = useLanguage();

  return (
    <section aria-label="Home section">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  {t.home.hi}{" "}
                  <span 
                    className="wave" 
                    role="img" 
                    aria-label="waving hand emoji"
                  >
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                  {t.home.im}
                  <strong className="main-name"> {t.home.name}</strong>
              </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              </motion.div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
              >
                <Tilt
                  tiltMaxAngleX={12}
                  tiltMaxAngleY={12}
                  glareEnable
                  glareMaxOpacity={0.25}
                  glareColor="#c770f0"
                  glarePosition="all"
                  scale={1.02}
                  transitionSpeed={250}
                >
                  <SmartImage
                    src={homeLogo}
                    alt="Alejandra González - Full Stack Developer illustration"
                    className="img-fluid"
                    style={{ maxHeight: "450px" }}
                    width="450"
                    height="450"
                  />
                </Tilt>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default React.memo(Home);
