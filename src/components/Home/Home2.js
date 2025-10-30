import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { useLanguage } from "../../context/LanguageContext";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const { t } = useLanguage();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t.home2.titleStart} <span className="purple">{t.home2.titlePurple}</span> {t.home2.titleEnd}
            </h1>
            <p className="home-about-body">
              {t.home2.p1}
              <br />
              <br />{t.home2.p2}
              <br />
              <br />{t.home2.p3}
              <br />
              <br />{t.home2.p4}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
         <Tilt>
          <img
        src={myImg}
        alt="avatar"
        style={{ width: '400px', height: 'auto' }} // Ajusta los valores según necesites
         className="img-fluid" 
        />
       </Tilt>
       </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t.home.findMeOn}</h1>
            <p>
              {t.home.connect.split("connect")[0]}
              <span className="purple">connect </span>
              {t.home.connect.split("connect")[1] || "with me"}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mgalejandra"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/ale_dev21"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mgalejandra/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ale_dev21/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
