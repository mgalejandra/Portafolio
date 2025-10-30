import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/cv_ale.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

/**
 * Resume component displaying CV/Resume PDF
 * @component
 */
function ResumeNew() {
  const { t } = useLanguage();
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const scale = width > 1200 ? 0.9 : width > 800 ? 0.8 : width > 500 ? 0.7 : 0.5;

  return (
    <Container fluid className="resume-section" aria-label="Resume section">
      <Particle />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Row className="resume-header">
            <Col>
                  <h1 className="resume-heading">
                    {t.resume.headingStart} <strong className="purple">{t.resume.headingStrong}</strong>
                  </h1>
                  <p className="resume-subheading">{t.resume.subheading}</p>
            </Col>
          </Row>

          <Row className="resume-button-row">
            <Col style={{ textAlign: "center" }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                    <Button
                  variant="primary"
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-download-btn"
                      aria-label={t.resume.download}
                >
                      <AiOutlineDownload />
                      &nbsp;{t.resume.download}
                </Button>
              </motion.div>
            </Col>
          </Row>

          <Row className="resume">
            <Col>
              <motion.div
                className="resume-pdf-container"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Document
                  file={pdf}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={
                    <div className="resume-loading">
                      <p>Loading resume...</p>
                    </div>
                  }
                  error={
                    <div className="resume-error">
                      <p>Failed to load resume. Please use the download button.</p>
                    </div>
                  }
                >
                  <Page
                    pageNumber={1}
                    scale={scale}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </Document>
              </motion.div>
            </Col>
          </Row>

          <Row className="resume-button-row resume-button-bottom">
            <Col style={{ textAlign: "center" }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                    <Button
                  variant="primary"
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-download-btn"
                      aria-label={t.resume.download}
                >
                      <AiOutlineDownload />
                      &nbsp;{t.resume.download}
                </Button>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default ResumeNew;
