import React, { useRef, useState } from "react";
import {
  Button,
  Modal,
  Image,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Swiper, SwiperSlide } from "swiper/react";
import RangeSlider from "react-bootstrap-range-slider";

const ARCustom = ({ show, tabProps, colorList, value, heightValue, currentColor }) => {
  const arButton = useRef({});

  const [modelUrl, setModelUrl] = useState("");
  const [loadModelAR, setLoadModelAR] = useState("");

  const [xVal, setX] = useState(1);
  const [yVal, setY] = useState(1);

  // model set
//   const [show, setShow] = useState(false);

  const handleShow = (value) => {
    console.log(value);
    if (value == "iphone") {
      setModelUrl(
        "https://uatapi.sedarglobal.com/uploads/100001/obj/ios/Update_RB_LRM_IO.usdz"
      );
      setLoadModelAR(value);
    } else {
      setModelUrl(
        "https://uatapi.sedarglobal.com/uploads/100001/obj/android/Update_CS_LRM_Louvo_011.glb"
      );
      setLoadModelAR(value);
    }
    // setShow(true);
    // const modelViewerTexture = document.querySelector("model-viewer#arModel");
    // console.log(modelViewerTexture)
    // modelViewerTexture.addEventListener("load", () => {
    //   // Check for AR support and handle accordingly
    //   if (modelViewerTexture.canActivateAR) {
    //     // Enable AR
    //     modelViewerTexture.activateAR();
    //   }
    // });
  };

  const changeTexture = (event) => {
    const modelViewerTexture = document.querySelector("model-viewer#arModel");
    console.log(modelViewerTexture);
    createAndApplyTexture("baseColorTexture", event.target.value);
  };

  const createAndApplyTexture = async (channel, value) => {
    const modelViewerTexture = document.querySelector("model-viewer#arModel");
    const material = modelViewerTexture.model.materials[0];
    const texture = await modelViewerTexture.createTexture(value);
    if (channel.includes("base") || channel.includes("metallic")) {
      material.pbrMetallicRoughness[channel].setTexture(texture);
    } else {
      material[channel].setTexture(texture);
    }
  };
  const updateModelSize = () => {
    let z = 1;
    const modelViewerTransform = document.querySelector("model-viewer#arModel");
    const frame = document.querySelector("#frame");
    if (modelViewerTransform) {
      modelViewerTransform.updateFraming();
    }
    const updateScale = () => {
      modelViewerTransform.scale = `${xVal} ${yVal} ${z}`;
    };
    if (frame) {
      updateScale();
    }
  };

  
  React.useEffect(() => {
    setTimeout(() => {
      if (show) {
        arButton.current.click();
      }
    }, 1000);
  }, [show]);

//   const handleClose = () => setShow(false);

  return (
    <>
      {/* <span
        onClick={(e) => handleShow("android")}
        className="text-link ar_tour_view"
      >
        AR View
      </span> */}
      {/* model */}
      {/* {!show ? "" : ( */}
      <div className="hidden" style={{display: 'none'}}>
            {/* <Col lg={12} md={12} sm={12} xs={12}>
              
                </Col> */}
            <model-viewer
              src={modelUrl}
              id="transform"
              camera-controls
              // ar-placement="wall"
              // touch-action="none"
              // touch-action="pan-y"
              ar
              orientation="0 0 0"
              shadow-intensity="1"
              interaction-prompt-style
              alt="A 3D model of a arModel"
              style={{ width: "100%", height: "900px" }}
            >
              <Button
                slot="ar-button"
                ref={arButton}
                style={{backgroundColor: 'white', borderRadius: '4px', border: 'none', display: 'block !important', color: 'black', position: 'absolute', top: '16px', right: '16px' }}
              >
                👋 Activate AR
              </Button>
              <div className="controls">
                <div className="select-product-middle">
                  <div className="select-product-inner">
                    <div className="select-product-bottom">
                      <div className="product-bottom-content">
                        <Tab.Container
                          id="left-tabs-example"
                          defaultActiveKey="color"
                        >
                          <Row>
                            <Col sm={12} className="bottom-border">
                              <Nav className="product-bottom-tab">
                                <Nav.Item>
                                  <Nav.Link eventKey="color">Color</Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                                <Nav.Link eventKey="material">Material</Nav.Link>
                                            </Nav.Item> */}
                                <Nav.Item>
                                  <Nav.Link eventKey="size">Size</Nav.Link>
                                </Nav.Item>
                              </Nav>
                            </Col>
                            <Col sm={12} className="bottom-border">
                              <Tab.Content className="product-tab-content">
                                <Tab.Pane eventKey="color">
                                  <div className="color-pane-inner">
                                    <Swiper
                                      className="product-color-slider"
                                      {...tabProps}
                                    >
                                      {colorList?.map((color, index) => (
                                        <SwiperSlide key={color?.id}>
                                          <div
                                            className={`product-color-item ${
                                              currentColor?.id === color?.id
                                                ? "active"
                                                : ""
                                            }`}
                                            onClick={() =>
                                              findColorImage(color)
                                            }
                                          >
                                            {/* <span style={{ backgroundColor: "#4D111C" }} /> */}
                                            <Image
                                              src={color?.path}
                                              alt="color"
                                              height={48}
                                              width={48}
                                            />
                                          </div>
                                        </SwiperSlide>
                                      ))}
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
                                            {/* <RangeSlider variant="primary" value={value} onChange={e => setWidthValue(+e.target.value)} min={minLimit} max={maxLimit}></RangeSlider> */}
                                            <RangeSlider
                                              value={value}
                                              onChange={(e) =>
                                                setWidthValue(e.target.value)
                                              }
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
                                            {/* <RangeSlider variant="primary" value={value} onChange={e => setWidthValue(+e.target.value)} min={minLimit} max={maxLimit}></RangeSlider> */}
                                            <RangeSlider
                                              value={heightValue}
                                              onChange={(e) =>
                                                setHeightValue(e.target.value)
                                              }
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
                      {/* <div className="product-fotter-section">
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
            </div> */}
                    </div>
                  </div>
                </div>
                {/* <p>Textures</p>
                <select className="form-select" id="normals2" onChange={changeTexture}>
                  <option>None</option>
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/item/customize/1671627645_f8f322dc568482793da5.jpg">texture1</option>
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/item/customize/1672146223_2b032d09292a5a13c4dd.jpg">texture2</option>
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/item/customize/1672144467_936bc286fddeb917e245.jpg">texture3</option>
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/item/customize/1671630602_6334f7305f2a7db05f47.jpg">texture4</option>
                  
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/item/customize/1672299884_f8bc4676cc432975a86c.jpg">texture5</option>
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/item/customize/1672299666_873b728a82de7fec5fd7.jpg">texture6</option>
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/item/customize/1666859310_975e68d4e62cdb7ba54c.jpg">texture7</option>
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/item/customize/1672299199_b4b1c1f05be4ecbe0827.jpg">texture8</option>
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/item/customize/1674739481_c8a265f614826dde4c7e.jpg">texture9</option>
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/obj/roller_blind/texture13.png">
                    texture13
                  </option>
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/obj/roller_blind/Aluminum.jpg">
                    Aluminum
                  </option>
                  <option value="https://uatapi.sedarglobal.com/uploads/100001/obj/roller_blind/Metal_02.jpg">
                    Metal_02
                  </option>
                </select>
                <div style={{ marginTop: "10px" }}>
                  Scale X: <input id="x" value={xVal} onChange={(e) => setX(e.target.value)} size="3" className="number form-select" />
                  Scale Y: <input id="y" value={yVal} onChange={(e) => setY(e.target.value)} size="3" className="number form-select" />
                </div>
                <div className="item-img-code">
                    <span id="frame" onClick={updateModelSize} className="text-link ar_tour_view btn btn-primary w-sm-100">Update Size</span>
                </div> */}
              </div>
            </model-viewer>
          </div>

          {/* )}    */}
           </>
  );
};

export default ARCustom;

ARCustom.defaultProps = {
  glbLink: "../assets/Roller2.glb",
  usdzLink: "../assets/RB.usdz",
  // img: '../assets/Roller.jpg',
  loading: "eager",
  reveal: "auto",
  autoRotate: false,
  cameraControls: true,
  shadowIntensity: "1",
  shadowSoftness: "0",
  exposure: "2",
  ar: true,
  arModes: "webxr scene-viewer quick-look",
  arScale: "auto",
  arPlacement: "wall",
  alt: "A 3D model",
};
