import React, { useState } from "react";
import Link from "node_modules/next/link";
import Row from "node_modules/react-bootstrap/esm/Row";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import RangeSlider from "react-bootstrap-range-slider";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Col } from "react-bootstrap";

const tabproductslider = {
  loop: false,
  autoHeight: false,
  pagination: false,
  slidesPerView: "auto",
  spaceBetween: 16,
};
const tabcolorslider = {
  loop: false,
  autoHeight: false,
  pagination: false,
  slidesPerView: "auto",
  spaceBetween: 20,
};
const tabmaterialslider = {
  loop: false,
  autoHeight: false,
  pagination: false,
  slidesPerView: "auto",
  spaceBetween: 20,
};
export default function SelectProduct() {
  const [value, setValue] = useState(25);
  return (
    <>
      <div className="main-wrapper">
        <div className="select-product-middle">
          <div className="select-product-inner">
            <div className="select-product-img">
              <div className="product-img-details">
                <div className="img-details-left">
                  <button className="btn">
                    <img src="/assets/images/img-close-icon.svg" alt="close" />
                  </button>
                </div>
                <div className="img-details-right">
                  <div className="item-img-code">
                    <span>Item Code : XRB4100</span>
                  </div>
                </div>
              </div>
              <div className="product-img-view">
                <img
                  src="/assets/images/room-interior-design-1.jpg"
                  alt="product"
                />
              </div>
            </div>
            <div className="select-product-bottom">
              <div className="product-bottom-content">
                <Tab.Container
                  id="left-tabs-example"
                  defaultActiveKey="product"
                >
                  <Row>
                    <Col sm={12} className="bottom-border">
                      <Nav className="product-bottom-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="product">Product</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="color">Color</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="material">Material</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="size">Size</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={12} className="bottom-border">
                      <Tab.Content className="product-tab-content">
                        <Tab.Pane eventKey="product">
                          <div className="tab-product-list">
                            <Swiper
                              className="tab-product-slider"
                              {...tabproductslider}
                            >
                              <SwiperSlide>
                                <div className="tab-product-item tab-product-active">
                                  <div className="tab-product-img">
                                    <img
                                      src="/assets/images/tab-prod-1.jpg"
                                      alt="product"
                                    />
                                  </div>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="tab-product-item">
                                  <div className="tab-product-img">
                                    <img
                                      src="/assets/images/tab-prod-1.jpg"
                                      alt="product"
                                    />
                                  </div>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="tab-product-item">
                                  <div className="tab-product-img">
                                    <img
                                      src="/assets/images/tab-prod-1.jpg"
                                      alt="product"
                                    />
                                  </div>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="tab-product-item">
                                  <div className="tab-product-img">
                                    <img
                                      src="/assets/images/tab-prod-1.jpg"
                                      alt="product"
                                    />
                                  </div>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="tab-product-item">
                                  <div className="tab-product-img">
                                    <img
                                      src="/assets/images/tab-prod-1.jpg"
                                      alt="product"
                                    />
                                  </div>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="tab-product-item">
                                  <div className="tab-product-img">
                                    <img
                                      src="/assets/images/tab-prod-1.jpg"
                                      alt="product"
                                    />
                                  </div>
                                </div>
                              </SwiperSlide>
                            </Swiper>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="color">
                          <div className="color-pane-inner">
                            <Swiper
                              className="product-color-slider"
                              {...tabcolorslider}
                            >
                              <SwiperSlide>
                                <div className="product-color-item active">
                                  <span
                                    style={{ backgroundColor: "#4D111C" }}
                                  />
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="product-color-item">
                                  <span
                                    style={{ backgroundColor: "#130463" }}
                                  />
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="product-color-item">
                                  <span
                                    style={{ backgroundColor: "#035135" }}
                                  />
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="product-color-item">
                                  <span
                                    style={{ backgroundColor: "#4F09A8" }}
                                  />
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="product-color-item">
                                  <span
                                    style={{ backgroundColor: "#130463" }}
                                  />
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="product-color-item">
                                  <span
                                    style={{ backgroundColor: "#035135" }}
                                  />
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="product-color-item">
                                  <span
                                    style={{ backgroundColor: "#4F09A8" }}
                                  />
                                </div>
                              </SwiperSlide>
                            </Swiper>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="material">
                          <div className="material-pane-inner">
                            <Swiper
                              className="product-color-slider"
                              {...tabmaterialslider}
                            >
                              <SwiperSlide>
                                <div className="product-material-item active">
                                  <div className="product-material-icon">
                                    <div className="material-item-img">
                                      <img
                                        src="/assets/images/cotton.svg"
                                        alt="cotton"
                                      />
                                    </div>
                                  </div>
                                  <div className="product-material-name">
                                    <p>Cotton</p>
                                  </div>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="product-material-item">
                                  <div className="product-material-icon">
                                    <div className="material-item-img">
                                      <img
                                        src="/assets/images/silk.svg"
                                        alt="Silk"
                                      />
                                    </div>
                                  </div>
                                  <div className="product-material-name">
                                    <p>Silk</p>
                                  </div>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="product-material-item">
                                  <div className="product-material-icon">
                                    <div className="material-item-img">
                                      <img
                                        src="/assets/images/sartin.svg"
                                        alt="Sartin"
                                      />
                                    </div>
                                  </div>
                                  <div className="product-material-name">
                                    <p>Sartin</p>
                                  </div>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="product-material-item">
                                  <div className="product-material-icon">
                                    <div className="material-item-img">
                                      <img
                                        src="/assets/images/georget.svg"
                                        alt="Georget"
                                      />
                                    </div>
                                  </div>
                                  <div className="product-material-name">
                                    <p>Georget</p>
                                  </div>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="product-material-item">
                                  <div className="product-material-icon">
                                    <div className="material-item-img">
                                      <img
                                        src="/assets/images/cotton.svg"
                                        alt="cotton"
                                      />
                                    </div>
                                  </div>
                                  <div className="product-material-name">
                                    <p>Cotton</p>
                                  </div>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="product-material-item">
                                  <div className="product-material-icon">
                                    <div className="material-item-img">
                                      <img
                                        src="/assets/images/silk.svg"
                                        alt="Silk"
                                      />
                                    </div>
                                  </div>
                                  <div className="product-material-name">
                                    <p>Silk</p>
                                  </div>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="product-material-item">
                                  <div className="product-material-icon">
                                    <div className="material-item-img">
                                      <img
                                        src="/assets/images/sartin.svg"
                                        alt="Sartin"
                                      />
                                    </div>
                                  </div>
                                  <div className="product-material-name">
                                    <p>Sartin</p>
                                  </div>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="product-material-item">
                                  <div className="product-material-icon">
                                    <div className="material-item-img">
                                      <img
                                        src="/assets/images/georget.svg"
                                        alt="Georget"
                                      />
                                    </div>
                                  </div>
                                  <div className="product-material-name">
                                    <p>Georget</p>
                                  </div>
                                </div>
                              </SwiperSlide>
                            </Swiper>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="size">
                          <div className="size-pane-inner">
                            <div className="size-pane-left">
                              <Row>
                                <Col lg={6} md={6} sm={6} xs={6}>
                                  <div className="size-slider">
                                    <p className="size-label">Width</p>
                                    {/* <Form.Range /> */}
                                    {/* <RangeSlider variant="primary" value={value} onChange={e => setValue(+e.target.value)} min={minLimit} max={maxLimit}></RangeSlider> */}
                                    <RangeSlider
                                      value={value}
                                      onChange={(e) => setValue(e.target.value)}
                                      tooltipLabel={(currentValue) =>
                                        `${currentValue} cm`
                                      }
                                      tooltip="on"
                                    />
                                  </div>
                                </Col>
                                <Col lg={6} md={6} sm={6} xs={6}>
                                  <div className="size-slider">
                                    <p className="size-label">Height</p>
                                    {/* <Form.Range /> */}
                                    {/* <RangeSlider variant="primary" value={value} onChange={e => setValue(+e.target.value)} min={minLimit} max={maxLimit}></RangeSlider> */}
                                    <RangeSlider
                                      value={value}
                                      onChange={(e) => setValue(e.target.value)}
                                      tooltipLabel={(currentValue) =>
                                        `${currentValue} cm`
                                      }
                                      tooltip="on"
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </div>
                            <div className="size-pane-right">
                              <button className="size-refresh">
                                <img
                                  src="/assets/images/rotate-left.svg"
                                  alt="refresh"
                                />
                              </button>
                            </div>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
              <div className="product-fotter-section">
                <div className="product-color">
                  <Link href="#">
                    <span className="product-color-span"></span>
                  </Link>
                </div>
                <div className="product-addcart-btn">
                  <Link href="#" className="btn btn-primary w-sm-100">
                    Add to Cart - USD 200.00
                  </Link>
                </div>
                <div className="product-link-share">
                  <Link href="#">
                    <img src="/assets/images/share-icon.svg" alt="share" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
