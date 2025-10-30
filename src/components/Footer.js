import React, { useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SOCIAL_LINKS } from "../constants";
import { useLanguage } from "../context/LanguageContext";

/**
 * Footer component with social links and copyright
 * @component
 */
function Footer() {
  const { t } = useLanguage();
  const year = useMemo(() => new Date().getFullYear(), []);

  const socialLinks = [
    {
      name: "GitHub",
      url: SOCIAL_LINKS.github || "https://github.com/mgalejandra",
      icon: AiFillGithub,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/ale_dev21",
      icon: AiOutlineTwitter,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mgalejandra",
      icon: FaLinkedinIn,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ale_dev21",
      icon: AiFillInstagram,
    },
  ];

  return (
    <Container fluid className="footer" role="contentinfo">
      <Row>
        <Col md="4" className="footer-copywright">
              <h3>{t.footer.designedBy}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
              <h3>{t.footer.copyright} © {year} AG</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons" aria-label="Social media links">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <li key={social.name} className="social-icons">
              <a
                    href={social.url}
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                    aria-label={`Visit ${social.name} profile`}
              >
                    <Icon aria-hidden="true" />
              </a>
            </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default React.memo(Footer);
