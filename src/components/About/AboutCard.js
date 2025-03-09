import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Alejandra González </span>
            from <span className="purple"> Caracas, Venezuela.</span>
          
            <br />
I am currently employed as a Development Coordinator at <a href="https://www.pagochinchin.com/" target="_blank" rel="noreferrer noopener">Chinchin Financial Solutions</a>.
<br />
            I have completed a diploma in development and several courses at Platzi.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Padel
            </li>
            <li className="about-activity">
              <ImPointRight />  Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">mgalejandra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
