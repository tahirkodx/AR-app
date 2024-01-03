import Link from "node_modules/next/link";
import Row from "node_modules/react-bootstrap/esm/Row";
import React from "react";
import { Container, Col } from "react-bootstrap";

export default function categories() {
  return (
    <>
      <div className="main-wrapper">
        <div className="page-top-bar">
          <Container fluid>
            <div className="top-bar-inner">
              <div className="top-bar-left">
                <Link href="/pages-design/ar-tool" className="text-link">
                  <img src="/assets/images/arrow-left.svg" alt="back" />
                </Link>
              </div>
              <div className="top-bar-center">
                <h2>Curtains & Drapes</h2>
              </div>
            </div>
          </Container>
        </div>
        <div className="main-wrapper-content">
          <div className="categories-middle">
            <Container fluid>
              <div className="categories-inner">
                <ul className="categories-list">
                  <li>
                    <Link href="#" className="text-link">
                      <div className="categories-link">
                        <div className="categories-img">
                          <img
                            src="/assets/images/ripple-fold-curtains.svg"
                            alt="Pinch Pleat Curtains"
                          />
                        </div>
                        <div className="categories-text">
                          <p>Pinch Pleat Curtains</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-link">
                      <div className="categories-link">
                        <div className="categories-img">
                          <img
                            src="/assets/images/ripple-fold-curtains-2.svg"
                            alt="Pinch Pleat Curtains"
                          />
                        </div>
                        <div className="categories-text">
                          <p>Ripple Fold Curtains</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-link">
                      <div className="categories-link">
                        <div className="categories-img">
                          <img
                            src="/assets/images/blackout-curtains.svg"
                            alt="Pinch Pleat Curtains"
                          />
                        </div>
                        <div className="categories-text">
                          <p>Blackout Curtains</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-link">
                      <div className="categories-link">
                        <div className="categories-img">
                          <img
                            src="/assets/images/grommet-eyelet-curtains.svg"
                            alt="Pinch Pleat Curtains"
                          />
                        </div>
                        <div className="categories-text">
                          <p>Grommet Eyelet Curtains</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-link">
                      <div className="categories-link">
                        <div className="categories-img">
                          <img
                            src="/assets/images/tailored-pleat-curtains.svg"
                            alt="Pinch Pleat Curtains"
                          />
                        </div>
                        <div className="categories-text">
                          <p>Tailored Pleat Curtains</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-link">
                      <div className="categories-link">
                        <div className="categories-img">
                          <img
                            src="/assets/images/hospital-medical-curtains.svg"
                            alt="Pinch Pleat Curtains"
                          />
                        </div>
                        <div className="categories-text">
                          <p>Hospital & Medical Curtains</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-link">
                      <div className="categories-link">
                        <div className="categories-img">
                          <img
                            src="/assets/images/theatre-stage-curtain.svg"
                            alt="Pinch Pleat Curtains"
                          />
                        </div>
                        <div className="categories-text">
                          <p>Theatre & Stage Curtain</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-link">
                      <div className="categories-link">
                        <div className="categories-img">
                          <img
                            src="/assets/images/Hardware.svg"
                            alt="Pinch Pleat Curtains"
                          />
                        </div>
                        <div className="categories-text">
                          <p>Hardware</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
