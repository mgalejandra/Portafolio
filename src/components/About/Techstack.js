import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJavascript1,
  DiLinux,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiDocker,
  DiJenkins,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiSolidity,
  SiPostgresql,
  SiJira,
  SiBlockchaindotcom,
  SiFigma,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Figma">
        <SiFigma style={{ color: "#F24E1E" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Linux">
        <DiLinux style={{ color: "#FCC624" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Jenkins">
        <DiJenkins style={{ color: "#D24939" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Blockchain">
        <SiBlockchaindotcom style={{ color: "#3D5AFE" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 style={{ color: "#F7DF1E" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Docker">
        <DiDocker style={{ color: "#2496ED" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs style={{ color: "#339933" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Jira">
        <SiJira style={{ color: "#0052CC" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact style={{ color: "#61DAFB" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Solidity">
        <SiSolidity style={{ color: "#363636" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb style={{ color: "#47A248" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit style={{ color: "#F05032" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase style={{ color: "#FFCA28" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Redis">
        <SiRedis style={{ color: "#DC382D" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
        <SiPostgresql style={{ color: "#336791" }} />
      </Col>
    </Row>
  );
}

export default React.memo(Techstack);
