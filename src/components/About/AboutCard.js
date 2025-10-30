import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useLanguage } from "../../context/LanguageContext";

/**
 * About card component displaying personal information
 * @component
 */
function AboutCard() {
  const { t } = useLanguage();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t.aboutCard.p1}
            <br />
            {t.aboutCard.jobPrefix}{" "}
            <a 
              href="https://www.pagochinchin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit Chinchin Financial Solutions website"
            >
              {t.aboutCard.company}
            </a>.
<br />
            {t.aboutCard.p2}
            <br />
            <br />
            {t.aboutCard.p3}
          </p>
          <ul aria-label="Personal interests">
            <li className="about-activity">
              <ImPointRight aria-hidden="true" /> {t.aboutCard.like1}
            </li>
            <li className="about-activity">
              <ImPointRight aria-hidden="true" /> {t.aboutCard.like2}
            </li>
            <li className="about-activity">
              <ImPointRight aria-hidden="true" /> {t.aboutCard.like3}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "{t.aboutCard.quote}"{" "}
          </p>
          <footer className="blockquote-footer">mgalejandra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default React.memo(AboutCard);
