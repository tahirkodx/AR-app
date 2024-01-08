import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import shortid from "shortid";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { setCookie } from "cookies-next";
import axiosInstance from "@utils/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import nextI18nextConfig from "next-i18next.config";
import RangeSlider from "react-bootstrap-range-slider";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import Cookies from "js-cookie";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ARCustom from "@components/ARCustom";

export async function getServerSideProps(context) {
  const {
    params: { category_slug, slug },
  } = context;
  const { locale, req, res } = context;
  let newVisitorId = shortid.generate(Date());
  const oldVisitorId = req.cookies["visitorId"];
  const tabProps = {
    loop: false,
    autoHeight: false,
    pagination: false,
    slidesPerView: "auto",
    spaceBetween: 16,
  };

  if (!oldVisitorId) {
    setCookie("visitorId", newVisitorId, {
      req,
      res,
      maxAge: 24 * 60 * 60 * 365,
    });
  }

  let country = locale?.split("-")[0] || "uae";
  let lang = locale?.split("-")[1] || "en";
  const content = "item_info_listing";
  const siteId = process.env.NEXT_PUBLIC_SITE_ID;

  const response =
    await axiosInstance.get(`material/third?site=${siteId}&lang=${lang}&country=${country}
    &content=${content}&cn_iso=AE&slug_url=${slug}&category_slug=${category_slug}&_limit=100&_page=0`);
  if (response?.data?.result?.length == 0) {
    if (locale == "default") {
      return {
        redirect: {
          destination: `/`,
          permanent: true,
        },
      };
    } else {
      return {
        redirect: {
          destination: `/${locale}`,
          permanent: true,
        },
      };
    }
  }
  context.res.setHeader(
    "Cache-Control",
    "s-maxage=3600, stale-while-revalidate"
  );

  const objectResponse =
    await axiosInstance.get(`customization/getSteps?site=${siteId}&lang=${lang}&country=${country}
    &content=customization&cn_iso=AE&slug_url=${slug}`);
  if (objectResponse?.data?.result?.length == 0) {
    if (locale == "default") {
      return {
        redirect: {
          destination: `/`,
          permanent: true,
        },
      };
    } else {
      return {
        redirect: {
          destination: `/${locale}`,
          permanent: true,
        },
      };
    }
  }
  context.res.setHeader(
    "Cache-Control",
    "s-maxage=3600, stale-while-revalidate"
  );

  return {
    props: {
      ...(await serverSideTranslations(
        context.locale,
        ["common"],
        nextI18nextConfig
      )),
      // Will be passed to the page component as props
      productsList: response?.data?.result,
      productObject: objectResponse?.data?.result,
      tabProps,
      category_slug,
      slug,
    },
  };
}

function Products(props) {
  Cookies.set("arShow", false);
  const { tabProps, productsList, productObject, category_slug, slug } = props;
  const androidObjectPath =
    productObject?.COMPONENT[0]?.PARENT?.CHILD[0]?.OBJ_PATH_ANDROID;
  const [value, setWidthValue] = useState(25);
  const [heightValue, setHeightValue] = useState(25);
  const [mainProduct, setMainProduct] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [currentProduct, setCurrentProduct] = useState("");
  const [currentColor, setCurrentColor] = useState("");
  const [colorList, setColorList] = useState([]);
  const [modelUrl, setModelUrl] = useState("");
  const [loadModelAR, setLoadModelAR] = useState("");
  const [xVal, setX] = useState(1);
  const [yVal, setY] = useState(1);
  // model set
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
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
    setShow(true);
    const modelViewerTexture = document.querySelector("model-viewer#arModel");
    console.log(modelViewerTexture);
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

  useEffect(() => {
    let list = [];
    productsList?.MATERIAL[0].filter((product) => {
      list.push(product?.gallery[0]);
    });
    setProductImages(list);
    setCurrentProduct(list[0]);
    setMainProduct(productsList?.MATERIAL[0][0]);
    findProductColor(productsList?.MATERIAL[0][0]);
  }, [productsList]);

  const findProductColor = (product) => {
    let colors = [];
    Object.keys(product.sfi_ref_colors_item_id).map((key) => {
      let url = `${process.env.NEXT_PUBLIC_ITEM_IMG_WEBP_PATH}hover/${key}.webp`;
      colors.push({ id: +key, path: url });
    });
    setColorList(colors);
    setCurrentColor(colors[0]);
  };
  const handleChangeProduct = (item, index) => {
    findProductColor(productsList?.MATERIAL[0][index]);
    setCurrentProduct(item);
    setMainProduct(productsList?.MATERIAL[0][index]);
  };
  const findColorImage = (color) => {
    let data = mainProduct?.gallery.find(
      (item) => +item?.SLI_SII_CODE === color?.id
    );
    setCurrentColor(color);
    setCurrentProduct(data);
  };

  return (
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
              {androidObjectPath && (
                <div className="img-details-right">
                  <div className="item-img-code">
                    {/* <Button variant="primary" onClick={handleShow}>
                      Launch demo modal
                    </Button> */}
                    <ARCustom show={show} tabProps={tabProps} colorList={colorList} value={value} heightValue={heightValue} currentColor={currentColor}/>
                    <span
                      onClick={(e) => handleShow("android")}
                      className="text-link ar_tour_view"
                    >
                      AR View
                    </span>
                  </div>
                  {/* <div className="item-img-code">
                    
                    
                    <span onClick={e => handleShow('iphone')} className="text-link ar_tour_view">AR View IPhone</span>
                  </div> */}
                </div>
              )}
            </div>
            <div className="product-img-view">
              <img src={currentProduct?.SLI_IMAGE_PATH} alt="product" />
            </div>
          </div>
          <div className="select-product-bottom">
            <div className="product-bottom-content">
              <Tab.Container id="left-tabs-example" defaultActiveKey="product">
                <Row>
                  <Col sm={12} className="bottom-border">
                    <Nav className="product-bottom-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="product">Material</Nav.Link>
                      </Nav.Item>
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
                      <Tab.Pane eventKey="product">
                        <div className="tab-product-list">
                          <Swiper className="tab-product-slider" {...tabProps}>
                            {productImages?.map((prod, index) => (
                              <SwiperSlide key={prod?.SLI_SII_CODE}>
                                <div
                                  className={`tab-product-item ${
                                    prod.SLI_SII_CODE ===
                                    currentProduct?.SLI_SII_CODE
                                      ? "tab-product-active"
                                      : ""
                                  }`}
                                  onClick={() =>
                                    handleChangeProduct(prod, index)
                                  }
                                >
                                  <div className="tab-product-img">
                                    <img
                                      src={prod?.SLI_IMAGE_PATH}
                                      alt="product"
                                    />
                                  </div>
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      </Tab.Pane>
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
                                  onClick={() => findColorImage(color)}
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
                      {/* <Tab.Pane eventKey="material">
                                                <div className="material-pane-inner">
                                                    <Swiper
                                                        className="product-color-slider"
                                                        {...tabProps}
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
                                            </Tab.Pane> */}
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
            <div className="product-fotter-section">
              {/* <div className="product-color">
                                <Link href="#">
                                    <span className="product-color-span"></span>
                                </Link>
                            </div> */}
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
      {/* model */}
      {/* <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">AR Model</Modal.Title>
        </Modal.Header>
        <Modal.Body> */}
        
        {/* </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal> */}
    </div>
  );
}

export default Products;
