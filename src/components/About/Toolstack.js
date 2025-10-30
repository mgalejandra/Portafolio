import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiRailway,
  SiNetlify,
  SiUbuntu,
} from "react-icons/si";

/**
 * Toolstack component displaying tools used by the developer
 * @component
 */
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="macOS">
        <SiMacos style={{ color: "#A8A8A8" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Ubuntu">
        <SiUbuntu style={{ color: "#E95420" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman style={{ color: "#FF6C37" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Slack">
        <SiSlack style={{ color: "#4A154B" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vercel">
        <SiVercel style={{ color: "#FFFFFF" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Railway">
        <SiRailway style={{ color: "#8B5CF6" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Netlify">
        <SiNetlify style={{ color: "#00C7B7" }} />
      </Col>
    </Row>
  );
}

export default React.memo(Toolstack);
