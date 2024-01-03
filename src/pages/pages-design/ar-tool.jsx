import Link from "node_modules/next/link";
import Row from "node_modules/react-bootstrap/esm/Row";
import React from "react";
import { Container, Col } from "react-bootstrap";

export default function artool() {
  return (
    <>
      <div className="main-wrapper">
        <div className="page-top-bar">
          <Container fluid>
            <div className="top-bar-inner">
              <div className="top-bar-left">
                <Link href="#" className="text-link">
                  <img src="/assets/images/arrow-left.svg" alt="back" />
                </Link>
              </div>
              <div className="top-bar-center">
                <h2>AR Tool</h2>
              </div>
            </div>
          </Container>
        </div>
        <div className="main-wrapper-content">
          <div className="ar-tool-middle">
            <Container fluid>
              <div className="ar-tool-inner">
                <Row>
                  <Col lg={4} md={6} sm={6} xs={6}>
                    <div className="tool-menu-link">
                      <Link href="/pages-design/categories" className="text-link">
                        <div className="menu-link-icon">
                          <img
                            src="/assets/images/curtains-drapes.svg"
                            alt="curtains-drapes"
                          />
                        </div>
                        <div className="menu-link-text">
                          <p>Curtains & Drapes</p>
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col lg={4} md={6} sm={6} xs={6}>
                    <div className="tool-menu-link">
                      <Link href="#" className="text-link">
                        <div className="menu-link-icon">
                          <img
                            src="/assets/images/blinds-shades.svg"
                            alt="Blinds & Shades"
                          />
                        </div>
                        <div className="menu-link-text">
                          <p>Blinds & Shades</p>
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col lg={4} md={6} sm={6} xs={6}>
                    <div className="tool-menu-link">
                      <Link href="#" className="text-link">
                        <div className="menu-link-icon">
                          <img
                            src="/assets/images/wallpapers.svg"
                            alt="Wallpapers"
                          />
                        </div>
                        <div className="menu-link-text">
                          <p>Wallpapers</p>
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col lg={4} md={6} sm={6} xs={6}>
                    <div className="tool-menu-link">
                      <Link href="#" className="text-link">
                        <div className="menu-link-icon">
                          <img
                            src="/assets/images/smart-home.svg"
                            alt="Smart Home"
                          />
                        </div>
                        <div className="menu-link-text">
                          <p>Smart Home</p>
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col lg={4} md={6} sm={6} xs={6}>
                    <div className="tool-menu-link">
                      <Link href="#" className="text-link">
                        <div className="menu-link-icon">
                          <img
                            src="/assets/images/folding-doors.svg"
                            alt="Folding Doors"
                          />
                        </div>
                        <div className="menu-link-text">
                          <p>Folding Doors</p>
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col lg={4} md={6} sm={6} xs={6}>
                    <div className="tool-menu-link">
                      <Link href="#" className="text-link">
                        <div className="menu-link-icon">
                          <img
                            src="/assets/images/outdoor.svg"
                            alt="Outdoor"
                          />
                        </div>
                        <div className="menu-link-text">
                          <p>Outdoor</p>
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col lg={4} md={6} sm={6} xs={6}>
                    <div className="tool-menu-link">
                      <Link href="#" className="text-link">
                        <div className="menu-link-icon">
                          <img
                            src="/assets/images/furnishings.svg"
                            alt="furnishings"
                          />
                        </div>
                        <div className="menu-link-text">
                          <p>Furnishings</p>
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col lg={4} md={6} sm={6} xs={6}>
                    <div className="tool-menu-link">
                      <Link href="#" className="text-link">
                        <div className="menu-link-icon">
                          <img
                            src="/assets/images/projects.svg"
                            alt="Projects"
                          />
                        </div>
                        <div className="menu-link-text">
                          <p>Projects</p>
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col lg={4} md={6} sm={6} xs={6}>
                    <div className="tool-menu-link">
                      <Link href="#" className="text-link">
                        <div className="menu-link-icon">
                          <img
                            src="/assets/images/franchise.svg"
                            alt="Franchise"
                          />
                        </div>
                        <div className="menu-link-text">
                          <p>Franchise</p>
                        </div>
                      </Link>
                    </div>
                  </Col>    
                </Row>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
