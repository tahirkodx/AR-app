import { useState } from "react";
import Button from "react-bootstrap/Button";
import Link from "node_modules/next/link";
import Row from "node_modules/react-bootstrap/esm/Row";
import React from "react";
import Modal from "react-bootstrap/Modal";
import { Container, Col } from "react-bootstrap";

export default function Categories() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                <h2>Preview</h2>
              </div>
            </div>
          </Container>
        </div>
        <div className="main-wrapper-content">
          <div className="preview-middle">
            <Container fluid>
              <div className="preview-inner">
                <Row>
                  <Col lg={5} md={6} sm={12} xs={12}>
                    <div className="preview-product-img">
                      <img
                        src="/assets/images/preview-product.svg"
                        alt="preview-product"
                      />
                    </div>
                  </Col>
                  <Col lg={7} md={6} sm={12} xs={12}>
                    <div className="preview-productdetails">
                      <div className="preview-product-information">
                        <div className="preview-product-name">
                          <h2>Fabric Curtain - Pinch Pleat</h2>
                        </div>
                        <div className="preview-product-price">
                          <span>USD 231.66</span>
                        </div>
                      </div>
                      <div className="preview-product-description">
                        <ul>
                          <li>
                            <span className="product-features-name">
                              Item Code
                            </span>
                            <span className="product-features-details">
                              XRB4200
                            </span>
                          </li>
                          <li>
                            <span className="product-features-name">
                              Dimensions
                            </span>
                            <span className="product-features-details">
                              170 x 210 CM ( W & H )
                            </span>
                          </li>
                          <li>
                            <span className="product-features-name">
                              Quantity
                            </span>
                            <span className="product-features-details"> 2</span>
                          </li>
                          <li>
                            <span className="product-features-name">
                              Mounting Option
                            </span>
                            <span className="product-features-details">
                              Outside
                            </span>
                          </li>
                          <li>
                            <span className="product-features-name">
                              Control Type
                            </span>
                            <span className="product-features-details">
                              Manual
                            </span>
                          </li>
                          <li>
                            <span className="product-features-name">
                              Roll Type
                            </span>
                            <span className="product-features-details">
                              Inside Rolling
                            </span>
                          </li>
                          <li>
                            <span className="product-features-name">
                              Valance Option
                            </span>
                            <span className="product-features-details">
                              Without Valance
                            </span>
                          </li>
                          <li>
                            <span className="product-features-name">
                              Bottom Bar
                            </span>
                            <span className="product-features-details">
                              Covered
                            </span>
                          </li>
                          <li>
                            <span className="product-features-name">
                              Installation Surface
                            </span>

                            <span className="product-features-details">
                              Wall
                            </span>
                          </li>
                          <li>
                            <span className="product-features-name">
                              MaterialSurface
                            </span>
                            <span className="product-features-details">
                              Concrete
                            </span>
                          </li>
                          <li>
                            <span className="product-features-name">
                              Item Label
                            </span>
                            <span className="product-features-details">
                              Other
                            </span>
                          </li>
                          <li>
                            <span className="product-features-name">
                              Operating Side
                            </span>
                            <span className="product-features-details">
                              Right
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="preview-add-cart">
                        <button
                          className="btn btn-primary w-sm-100"
                          onClick={handleShow}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </div>
      </div>
      {/* Product Added to Your Cart */}
      <Modal
        show={show}
        onHide={handleClose}
        size="md"
        centered
        className="add-product-modal"
      >
        <Modal.Body>
          <div className="product-modal-content">
            <div className="product-modal-top">
              <div className="success-icon">
                <img src="/assets/images/tick-circle.svg" alt="success" />
              </div>
              <div className="product-modal-title">
                <h2>Product Added to Your Cart</h2>
              </div>
            </div>
            <div className="product-modal-center">
              <div className="cart-added-product">
                <div className="added-product-img">
                  <img src="/assets/images/prod-1.svg" alt="success" />
                </div>
                <div className="added-product-details">
                  <h2>Fabric Curtain - Pinch Pleat</h2>
                  <ul className="added-product-description">
                    <li>
                      <span class="product-features-name">Item Code :</span>
                      <span class="product-features-details"> XRB4200</span>
                    </li>
                    <li>
                      <span class="product-features-name">Brand :</span>
                      <span class="product-features-details"> york weave</span>
                    </li>
                  </ul>
                  <div className="added-product-price">
                    <p>USD 231.66</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-modal-bottom">
              <Row>
                <Col lg={6} sm={6} xs={6}>
                  <button className="btn btn-outline-primary">Add New Product</button>
                </Col>
                <Col lg={6} sm={6} xs={6}>
                <button className="btn btn-primary">View Cart</button>
                </Col>
              </Row>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
